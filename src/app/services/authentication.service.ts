import { User } from './../models/user.model';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import * as url from 'url';

@Injectable()
export class AuthenticationService {

  public token: string;

  constructor(private http: HttpClient) {
    // var currentUser = JSON.parse(localStorage.getItem('token'));
    // this.token = currentUser && currentUser.token;
  }

  register(data: User): Observable<any> {
    /*
    add this for autherized requests
    let headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    let options = new RequestOptions({ headers: headers });
    */
    console.log('hey');
    return this.http.post(environment.STAYFYT_API_URL + 'register', data);
  }

  login(data: User): Observable<any> {
    return this.http.post(environment.STAYFYT_API_URL + 'login', data);
  }
}
  export class Search {

  public token: string;

  constructor(private http: HttpClient) {
    // var currentUser = JSON.parse(localStorage.getItem('token'));
    // this.token = currentUser && currentUser.token;
  }
  // cw
  search(data: User): Observable<any> {
     return this.http.get(environment.STAYFYT_API_URL + 'client-search', {
       params: {
         email: data.email,
         dob: data.dob.toString()
       }
     });
    // return this.http.get('url', JSON.stringify(data));
  }

}
