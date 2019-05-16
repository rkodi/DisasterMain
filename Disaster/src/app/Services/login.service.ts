import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import {IUser} from '../Models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {
    
   }

   
   login(username, password) {
    if (username === "preethi" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null)
  }
  
  logOut() {
    sessionStorage.removeItem('username')
  }
}
