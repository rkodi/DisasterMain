import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Timecard} from './Timecard';
import{throwError} from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TimecardService {
  private _url: string = "http://localhost:4000/timeCards";
  constructor( private http:HttpClient) { }
  
  getTimecard(): Observable<Timecard[]>{
    return this.http.get<Timecard[]>(this._url)
  }
  createTimecard(timecard: Timecard): Observable<Timecard>{
    console.log("Timecard")
    console.log(timecard)
    return this.http.post<Timecard>(this._url, timecard)
  }
  errorhandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
