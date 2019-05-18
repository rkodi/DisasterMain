import { Component, OnInit, Input } from '@angular/core';
import { jobsService } from '../jobs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-job-code-edit',
  templateUrl: './job-code-edit.component.html',
  styleUrls: ['./job-code-edit.component.css']
})
export class JobCodeEditComponent implements OnInit {

  public jobs=[]; 
  public body: any;

  private id: any;
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

    this._JobCode.getJobsById(this.id).subscribe (data => this.jobs=data,
      error => this.errorMsg=error)
     

    
  }

  editJob(id: any) {
    this.id = id;
    console.log(this.id)
    // this._JobCode.getJobsById(this.id).subscribe(data => {
    //   console.log(data)});
  }

  onSubmit() {
    console.log(this.editForm.value);
    this._JobCode.postJobs(this.editForm.value)
      .subscribe(
        response => console.log( response),
        error => console.error('Error!', error)
      );
  }


}