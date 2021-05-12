import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}

@Injectable({
  providedIn: 'root'
})

export class CartService {

  // public cart = [];
  // public cartItemCount = new BehaviorSubject(0);

  constructor() { }
  // tslint:disable-next-line: member-ordering
  private data = [
    {
      category: 'Chicken Dishes',
      expanded: true,
      products: [
        { id: 0, name: 'Chicken feet & Pap', price: '25', imge: '../../assets/images/tile 1.jpg' },
        { id: 1, name: 'Chicken livers & Pap', price: '25', imge: '../../assets/images/tile 2.jpg' },
        { id: 2, name: 'Chicken Burger & Chips', price: '35', imge: '../../assets/images/tile 3.jpg' },
        { id: 3, name: 'Chicken Wrap & Chips', price: '35', imge: '../../assets/images/tile 4.jpg' },
        { id: 4, name: 'Rice + Chicken stew + 2 Salads', price: '35', imge: '../../assets/images/tile 5.jpg' },
        { id: 5, name: 'Samp + Chicken stew + 2 Salads', price: '35', imge: '../../assets/images/tile 6.jpg' },
        { id: 6, name: 'Pap + Chicken stew + 2 Salads', price: '35', imge: '../../assets/images/tile 1.jpg' },
        { id: 7, name: 'Chicken Wings & Chips', price: '35', imge: '../../assets/images/tile 2.jpg' }
      ]
    },
    {
      category: 'Beef Dishes',
      products: [
        { id: 8, name: 'Rice + Beef stew + 2 Salads', price: '40', imge: '../../assets/images/tile 2.jpg' },
        { id: 9, name: 'Samp + Beef stew + 2 Salads', price: '40', imge: '../../assets/images/tile 3.jpg' },
        { id: 10, name: 'Pap + Beef stew + 2 Salads', price: '40', imge: '../../assets/images/tile 4.jpg' },
        { id: 11, name: 'Beef Wrap & Chips', price: '35', imge: '../../assets/images/tile 5.jpg' },
        { id: 12, name: 'Ribs & Chips', price: '35', imge: '../../assets/images/tile 6.jpg' },
        { id: 13, name: 'Vienna Twist Roll', price: '15', imge: '../../assets/images/tile 1.jpg' },
      ]
    },
    {
      category: 'Vegetarian Dishes',
      products: [
        { id: 14, name: 'Rice + Stew + 2 Salads', price: '35', imge: '../../assets/images/tile 2.jpg' }
      ]
    },
    {
      category: 'Bakery & Desserts',
      products: [
        { id: 15, name: '5L Scones (excl container)', price: '100', imge: '../../assets/images/tile 3.jpg' },
        { id: 16, name: '10L Scones (excl container)', price: '180', imge: '../../assets/images/tile 4.jpg' },
        { id: 17, name: '20L Scones (excl container)', price: '380', imge: '../../assets/images/tile 5.jpg' },
        { id: 18, name: '5L Jam Tarts (excl container)', price: '120', imge: '../../assets/images/tile 6.jpg' },
        { id: 19, name: '10L Buns (excl container)', price: '150', imge: '../../assets/images/tile 1.jpg' },
      ]
    }
  ];

  // tslint:disable-next-line: member-ordering
  private cart = [];
  public cartItemCount = new BehaviorSubject(0);
  removeProduct(product) {
    throw new Error('Method not implemented.');
  }
  clearCart() {
    throw new Error('Method not implemented.');
  }
  decreaseProduct(product) {
    throw new Error('Method not implemented.');
  }

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

   getCartItemCount() {
     return this.cartItemCount;
   }

  addProduct(product) {
    this.cart.push(product);
    let added = false;
    for (const p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
       }
     }
    if (!added) {
       this.cart.push(this.data);
     }
    this.cartItemCount.next(this.cartItemCount.value + 1);
//     this.getCartItemCount();
// }
}}
