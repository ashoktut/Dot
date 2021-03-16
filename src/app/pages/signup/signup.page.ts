import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  login(){
    this.router.navigateByUrl('home');
  }
  gotoLogin() {

    this.router.navigateByUrl('login');

  }
  async dismiss() {
    return await this.modalCtrl.dismiss();
  }
}
