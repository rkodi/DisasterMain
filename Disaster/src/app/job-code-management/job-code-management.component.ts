import { Component, OnInit, Input } from '@angular/core';
import { jobsService } from '../jobs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-job-code-management',
  templateUrl: './job-code-management.component.html',
  styleUrls: ['./job-code-management.component.css']
})
export class JobCodeManagementComponent implements OnInit {

  
  public jobs=[]; 
  public body: any;

  public id: any;
  private editForm1: boolean = false;
  public editForm: FormGroup;

  errorMsg;

  

  constructor(private _JobCode: jobsService, private fb: FormBuilder, private _router: Router, private _route: ActivatedRoute ) { }

  ngOnInit() {

    this.editForm = this.fb.group({
      code: [],
      description: [],
      rate: [],
      maxHours: []
    });

    this._JobCode.getJobs().subscribe (data => this.jobs=data,
      error => this.errorMsg=error)
    
  }

  editJob(id: any) {
    this.id = id;
    // console.log(this.id)
    this._JobCode.getJobsById(this.id).subscribe(data => {
      console.log(data)});
    
    
    this._router.navigate(['list/edit', this.id])
    
    
    // this.editForm1 = true;

  }

  deleteJob(id: string) {
    this.id = id;
    console.log(this.id)
      this._JobCode.deleteJobs(this.id)
      .subscribe(data => {
        console.log(data),
        error => this.errorMsg = error.statusText;        
      });
  }

 


}
