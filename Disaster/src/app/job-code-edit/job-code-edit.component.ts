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

      })

 
      
    }
 
  onSubmit() {


    this._JobCode.updateJobs(this.editForm.value, this.id)
      .subscribe(
        response => console.log(response),
        error => console.error('Error!', error)
      );
      this._router.navigate(['list'])
  }

}


 




