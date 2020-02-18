import { Observable } from 'rxjs/Observable';
import { RestaurantService } from './../../services/restaurant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  reviews: Observable<any>;

  constructor(
    private service: RestaurantService,
    private router: ActivatedRoute) { }


  ngOnInit() {
    this.reviews = this.service.getReviewsByRestaurant(this.router.parent.snapshot.params['id']);
  }

}
