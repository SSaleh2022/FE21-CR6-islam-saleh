import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Trips } from '../Trips';
import { ITrips } from '../ITrips';


@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {
  Trips:ITrips[]=Trips;

  constructor(private cartService:CartService) { }

  addToCart(index:number){
    window.alert("Booked!");
    this.cartService.addToCart(this.Trips[index])
  }

  ngOnInit(): void { }

}
