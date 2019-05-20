import { Component, OnInit } from '@angular/core';
import { TimecardService } from 'src/app/timecard.service';

@Component({
  selector: 'app-admin-tc',
  templateUrl: './admin-tc.component.html',
  styleUrls: ['./admin-tc.component.css']
})
export class AdminTCComponent implements OnInit {
  public timeCards=[];
  public errorMsg;

  trackByFn(index, cards) {
    return index; // or item.id
  }

  constructor(private _TimecardService: TimecardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(){
    this._TimecardService.getTimecard().subscribe(data => this.timeCards=data, error => this.errorMsg = error);
  }
  approve(id:string){
    console.log("in method")
    this._TimecardService.updateTimecard(id).subscribe( error => this.errorMsg = error);
    setTimeout(() => this.getCards(),5)
    
    
  }
  deny(id:string){
    console.log("in method")
    this._TimecardService.deleteTimecard(id).subscribe( error => this.errorMsg = error);
    setTimeout(() => this.getCards(),5);
  }

}
