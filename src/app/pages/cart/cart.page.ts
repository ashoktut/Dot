import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  selectedItems = [];
  total = 0;
  // CartService: any;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const items = this.cartService.getCart();
    const selected = [];
    for (const obj of items) {
      if (selected[obj.id]) {
        selected[obj.id].count++;
      } else {
        selected[obj.id] = {...obj, count: 1};
      }
    }
    this.selectedItems = Object.keys(selected).map(key => selected[key]);
    this.total = this.selectedItems.reduce((a, b) => a + (b.count * b.price), 0);
  }

}
