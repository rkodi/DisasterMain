import { Component, OnInit } from '@angular/core';
//import{Timecard} from '../Timecard';
import {TimecardService} from '../timecard.service';

@Component({
  selector: 'app-admin-tc',
  templateUrl: './admin-tc.component.html',
  styleUrls: ['./admin-tc.component.css']
})
export class AdminTCComponent implements OnInit {
  public timeCards=[];
  public errorMsg;

  constructor(private _TimecardService: TimecardService) { }

  ngOnInit() {
    this._TimecardService.getTimecard().subscribe(data => this.timeCards=data, error => this.errorMsg = error);
  }

  onClick(){
    
   // this._TimecardService.createTimecard(this.timecardForm.value).subscribe(data =>console.log(data),error =>console.log(error))
  }

}
