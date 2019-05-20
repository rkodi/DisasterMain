import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signin } from '../Models/signin';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private _url:string="http://localhost:4000/signin";
  
  constructor(private http: HttpClient){} 

  login(signin:signin) {
    return this.http.post<any>(this._url, signin);
  }
 

 
  // logout(){
  //   return this.http.get<any>(this._url);

  // }
   }

   
   