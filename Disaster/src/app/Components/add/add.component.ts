import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MachineService } from 'src/app/Services/machine.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public errorMsg
  addForm: FormGroup;
  submitted = false;
  constructor(private router: Router, private route: ActivatedRoute, private _machineservice: MachineService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formbuilder.group({
      code: [],
      description: [],
      rent: [],
      maxHours: []
    });
    
  }

  onSubmit() {
    // this.submitted = true;
    console.log(this.addForm);
    this._machineservice.addmachine(this.addForm.value)
      .subscribe(data => {
        console.log(data),
          error => this.errorMsg = error.statusText;
        // this.router.navigate(['/machines']);
      });
  }
}
