import { Component, SimpleChanges } from '@angular/core';
import { User } from 'src/app/Models/User';
import {  Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';
import { LoginService } from 'src/app/Services/login.service';
import { isNull, isUndefined } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  // roles = Array<String>();
  public roles=['Admin','Contractor']
  public Admin:boolean;
  public logged:boolean
  Contractor:boolean;
  
  public user //= JSON.parse(localStorage.getItem("user"));

  constructor(private _loginservice:LoginService,private router:Router,private route:ActivatedRoute ) { 
// this.roles.push("Admin");
// this.roles.push("Contractor");

   }
  
   ngOnInit() {
     
     
     //console.log(this.user.role);
     this.user=JSON.parse(localStorage.getItem("user"));
     if(!isNull(this.user)&&!isUndefined(this.user)){
    if(this.user.role == "Admin"){
      this.Admin=true;
      this.logged=true
      console.log("here"+this.Admin)
    }
    else if(this.user.role == "Contractor"){
      this.Contractor=true;
      this.logged = true
    }
    else{
    this.logged = false
    }
  }
    
  }
  logout(){
    console.log("here")
    localStorage.setItem("user", JSON.stringify("") ),
    this.logged=false
    this.router.navigate(['/login'])
    
    
  }
}
