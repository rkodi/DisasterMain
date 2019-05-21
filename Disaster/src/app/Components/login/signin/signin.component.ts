import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { signin } from 'src/app/Models/signin';
import { User } from 'src/app/Models/User';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginModel = new signin('', '');
  submitted = false;
  user = new User('', '', '', '', '');
  id:string;
  errorMsg: any;


  constructor(private _loginService: LoginService, private router: Router,private formbuilder:FormBuilder,private route:ActivatedRoute) { }

  ngOnInit() {
  }


  onSubmit(userForm):void{
    console.log(this.loginModel);
    this.submitted = true;
    this._loginService.login(this.loginModel)
    .subscribe(Response=>{
      localStorage.setItem("user", JSON.stringify(Response.user) ),
    this.router.navigate(['/home'])
    error => this.errorMsg = error.statusText

      });

  }

  
}

