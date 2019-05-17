import { Component, OnInit } from '@angular/core';
//import{Timecard} from '../Timecard';
import {TimecardService} from '../timecard.service';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router} from '@angular/router';
import { Timecard } from '../Timecard';


@Component({
  selector: 'app-contractor-tc-submit',
  templateUrl: './contractor-tc-submit.component.html',
  styleUrls: ['./contractor-tc-submit.component.css']
})
export class ContractorTcSubmitComponent implements OnInit {
  public timecardForm: FormGroup;
  public time:number=0
  public total:number=0
  //public machineForm: FormGroup;
  //model= new Timecard('code','contractor',3,4,false);
  
  errorMsg="";

  constructor(private fb: FormBuilder, private _TimecardService: TimecardService,private router:Router) { }

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

addMachine() {
  const control = <FormArray>this.timecardForm.controls['machines'];
  control.push(this.initMachine());
}

  onSubmit(){
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
      //this.time =  this.time + Number(machineControl.at(i).value.hoursUsed)
      this.total = this.total + Number(machineControl.at(i).value.total)
    }
    console.log(this.total)
    var timecard= new Timecard(sCode,contractor,this.time,this.total,this.timecardForm.value.approved)
    console.log(timecard)

    this._TimecardService.createTimecard(timecard).subscribe()
    setTimeout(() => this.router.navigate(['contractor']),5);
    
  }

}
