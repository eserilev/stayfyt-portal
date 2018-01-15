import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate() {
    if (localStorage.getItem('token')) {
      // logged in so return true
      console.log('user loggedi in');
      return true;
    }
    // not logged in so redirect to login page
    this.router.navigate(['/login']);
    return false;
    }
}
