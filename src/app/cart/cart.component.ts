import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { ITrips } from '../ITrips';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  checkoutForm = this.fb.group({
    name: '',
    address: '',
    email: ''
  });

  // info = new FormGroup({
  //   name: new FormControl('',Validators.required),
  //   address: new FormControl('',Validators.required),
  //   email:new FormControl('',Validators.required),
  // });
   onSubmit(){
    console.warn('Your Booking has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.priceTotal=this.cartService.clearTotal();
    this.discount=this.cartService.clearTotal();
    this.priceFinal=this.cartService.clearTotal();
    this.checkoutForm.reset()
  //    if(this.info.valid){
  //   let a:any = this.info.value;
  //   console.log(a)
  //  }
  }

  items:ITrips[]=[];
  priceTotal:number =0;
  discount:number=0;
  priceFinal:number=0


  constructor(private cartService:CartService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.items=this.cartService.getItems();
    this.priceTotal=this.cartService.getTotal();
    if(this.priceTotal >= 500){
    this.discount=this.cartService.getTotal()*0.2;
    }else if (this.priceTotal >= 200){
      this.discount =this.cartService.getTotal()*0,1;
    }else {
      this.discount = this.cartService.getTotal();
  }
    this.priceFinal=this.priceTotal-this.discount;
  }
}




