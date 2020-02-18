import { Restaurant } from './../../models/restaurant.model';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

restaurant: Restaurant;
  
  constructor(
    private router: ActivatedRoute,
    private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getById(this.router.snapshot.params['id'])
      .subscribe(restaurant => this.restaurant = restaurant);
  }

}
