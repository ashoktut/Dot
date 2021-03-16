import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  constructor(
    public modalCtrl: ModalController,
    private router: Router,
    public alertController: AlertController
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

  async register() {
    const alert = await this.alertController.create({
      header: 'Congratulations!',
      message: 'Your account has been created successfully',
      buttons: ['OK']
    });

    await alert.present();
    this.router.navigateByUrl('login');

  }

}
