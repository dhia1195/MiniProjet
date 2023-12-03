import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  email: string = '';
  password: string = '';
  rememberMe: boolean = false;

  constructor() {}

  ngOnInit() {
    // Initialization logic goes here
  }

  ngOnDestroy() {
    // Cleanup logic goes here
  }

  onSignIn() {
    // Handle sign-in logic here, you can use this.email, this.password, this.rememberMe
    console.log('Sign-in clicked!');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Remember Me:', this.rememberMe);
  }

  onForgotPassword() {
    // Handle forgot password logic here
    console.log('Forgot password clicked!');
  }

  onCreateAccount() {
    // Handle create account logic here
    console.log('Create new account clicked!');
  }
}
