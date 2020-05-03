import { ShoppingCartItem } from './../../models/shopping-cart-item-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-item',
  templateUrl: './order-item.component.html'
})
export class OrderItemComponent implements OnInit {

  @Input() items: ShoppingCartItem[];

  @Output() increaseQtde = new EventEmitter<ShoppingCartItem>();
  @Output() decreaseQtde = new EventEmitter<ShoppingCartItem>();
  @Output() remove = new EventEmitter<ShoppingCartItem>();

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQtde(item: ShoppingCartItem) {
    this.increaseQtde.emit(item);
  }

  emitDecreaseQtde(item: ShoppingCartItem) {
    this.decreaseQtde.emit(item);
  }

  emitRemove(item: ShoppingCartItem) {
    this.remove.emit(item);
  }
}
