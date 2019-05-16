import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Machines } from '../Models/machine';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  

  private _url:string="http://localhost:4000/";

  constructor(private http:HttpClient) { }

  getMachines(): Observable<Machines[]>{
    return this.http.get<Machines[]>(this._url+'machines');

  }
  getMachinesbyId(id:string): Observable<Machines[]>{
    return this.http.get<Machines[]>(this._url + 'machines' +'/'+ id);

  }
  addmachine(newmachine: Machines): Observable<Machines>{
    return this.http.post<Machines>(this._url, newmachine +'machines')
  }

  updatemachine(newmachine: Machines): Observable<Machines>{
    return this.http.put<Machines>(this._url +'machines' + '/'+'machine._id', newmachine);
  }

  deletemachine(id: string): Observable<Machines>{
    return this.http.delete<Machines>(this._url + 'machines' + '/'+ id)
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
