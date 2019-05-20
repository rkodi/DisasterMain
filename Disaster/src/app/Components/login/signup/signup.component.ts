import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { SignupService } from 'src/app/Services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  role1 = Array<String>();
  errorMsg:string;

  constructor(private router: Router, private _registerservice: SignupService, private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.role1.push("Admin")
    this.role1.push("Contractor")

    this.registerForm = this.formbuilder.group({
      firstName: ['', [Validators.required]],
      lastname: [''],
      email: [''],
      password: [''],
      role: ['']
    })
  }
  get firstName() {
    return this.registerForm.get('firstName');
  }

  get lastname() {
    return this.registerForm.get('lastname');
  }
  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get role() {
    return this.registerForm.get('role');
  }


  onSubmit() {
    console.log(this.registerForm.value);
    this._registerservice.register(this.registerForm.value)
      .subscribe(response => {
        this.router.navigate(['/login'])
              error => this.errorMsg = error.statusText;

      })
    this.registerForm.reset()

  }

}
