import { GeolocationService } from './../../services/geolocation.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
//  username: FormControl;

  router: Router;

  formModel = {
    username: "",
    password: "",
    password_check: "",
  }

  constructor(private _router: Router, private geoService: GeolocationService )
  {
    this.router = _router;
  }

  /*   constructor(
   public username: string,
   public password: string,
   public password_check: string
   ) { }
   */



  ngOnInit() {
    var geolocationInput = document.getElementById('test');
    console.log(geolocationInput);
    this.geoService.generateAddressAutofill(geolocationInput);
  }

  createUser() {
    //   if (this.password !== this.password_check) {
    //   return this.form.hasError('password') ? 'Passwords do not match' :
    //    '';
    // }
    this.router.navigateByUrl('/trainer');
  }

  getErrorMessage() {
    return this.form.hasError('required') ? 'You must enter a username' :
      this.form.hasError('email') ? 'Not a valid username' :
        '';
  }
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  get password_check() { return this.form.get('password_check'); }
}

