import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './about-page/about-page.component';
import { CartComponent } from './cart/cart.component';
import { tripDetailsComponent } from './trip-details/trip-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

const routes: Routes = [
  {path:"", component:HomePageComponent},
  {path:"about", component:AboutPageComponent},
  {path:"menu",component:MenuPageComponent},
  {path:"menu/trips/:tripId", component:tripDetailsComponent},
  {path:"cart",component:CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
