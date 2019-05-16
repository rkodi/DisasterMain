import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Jobs } from './job';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class jobsService {


  _url = 'http://localhost:4000/Jobs';
  constructor(private _http: HttpClient) { }

  createJobs(): Observable<Jobs[]> {
    return this._http.get<Jobs[]>(this._url);
  }

  postJobs(job: Jobs): Observable<Jobs[]> {
    return this._http.post<Jobs[]>(this._url, job);
  }

  updatJobs(job: Jobs): Observable<Jobs[]> {
    return this._http.put<Jobs[]>(this._url, job);
  }

  deleteJobs(job: Jobs): Observable<Jobs[]> {
    return this._http.delete<Jobs[]>(this._url);
  }

  // createJobs(job: Jobs) {
  //   return this._http.post<any>(this._url, job)
  //    .pipe(catchError(this.errorHandler))
  // }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
