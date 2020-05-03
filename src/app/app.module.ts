import { OrderService } from './services/order.service';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { RadioComponent } from './shared/radio/radio.component';
import { InputComponent } from './shared/input/input.component';
import { OrderComponent } from './components/order/order.component';
import { ShoppingCartService } from './services/shopping-cart.service';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MenuComponent } from './components/menu/menu.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { RestaurantService } from './services/restaurant.service';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { ROUTES} from './app.routes' 

import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';







@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDetailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent,
    OrderComponent,
    InputComponent,
    RadioComponent,
    OrderItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [RestaurantService, ShoppingCartService, OrderService, {provide: LOCALE_ID, useValue: 'pt-BR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
