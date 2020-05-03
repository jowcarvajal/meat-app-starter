import { MenuItem } from './../models/menu-item.model';
import { Injectable } from '@angular/core';
import { ShoppingCartItem } from 'app/models/shopping-cart-item-model';

@Injectable()
export class ShoppingCartService {

  items: ShoppingCartItem[] = [];


  constructor() { }

  clear() {
    this.items = [];
  }

  total(): number {
    return this.items
      .map(item => item.totalValue())
      .reduce((prev, value) => prev + value, 0);
  }

  addItem(menuItem: MenuItem) {
    let existMenuItem = this.items.find((shoppingCartItem) => shoppingCartItem.menuItem.id === menuItem.id);
    if (existMenuItem) {
      this.increaseItemQtde(existMenuItem);
      //existMenuItem.quantity = existMenuItem.quantity + 1;
    } else {
      this.items.push(new ShoppingCartItem(menuItem));
    }
  }

  removeItem(item: ShoppingCartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  increaseItemQtde(item: ShoppingCartItem) {
    item.quantity = item.quantity + 1;
  }

  decreaseItemQtde(item: ShoppingCartItem) {
    item.quantity = item.quantity - 1;
    if(item.quantity === 0) {
      this.removeItem(item);
    }
  }
}
