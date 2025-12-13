import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  imports: [],
  templateUrl: './loginpage.html',
  styleUrl: './loginpage.scss',
})
export class Loginpage {
  router=inject(Router)
  loginForm: LoginForm = {
    userName: '',
    password: '',
    keepMe: false
  };
  test(){
    
  }
}

interface LoginForm {
  userName: string;
  password: string;
  keepMe: boolean;
}
