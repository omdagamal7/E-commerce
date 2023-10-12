import { Component, OnInit } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { UserData } from 'src/core/InterFaces/userData';
import { OrdersService } from '../shared/services/orders.service';
import { Orders } from '../shared/interfaces/orders';
import { CommonModule } from '@angular/common';
import { AccordionModule } from 'primeng/accordion';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    AccordionModule
  ]
})
export class OrdersComponent implements OnInit {
  orders!: Orders[]
  data: any;
  constructor (
    private _ordersService:OrdersService
  ) {}
  ngOnInit(): void {
    let token: UserData = jwtDecode(`${localStorage.getItem('token')}`)
    console.log('token: ', token.id);
    this._ordersService.getUserOrders(token.id).subscribe({
      next: res => {
        this.orders = res
      },
      error: err => console.log(err)
    })
  }
}
