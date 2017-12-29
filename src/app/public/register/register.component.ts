import { User } from './../../models/user.model';
import { AuthenticationService } from './../../services/authentication.service';
import { GeolocationService } from './../../services/geolocation.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {FormGroup, FormBuilder, Validators, FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


//  username: FormControl;

  router: Router;
  @ViewChild('f') form: any;
  

  email: string;
  password: string;
  dob: string;
  zip: string;
  isTrainer: boolean;
  confirmPassword: string;
  firstName: string;
  lastName: string;



  constructor(private _router: Router, 
    private geoService: GeolocationService, 
    private authService: AuthenticationService) {
      this.router = _router;
  }

  /*   constructor(
   public username: string,
   public password: string,
   public password_check: string
   ) { }
   */



  ngOnInit() {
    var geolocationInput = document.getElementById('address');
    console.log(geolocationInput);
    this.geoService.generateAddressAutofill(geolocationInput);
  }



  createUser() {
    if(this.form.valid) {
      var user = new User()
      user.dob = new Date(this.dob);
      user.email = this.email;
      user.isTrainer = this.isTrainer;
      user.password = this.password;
      user.name = this.firstName + ' ' + this.lastName;
  
      console.log(user);
      this.authService.register(user).subscribe((res) => {
        console.log(res);
        localStorage.setItem('token', res);
        this.router.navigateByUrl('/trainer');
      }, (err) => {
        console.log(err);
      });
    }
   
  }


}

