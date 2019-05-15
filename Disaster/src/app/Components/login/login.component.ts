import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isSubmitted  =  false;


  constructor(private _loginservice:LoginService,private _router: Router,private formbuilder: FormBuilder  ) { }

  ngOnInit() {
    this.loginForm  =  this.formbuilder.group({
      Email: ['', Validators.required],
      password: ['', Validators.required]
  });
  }
  get formControls() { return this.loginForm.controls; }

  login(){
    console.log(this.loginForm.value);
    this.isSubmitted=true;
    if(this.loginForm.invalid){
      return;
    }
  }

  }
