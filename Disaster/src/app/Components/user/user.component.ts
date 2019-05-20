import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users = [];

  constructor(private router:Router, private _userService: UserService) { 
    {
      this._userService.getUsers()
      .subscribe( data => this.users = data);
    }
  }

  // onSelect(user){
  //   this.router.navigate(['/user']);
  // }

  delete(id){
    this._userService.delete(id).subscribe(
      Response => console.log("successs!", Response)
    );
    this.router.navigate(['/user']);
    location.reload();
  }

  // add(){
  //   this.router.navigate(['signup']);
  // }


  ngOnInit() {
  }

}
