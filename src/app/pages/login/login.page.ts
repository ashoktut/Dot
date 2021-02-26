import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoDash(){

    this.router.navigateByUrl('home');

  }
  gotoSignup() {

    this.router.navigateByUrl('signup');

  }

}
