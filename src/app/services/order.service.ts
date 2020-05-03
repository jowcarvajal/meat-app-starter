import { ShoppingCartItem } from 'app/models/shopping-cart-item-model';
import { ShoppingCartService } from './shopping-cart.service';
import { Injectable } from '@angular/core';

@Injectable()
export class OrderService {

  constructor(private shoppingCartService: ShoppingCartService) { }

  getItems(): ShoppingCartItem[] {
    return this.shoppingCartService.items;
  }

  increaseItemQtde(item : ShoppingCartItem) {
    this.shoppingCartService.increaseItemQtde(item);
  }

  decreaseItemQtde(item: ShoppingCartItem) {
    this.shoppingCartService.decreaseItemQtde(item);
  }

  removeItem(item : ShoppingCartItem) {
    this.shoppingCartService.removeItem(item);
  }

  total(): number {
    return this.shoppingCartService.total();
  }

}
