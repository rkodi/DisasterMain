import { Component, OnInit } from '@angular/core';
//import{Timecard} from '../Timecard';
import {TimecardService} from '../timecard.service';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { Timecard } from '../Timecard';
import {MachineService} from '../Services/machine.service'
import { Machines } from '../Models/machine';


@Component({
  selector: 'app-contractor-tc-submit',
  templateUrl: './contractor-tc-submit.component.html',
  styleUrls: ['./contractor-tc-submit.component.css']
})
export class ContractorTcSubmitComponent implements OnInit {
  public timecardForm: FormGroup;
  public time:number=0
  public total:number=0
  public machines: Machines[];
  public machineHours: Number[] = [];
  public machineTotals :Number[] = [];
  public machineRents :Number[] = [];

  
  errorMsg="";

  constructor(private fb: FormBuilder, private _TimecardService: TimecardService,private router:Router, private machineService: MachineService) { }

  ngOnInit() {
    this.timecardForm = this.fb.group({
      sitecode:['',[Validators.required,Validators.minLength(3)]],
      contractor:[""],
      totalHours:[""],
      totalAmount:[],
      approved:[false],
      machines:this.fb.array([this.initMachine()]),
      labors:this.fb.array([this.initLabor()])
    })
    this.machineService.getMachines()
      .subscribe(data => this.machines = data,
        error => this.errorMsg = error);
    
  }

  initMachine() {
    return this.fb.group({
        machineCode:[],
        hoursUsed:[],
        total:[]
    });
}

initLabor() {
  return this.fb.group({
      laborCode:[],
      hoursWorked:[],
      total:[]
  });
}

addLabor() {
  const control = <FormArray>this.timecardForm.controls['labors'];
  control.push(this.initLabor());
}
removeLabor(i: number) {
  const control = <FormArray>this.timecardForm.controls['labors'];
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
setMachineHours(hours,i){
  this.machineHours[i] = Number(hours);
  this.calculateMachineTotal(i);
}
 setMachineRent(event,i) {
   this.machineRents[i] = event.rent;
   this.calculateMachineTotal(i);
}
calculateMachineTotal(i){
  if(this.machineHours[i] !=undefined && this.machineRents[i] != undefined){
    this.machineTotals[i] = Number(this.machineHours[i]) * Number(this.machineRents[i])
  }

}

  onSubmit(){
    console.log(this.machines)
    console.log(this.timecardForm.value)
    var sCode=this.timecardForm.value.sitecode
    var contractor =this.timecardForm.value.contractor
    
    console.log(this.time)
    var machineControl = this.timecardForm.get('machines') as FormArray;
    var laborControl = this.timecardForm.get('labors') as FormArray;
    
    for(var i = 0; i<laborControl.length;i++){
      console.log(laborControl.at(i).value.hoursUsed)
      this.time =  this.time + Number(laborControl.at(i).value.hoursWorked)
      this.total = this.total + Number(laborControl.at(i).value.total)
    }
    for(var i = 0; i<machineControl.length;i++){
      console.log(machineControl.at(i).value.hoursUsed)
      this.total = this.total + Number(machineControl.at(i).value.total)
    }
    console.log(this.total)
    var timecard= new Timecard(sCode,contractor,this.time,this.total,this.timecardForm.value.approved)
    console.log(timecard)

    this._TimecardService.createTimecard(timecard).subscribe()
    setTimeout(() => this.router.navigate(['contractor']),5);
    
  }

}
