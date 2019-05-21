import { Component, OnInit, Input } from '@angular/core';
import { jobsService } from '../jobs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Jobs } from '../job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-job-code-edit',
  templateUrl: './job-code-edit.component.html',
  styleUrls: ['./job-code-edit.component.css']
})
export class JobCodeEditComponent implements OnInit {

 
  public Job: Jobs; 
  public body: any;

  id;
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

      // this._route.paramMap.subscribe(parameterMap => {
      // this.id = parameterMap.get('id');
      // console.log(this.id);
      // this.getJobCode(id);

      // this._JobCode.getJobsById(id).subscribe (data => this.jobs=data,
      //   error => this.errorMsg=error)
      //   console.log(this.jobs);

      //     this._JobCode.getJobById(this.id).subscribe(data => {
      // console.log(data)});

      this._route.paramMap.subscribe((params:ParamMap)=>{this.id =params.get('id');
    console.log(this.id)  })
    this._JobCode.getJobById(this.id)
    .subscribe(data=>{
      let jobs= data;
      // this.Job=jobs;
  
    })
      
    }
    onSubmit() {

    
      // this.id = id;
      // console.log(this.id)
      // console.log(this.editForm.value);
      this._JobCode.updateJobs(this.id,this.editForm.value)
        .subscribe(
          response => console.log( response),
          error => console.error('Error!', error)
      
        );
    }
            
  }

  
  // editJob(id: any) {
  //   this.id = id;
  //   console.log(this.id)
  //   this._JobCode.getJobsById(this.id).subscribe(data => {
  //     console.log(data)});
  // }

  


