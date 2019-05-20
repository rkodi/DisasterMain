import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Models/User';
import {  Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  
  // roles = Array<String>();
  public roles=['Admin','Contractor']
  Admin:boolean=true;
  Contractor:boolean=false;

  constructor(private _loginservice:LoginService,private router:Router,private route:ActivatedRoute ) { 
// this.roles.push("Admin");
// this.roles.push("Contractor");

   }
  
   ngOnInit() {
    // this.Admin=true;
    // this._loginservice.login(this.Admin)
       //  this.Admin=true;
    // this._loginservice.login(this.roles)
    // .subscribe(Response=>{
    //   if(Response.roles=='Admin'){
    //     this.router.navigate(['/home'])
    //   }else{
    //     this.router.navigate(['/admin']);
    
    //   }
    // })
    
  }
  



}
