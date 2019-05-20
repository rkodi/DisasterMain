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
  private pushUrl:string=''
  constructor(private http:HttpClient) { }

  getMachines(): Observable<Machines[]>{
    return this.http.get<Machines[]>(this._url);

  }
  getMachinesbyId(id:string){
     console.log(this._url)
    return this.http.get<any>(this._url+id);

  }
  addmachine(newmachine: Machines): Observable<Machines[]>{
    return this.http.post<Machines[]>(this._url, newmachine)
  }
  editMachine(body:Machines,id:string){
     this.pushUrl=this._url+id
     console.log(this.pushUrl)
    return this.http.put<Machines>(this.pushUrl,body)
  }

  // updatemachine(id: string): Observable<Machines>{
  //   return this.http.put<Machines>(this._url ,id);
  // }

  deletemachine(id: string): Observable<Machines>{
    this.putUrl=this._url +id
    console.log(this.putUrl)
    return this.http.delete<Machines>(this.putUrl)
  }
  errorHandler(error:HttpErrorResponse){
    return throwError(error)
  }
}
