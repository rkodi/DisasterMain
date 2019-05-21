import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signup } from '../Models/signup';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
 
 private _url:string="http://localhost:4000/signup";

  constructor(private http: HttpClient) { }

  register(signup:signup) {
    return this.http.post<any>(this._url, signup);
  }
}
