import { Component, OnInit } from '@angular/core';
import { jobsService } from '../jobs.service';


@Component({
  selector: 'app-job-code-management',
  templateUrl: './job-code-management.component.html',
  styleUrls: ['./job-code-management.component.css']
})
export class JobCodeManagementComponent implements OnInit {

  public jobs=[]; 
  public body: any;

  private id: string;
  private editForm: boolean = false;

  errorMsg;

  constructor(private _JobsSer: jobsService) { }

  ngOnInit() {
    this._JobsSer.getJobs().subscribe (data => this.jobs=data,
      error => this.errorMsg=error)
    
  }

  editJob(id: string) {
    this.id = id;
    this.editForm = true;

  }

  deleteJob(id: string) {
    this.id = id;
    console.log(this.id)
      this._JobsSer.deleteJobs(this.id)
      .subscribe(data => {
        console.log(data),
        error => this.errorMsg = error.statusText;        
      });
  }


}
