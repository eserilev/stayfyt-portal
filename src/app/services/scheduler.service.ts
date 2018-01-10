
import { User } from './../models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';


@Injectable()
export class SchedulerService {

  private baseUrl = environment.STAYFYT_API_URL + "session/"
  
  constructor(private http: HttpClient) { }

  getSessions(userEmail: string): Observable<any> {
    return this.http.get(this.baseUrl + "mySessions/new92" );
  }

  createSession() {

  }

  cancelSession() {

  }

}
