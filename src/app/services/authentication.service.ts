import { User } from './../models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: HttpClient) { 
    //var currentUser = JSON.parse(localStorage.getItem('token'));
    //this.token = currentUser && currentUser.token;
  }

  register(data: User):Observable<any> {
    /*
    add this for autherized requests
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });
    */
    console.log('hey');
    return this.http.post(environment.STAYFYT_API_URL + 'register', data);
  }

  login(data: User):Observable<any> {
    return this.http.post(environment.STAYFYT_API_URL + 'login', data);
  }

}
