import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Trips } from '../Trips';
import { CartService } from '../cart.service';
import { ITrips } from '../ITrips';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.css']
})
export class tripDetailsComponent implements OnInit {
  Trip1:ITrips ={} as ITrips;
  id:number = 0

  constructor(private route: ActivatedRoute, private cartService:CartService) { }
  addToCart(){
    window.alert("Great choice!");
    this.cartService.addToCart(this.Trip1)
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['tripId'];
      this.Trip1=Trips[this.id];
  });
}

}
