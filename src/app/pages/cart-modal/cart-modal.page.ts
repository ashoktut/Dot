import { Component, OnInit } from '@angular/core';
import { Product, CartService } from '../../services/cart.service';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { empty } from 'rxjs';
import { Validators, FormBuilder, FormGroup} from '@angular/forms';
import { NavController} from '@ionic/angular';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Platform} from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})

export class CartModalPage implements OnInit {

  cart: Product[] = [];

  // tslint:disable-next-line: max-line-length
  constructor(private https: HttpHeaders, private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController, private router: Router) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }


  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process
  // tslint:disable-next-line: member-ordering
  const cartCount =  this.cart.length;
  // tslint:disable-next-line: member-ordering
  // tslint:disable-next-line: align
  console.log('cart item count: ' + cartCount);

  this.cartService.clearCart();


  const alert = await this.alertCtrl.create({
    mode: 'ios',
    header: 'Thanks for your Order!',
    message: 'We will deliver your chakula as soon as possible',
    buttons: ['SAWA']
  });
  alert.present().then(() => {
    this.modalCtrl.dismiss();
  });
}}
