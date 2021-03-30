import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-rest1',
  templateUrl: './rest1.page.html',
  styleUrls: ['./rest1.page.scss'],
})
export class Rest1Page implements OnInit {
  cart = [];
  items = [];
  flipped = false;

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

  clickedImage(){
    this.router.navigate(['cart']);
  }
}
