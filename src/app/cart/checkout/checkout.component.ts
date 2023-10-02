import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../shared/services/cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [
    '../../Components/css/authenticationStyle.css',
    './checkout.component.css'
  ]
})
export class CheckoutComponent implements OnInit {
  invalid = false;
  loader = false;
  cartId = '';
  constructor (
  private _activatedRoute:ActivatedRoute,
  private _cartService:CartService
  ) {}
checkoutForm: FormGroup = new FormGroup({
  details: new FormControl('',[Validators.required]) ,
  phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(12)]),
  city: new FormControl('',[Validators.required])
})

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next : (res:any) => this.cartId = res.params.id,
    })
  }

checkOut(form: any) {
  if (form.valid) {
    this.loader = true;
    this._cartService.checkOut(this.cartId,form.value).subscribe({
      next: res => {
        location.href = res.session.url
      }
    })
  } else {
    this.invalid = true
  }
}
}
