import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { jobsService } from '../jobs.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-new-job-code',
  templateUrl: './create-new-job-code.component.html',
  styleUrls: ['./create-new-job-code.component.css']
})
export class CreateNewJobCodeComponent implements OnInit {

  JobCode: FormGroup;

  constructor(private fb: FormBuilder, private _JobCode: jobsService, private router: Router) { }

  ngOnInit() {

    this.JobCode = this.fb.group({
      code: [''], 
      description: [''],
      rate: [''],     
      maxHours: ['']
     
    });
    
  }
  
  get newJobCode() {
    return this.JobCode.get('code');
  }

  get Description() {
    return this.JobCode.get('rate');
  }
  get maxHours() {
    return this.JobCode.get('maxHours');
  }

  
  onSubmit() {
    console.log(this.JobCode.value);
    this._JobCode.postJobs(this.JobCode.value)
      .subscribe(
        response => console.log( response),
        error => console.error('Error!', error)
      );
  }


}
