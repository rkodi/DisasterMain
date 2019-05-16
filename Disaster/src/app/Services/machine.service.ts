import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Machines } from '../Models/machine';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  
  private putUrl:string =''
  private _url:string="http://localhost:4000/machines/";

  constructor(private http:HttpClient) { }

  getMachines(): Observable<Machines[]>{
    return this.http.get<Machines[]>(this._url);

  }
  getMachinesbyId(id:string): Observable<Machines[]>{
    return this.http.get<Machines[]>(this._url + id);

  }
  addmachine(newmachine: Machines): Observable<Machines>{
    return this.http.post<Machines>(this._url, newmachine)
  }
  editMachine(body:any,id :string){
     this.putUrl=this._url +id
     console.log(this.putUrl)
    return this.http.put(this.putUrl,body)
  }

  updatemachine(id: string): Observable<Machines>{
    return this.http.put<Machines>(this._url ,id);
  }

  deletemachine(id: string): Observable<Machines>{
    return this.http.delete<Machines>(this._url + id)
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
