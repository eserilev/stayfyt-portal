import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    console.log('AuthGuard activated called');
    return true; 
  }

}
