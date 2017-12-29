import { AuthenticationService } from './../../services/authentication.service';
import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { User } from '../../models/user.model';
import {MatSnackBar} from '@angular/material';


@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //validation
  @ViewChild('f') form: any;
  
  //routing 
  router: Router;

  action: string;

  email: string;
  password: string;


  constructor(
    public snackBar: MatSnackBar,
    private _router: Router, 
    private authService: AuthenticationService ) 
  {
    this.action= "hide"
    this.router = _router;
    
  }

  loginUser() {
    var user = new User();
    user.email = this.email;
    user.password = this.password;
    this.authService.login(user).subscribe((res) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigateByUrl('/trainer');
     
    }, (err) => {
      this.snackBar.open("Login Failed", this.action, { duration: 2000});
      console.log(err);
    })
  }
  
  registerUser() {
    this.router.navigateByUrl('/register');
    
  }
  
  getErrorMessage() {
    return this.form.hasError('required') ? 'You must enter a username' :
        this.form.hasError('email') ? 'Not a valid username' :
            '';
  }

  
}
