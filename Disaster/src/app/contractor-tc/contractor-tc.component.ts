import { Component, OnInit } from '@angular/core';
//import{Timecard} from '../Timecard';
import {TimecardService} from '../timecard.service';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-contractor-tc',
  templateUrl: './contractor-tc.component.html',
  styleUrls: ['./contractor-tc.component.css']
})
export class ContractorTCComponent implements OnInit {
  public timecardForm: FormGroup;
  //model= new Timecard('code','contractor',3,4,false);
  errorMsg="";

  constructor(private fb: FormBuilder, private _TimecardService: TimecardService) { }

  ngOnInit() {
    this.timecardForm = this.fb.group({
      code:['',[Validators.required,Validators.minLength(3)]],
      contractor:[""],
      totalHours:[""],
      totalAmount:[],
      approved:[false]
    })
  }
  onSubmit(){
    this._TimecardService.createTimecard(this.timecardForm.value).subscribe(data =>{console.log(this.timecardForm.value);console.log(data)},error =>console.log(error))
  }

}
