import { MenuItem } from './menu-item.model';

export class ShoppingCartItem {

    constructor(
        public menuItem: MenuItem,
        public quantity: number = 1) {

    }

    totalValue(): number {
        return this.menuItem.price * this.quantity;
    }


}