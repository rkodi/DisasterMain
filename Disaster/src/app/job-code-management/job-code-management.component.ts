import { Component, OnInit } from '@angular/core';
import { jobsService } from '../jobs.service';


@Component({
  selector: 'app-job-code-management',
  templateUrl: './job-code-management.component.html',
  styleUrls: ['./job-code-management.component.css']
})
export class JobCodeManagementComponent implements OnInit {

  public jobs=[];

  constructor(private _JobsSer: jobsService) { }

  ngOnInit() {
    this._JobsSer.create().subscribe (data => this.jobs=data,
      error => this.errorMsg=error)
    
  }

}
