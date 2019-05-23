import { Component, OnInit, Input } from '@angular/core';
import { jobsService } from '../jobs.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Jobs } from '../job';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { job } from '../Models/jobs.model';
import { timeout } from 'q';

@Component({
  selector: 'app-job-code-edit',
  templateUrl: './job-code-edit.component.html',
  styleUrls: ['./job-code-edit.component.css']
})
export class JobCodeEditComponent implements OnInit {


  public Job= new Jobs;
  public body: any;

  id;
  private editForm1: boolean = false;
  public editForm: FormGroup;

  errorMsg;

  constructor(private _JobCode: jobsService, private fb: FormBuilder, private _router: Router, private _route: ActivatedRoute) { }


  ngOnInit() {

    this.editForm = this.fb.group({
      code: [],
      description: [],
      rate: [],
      maxHours: []
    });
    this._route.paramMap.subscribe((params: ParamMap) => {
    this.id = params.get('id');
      console.log(this.id)
    })
    this._JobCode.getJobById(this.id)
      .subscribe(data => {
        let jobs = data;
        this.Job=jobs;
              
      this.editForm = this.fb.group({
        code: this.Job.code,
        description: this.Job.description,
        rate: this.Job.rate,
        maxHours: this.Job.maxHours
      });

      })
 
      
    }
 
  onSubmit() {
    if(this.editForm.value.code == null){
      this.editForm.value.code = this.Job.code
    }
    if(this.editForm.value.description == null){
      this.editForm.value.description = this.Job.description
    }
    if(this.editForm.value.rate == null){
      this.editForm.value.rate = this.Job.rate
    }
    if(this.editForm.value.maxHours == null){
      this.editForm.value.maxHours = this.Job.maxHours
    }
    this._JobCode.updateJobs(this.editForm.value, this.id)
      .subscribe(
        response => console.log(response),
        error => console.error('Error!', error)
      );
      setTimeout(() => this._router.navigate(['list']), 10)
      
  }

}


 




