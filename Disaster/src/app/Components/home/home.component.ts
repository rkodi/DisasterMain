import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import {  Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { LoginService } from 'src/app/Services/login.service';
import { isNull } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  // roles = Array<String>();
  public roles=['Admin','Contractor']
  public Admin:boolean;
  Contractor:boolean=false;
  //localStorage.clear();
  public user = JSON.parse(localStorage.getItem("user"));

  constructor(private _loginservice:LoginService,private router:Router,private route:ActivatedRoute ) { 
// this.roles.push("Admin");
// this.roles.push("Contractor");

   }
   
   ngOnInit() {
     console.log(this.user.role);
    if(this.user.role == "Admin"){
      this.Admin=true;
    }
  
    
  }
  



}
