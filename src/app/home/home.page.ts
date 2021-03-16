import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  cart = [];
  items = [];

  sliderConfig = {
    slidesPerView: 1.6,
    spaceBetween: 10,
    centeredSlides: true
  };
  cartItemCount: any;

  constructor(private router: Router, private cartService: CartService) { }

  ngOnInit() {
    this.items = this.cartService.getProducts();
    this.cart = this.cartService.getCart();
  }

  addToCart(data) {
    this.cartService.addProduct(data);
  }

  openCart() {
    this.router.navigate(['cart']);
  }
}
  // decreaseProduct(data){
  //   for (const [index, d] of this.cart.entries()) {
  //     if (d.id === d.id) {
  //       d.amount -= 1;
  //       if (d.amount === 0) {
  //         this.cart.splice(index, 1);
  //       }
  //     }
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value - 1);
  // }

  // removeProduct(data) {
  //   for (const [index, d] of this.cart.entries()) {
  //     if (d.id === d.id) {
  //       this.cartItemCount.next(this.cartItemCount.value - d.amount);
  //       this.cart.splice(index, 1);
  //     }
  //   }
  // }

  // clearCart() {
  //   this.cart.length = 0;
  // }

  // extraProd(data: any) {
  //  throw new Error('Method not implemented.');
  //   }


