import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  //validation
  form: FormGroup;
  
  //routing 
  router: Router;

  // two way data-binding between view and controller
  formModel = {
    username: "",
    password: "",
  }


  constructor(private _router: Router, ) 
  {
    this.router = _router;
    
  }

  loginUser() {
    console.log(this.formModel.username);    
    this.router.navigateByUrl('/trainer');  
  }
  
  registerUser() {
    this.router.navigateByUrl('/register');
    
  }
  
  getErrorMessage() {
    return this.form.hasError('required') ? 'You must enter a username' :
        this.form.hasError('email') ? 'Not a valid username' :
            '';
  }
  
  get username() { return this.form.get('username'); }
  get password() { return this.form.get('password'); }
  
}
