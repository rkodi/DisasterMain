import { Component, OnInit } from '@angular/core';
import { TimecardService } from '../timecard.service';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Timecard } from '../Timecard';
import { MachineService } from '../Services/machine.service'
import { Machines } from '../Models/machine';
import { jobsService } from '../jobs.service'
import { Jobs } from '../job'
@Component({
  selector: 'app-contractor-tc-submit',
  templateUrl: './contractor-tc-submit.component.html',
  styleUrls: ['./contractor-tc-submit.component.css']
})
export class ContractorTcSubmitComponent implements OnInit {
  public timecardForm: FormGroup;
  public time: number = 0
  public total: number = 0
  public machines: Machines[];
  public machineHours: Number[] = [];
  public machineTotals: Number[] = [];
  public machineRents: Number[] = [];
  public jobs: Jobs[];
  public jobHours: Number[] = [];
  public jobTotals: Number[] = [];
  public jobRents: Number[] = [];
  errorMsg = "";
  constructor(private fb: FormBuilder, private _TimecardService: TimecardService, private router: Router, private machineService: MachineService, private jobService: jobsService) { }
  ngOnInit() {
    this.timecardForm = this.fb.group({
      sitecode: ['', [Validators.required, Validators.minLength(3)]],
      contractor: [""],
      totalHours: [""],
      totalAmount: [],
      approved: [false],
      machines: this.fb.array([this.initMachine()]),
      jobs: this.fb.array([this.initJob()])
    })
    this.machineService.getMachines()
      .subscribe(data => this.machines = data,
        error => this.errorMsg = error);
    this.jobService.createJobs().subscribe(data => this.jobs = data, error => this.errorMsg = error)
  }
  initMachine() {
    return this.fb.group({
      machineCode: [""],
      hoursUsed: []
    });
  }
  initJob() {
    return this.fb.group({
      jobCode: [],
      hoursWorked: []
    });
  }
  addJob() {
    const control = <FormArray>this.timecardForm.controls['jobs'];
    control.push(this.initJob());
  }
  removeJob(i: number) {
    const control = <FormArray>this.timecardForm.controls['jobs'];
    control.removeAt(i);
  }
  addMachine() {
    const control = <FormArray>this.timecardForm.controls['machines'];
    control.push(this.initMachine());
  }
  removeMachine(i: number) {
    const control = <FormArray>this.timecardForm.controls['machines'];
    control.removeAt(i);
  }
  setMachineHours(hours, i) {
    this.machineHours[i] = Number(hours);
    this.calculateMachineTotal(i);
  }
  setMachineRent(event, i) {
    this.machineRents[i] = event.rent;
    this.calculateMachineTotal(i);
  }
  calculateMachineTotal(i) {
    if (this.machineHours[i] != undefined && this.machineRents[i] != undefined) {
      this.machineTotals[i] = Number(this.machineHours[i]) * Number(this.machineRents[i])
    }
  }
  setJobHours(hours, i) {
    this.jobHours[i] = Number(hours);
    this.calculateJobTotal(i);
  }
  setJobRent(event, i) {
    this.jobRents[i] = event.rate;
    this.calculateJobTotal(i);
  }
  calculateJobTotal(i) {
    if (this.jobHours[i] != undefined && this.jobRents[i] != undefined) {
      this.jobTotals[i] = Number(this.jobHours[i]) * Number(this.jobRents[i])
    }
  }
  onSubmit() {
    var sCode = this.timecardForm.value.sitecode
    var contractor = this.timecardForm.value.contractor
    var jobControl = this.timecardForm.get('jobs') as FormArray;
    for (var i = 0; i < jobControl.length; i++) {
      this.time = this.time + Number(jobControl.at(i).value.hoursWorked)
      this.total = this.total + Number(this.jobTotals[i])
    }
    for (var i = 0; i < this.machineTotals.length; i++) {
      this.total = Number(this.total) + Number(this.machineTotals[i])
    }
    var timecard = new Timecard(sCode, contractor, this.time, this.total, this.timecardForm.value.approved)
    this._TimecardService.createTimecard(timecard).subscribe()
    setTimeout(() => this.router.navigate(['contractor']), 8);
  }
}
