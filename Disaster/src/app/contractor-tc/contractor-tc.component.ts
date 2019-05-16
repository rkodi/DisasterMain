import { Component, OnInit } from '@angular/core';
import {TimecardService} from '../timecard.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-contractor-tc',
  templateUrl: './contractor-tc.component.html',
  styleUrls: ['./contractor-tc.component.css']
})
export class ContractorTCComponent implements OnInit {
  public timeCards=[];
  public errorMsg;

  constructor(private _TimecardService: TimecardService,private router:Router) { }

  ngOnInit() {
    this._TimecardService.getTimecard().subscribe(data => this.timeCards=data, error => this.errorMsg = error);
  }
  newTimeCard(){
    this.router.navigate(['contractor/submit']);
  }
}

