import { Component, OnInit } from '@angular/core';
//import{Timecard} from '../Timecard';
import {TimecardService} from '../timecard.service';
import {FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contractor-tc-submit',
  templateUrl: './contractor-tc-submit.component.html',
  styleUrls: ['./contractor-tc-submit.component.css']
})
export class ContractorTcSubmitComponent implements OnInit {
  public timecardForm: FormGroup;
  //model= new Timecard('code','contractor',3,4,false);
  errorMsg="";

  constructor(private fb: FormBuilder, private _TimecardService: TimecardService,private router:Router) { }

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
    this._TimecardService.createTimecard(this.timecardForm.value).subscribe()
    setTimeout(() => this.router.navigate(['contractor']),5);
    
  }

}
