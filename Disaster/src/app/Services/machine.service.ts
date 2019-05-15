import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IMachines } from '../Models/machine';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  setValue(arg0: { index: any; username: any; email: any; }) {
    throw new Error("Method not implemented.");
  }

  private _url:string="http://localhost:4000/machines";

  constructor(private http:HttpClient) { }

  getMachines(): Observable<IMachines[]>{
    return this.http.get<IMachines[]>(this._url);

  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
