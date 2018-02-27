import { Injectable } from '@angular/core';
import {User} from '../models/user.model';
import {Observable} from 'rxjs/Rx';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) { }


  payment(data: User, token: any): Observable<any> {
    return this.http.post(environment.STAYFYT_API_URL + 'payment', data, token);
  }
}
