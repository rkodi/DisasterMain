import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { Router, ActivatedRoute } from '@angular/router';
import { signin } from 'src/app/Models/signin';
import { User } from 'src/app/Models/User';
import { FormBuilder } from '@angular/forms';
import { isNull } from '@angular/compiler/src/output/output_ast';

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
    var token:string
    this._loginService.login(this.loginModel)
    .subscribe(Response=>{token=Response.token,
      localStorage.setItem("user", JSON.stringify(Response.user) ),
      
    
    error => this.errorMsg = error.statusText

      });
      // var u = localStorage.getItem("user") as User
      // console.log(u.password)
      // if(!isNull( this.user=JSON.parse(localStorage.getItem("user")))){
        console.log(token)
         setTimeout(() => this.router.navigate(['/home']), 20)
      // }
      // else{
      // location.reload()
      // }

  }

  
}

