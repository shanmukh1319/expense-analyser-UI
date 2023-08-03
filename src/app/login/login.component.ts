import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  show_login:boolean=true;
  login_object:Record<string,any>={
    "username":"",
    "password":""
  }
  signup_object:Record<string,any>={
    "name":"",
    "username":"",
    "email":"",
    "phone":"",
    "password":""
  }

  constructor(private router: Router) {
  }
  
  showSignUp(){
    this.show_login=false
    this.signup_object={
      "name":"",
      "username":"",
      "email":"",
      "phone":"",
      "password":""
    }
  }
  showLogin(){
    this.show_login=true
    this.login_object={
      "username":"",
      "password":""
    }
  }

  signUpUser(){
    console.log(this.signup_object,"sign up object");
  }

  loginUser(){
    console.log(this.login_object,"login object")
    if(this.login_object['username']=='shanu' && this.login_object['password']=='123'){
      this.router.navigate(["/home"]);
    }
  }
}
