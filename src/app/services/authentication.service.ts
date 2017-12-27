import { User } from './../models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {


  constructor(private http: HttpClient) { }

  register(data: User):Observable<any> {
    return this.http.post(environment.STAYFYT_API_URL + 'register', data)
  }

  login(data: User):Observable<any> {
    return this.http.post(environment.STAYFYT_API_URL + 'login', data)
  }

}
