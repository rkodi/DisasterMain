import { Injectable } from '@angular/core';
import { User } from '../Models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _url: string = "http://localhost:4000/users/";

  private putUrl: string;
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url);

  }


  getById(userid: string): Observable<User> {
    return this.http.get<User>(this._url + userid);
  }

  // create(user: User) {
  //   return this.http.post(this._url, user);
  // }

  update(userid: string, user: User) {

    return this.http.put(this._url + userid, user);
  }

  delete(userid: string): Observable<User> {
    this.putUrl = this._url + userid
    console.log(this.putUrl)
    return this.http.delete<User[]>(this.putUrl)
  }
}
