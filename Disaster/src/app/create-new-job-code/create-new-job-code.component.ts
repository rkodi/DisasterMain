import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { jobsService } from '../jobs.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-create-new-job-code',
  templateUrl: './create-new-job-code.component.html',
  styleUrls: ['./create-new-job-code.component.css']
})
export class CreateNewJobCodeComponent implements OnInit {

  public JobCode: FormGroup;
  public body: any;
  errorMsg;

  constructor(private fb: FormBuilder, private _JobCode: jobsService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    

    this.JobCode = this.fb.group({
      code: [''], 
      description: [''],
      rate: [''],     
      maxHours: ['']
     
    });

  }

   onSubmit() {
    console.log(this.JobCode.value);
    this._JobCode.postJobs(this.JobCode.value)
      .subscribe(
        response => console.log( response),
        error => console.error('Error!', error)
      );
      setTimeout(() => this._router.navigate(['list']), 10)
      
      
  }


}
