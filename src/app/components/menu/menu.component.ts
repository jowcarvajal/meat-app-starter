import { MenuItem } from './../../models/menu-item.model';
import { Observable } from 'rxjs/Observable';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>;

  constructor(
    private service: RestaurantService,
    private router: ActivatedRoute) { }

  ngOnInit() {

    this.menu = this.service.getMenuByRestaurant(this.router.parent.snapshot.params['id']);

  }

  addMenuItem(item: MenuItem) {
    console.log(item);
  }

}
