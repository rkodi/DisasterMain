import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Jobs } from './job';
import { catchError } from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class jobsService {

  private _putUrl: string;
  _url = 'http://localhost:4000/Jobs';
  constructor(private _http: HttpClient) { }

  getJobs(): Observable<Jobs[]> {
    return this._http.get<Jobs[]>(this._url);
  }

  getJobsById(id: string): Observable<Jobs[]> {
    return this._http.get<Jobs[]>(this._url + id);
  }

  postJobs(job: Jobs): Observable<Jobs[]> {
    return this._http.post<Jobs[]>(this._url, job);
  }

  updatJobs(body: any, id: string): Observable<Jobs[]> {
    this._putUrl = this._url + '/' + id
    return this._http.put<Jobs[]>(this._putUrl, body);
  }

  deleteJobs(id: string): Observable<Jobs[]> {
    this._putUrl = this._url + '/' + id
    return this._http.delete<Jobs[]>(this._putUrl);
  }

  errorHandler(error: HttpErrorResponse) {
    return throwError(error)
  }
}
