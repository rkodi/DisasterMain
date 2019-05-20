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
  public machineRents: Number[] = [];
  public jobs: Jobs[];
  public jobRents: Number[] = [];
  errorMsg = "";
  constructor(private fb: FormBuilder, private _TimecardService: TimecardService, private router: Router, private machineService: MachineService, private jobService: jobsService) { }
  ngOnInit() {
    this.timecardForm = this.fb.group({
      sitecode: ['', [Validators.required, Validators.minLength(3)]],
      contractor: [""],
      totalHours: [""],
      totalAmount: [],
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
      hoursUsed: [],
      total:[]
    });
  }
  initJob() {
    return this.fb.group({
      jobCode: [],
      hoursWorked: [],
      total:[]
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
  setMachineRent(event, i) {
    this.machineRents[i] = event.rent;
    this.calculateMachineTotal(i);
  }
  calculateMachineTotal(i) {
    if (this.timecardForm.get('machines').value[i].hoursUsed != undefined && this.machineRents[i] != undefined) {
      this.timecardForm.get('machines').value[i].total = this.timecardForm.get('machines').value[i].hoursUsed * Number(this.machineRents[i])
    }
  }
  setJobRent(event, i) {
    this.jobRents[i] = event.rate;
    this.calculateJobTotal(i);
  }
  calculateJobTotal(i) {
    if (this.timecardForm.get('jobs').value[i].hoursWorked != undefined && this.jobRents[i] != undefined) {
      this.timecardForm.get('jobs').value[i].total = this.timecardForm.get('jobs').value[i].hoursWorked * Number(this.jobRents[i])
    }
  }
  onSubmit() {
    var sCode = this.timecardForm.value.sitecode
    var contractor = this.timecardForm.value.contractor
    for (var i = 0; i < this.timecardForm.get('jobs').value.length; i++) {
      this.time = Number(this.time) + Number(this.timecardForm.get('jobs').value[i].hoursWorked)
      this.total += this.timecardForm.get('jobs').value[i].total
    }
    for (var i = 0; i < this.timecardForm.get('machines').value.length; i++) {
      this.total = Number(this.total) + this.timecardForm.get('machines').value[i].total
    }
    var timecard = new Timecard(sCode, contractor, this.time, this.total, false)
    this._TimecardService.createTimecard(timecard).subscribe()
    setTimeout(() => this.router.navigate(['contractor']), 8);
  }
}
