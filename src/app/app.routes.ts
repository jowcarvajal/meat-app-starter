import { OrderComponent } from './components/order/order.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { HomeComponent } from './layout/home/home.component';
import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';

export const ROUTES: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'restaurants', component: RestaurantsComponent},
  {path: 'order', component: OrderComponent},
  {path: 'restaurants/:id', component: RestaurantDetailComponent,
    children:[
      {path: '', redirectTo:'menu', pathMatch: 'full'},
      {path: 'menu', component: MenuComponent},
      {path: 'reviews', component: ReviewsComponent}
    ]
  }

];
