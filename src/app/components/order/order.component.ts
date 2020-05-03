import { ShoppingCartItem } from './../../models/shopping-cart-item-model';
import { OrderService } from './../../services/order.service';
import { RadioOption } from './../../models/radio-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  paymentOptions: RadioOption[] = [
    {label:'Dinheiro', value:'DINHEIRO'},
    {label:'Debito', value:'DEBITO'},
    {label:'Credito', value:'CREDITO'}
  ];
  

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    
  }

  getItems(): ShoppingCartItem[] {
    return this.orderService.getItems();
  }

  increaseItemQtde(item: ShoppingCartItem) {
    return this.orderService.increaseItemQtde(item);
  }

  decreaseItemQtde(item: ShoppingCartItem) {
    return this.orderService.decreaseItemQtde(item);
  }

  removeItem(item: ShoppingCartItem) {
    return this.orderService.removeItem(item);
  }

}
