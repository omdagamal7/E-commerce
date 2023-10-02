import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/interfaces/cart';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css'],
  providers: [MessageService]
})
export class CartProductsComponent implements OnInit {
  cart!: Cart;
  emptyCart: boolean = false;
  constructor(
    private _cartService:CartService,
    private _messageService: MessageService
    ) {}
  show() {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: 'Success' });
}
  ngOnInit(): void {
    this._cartService.getCart().subscribe({
      next: res => {
        this.cart = res
        console.log('res: ', res);
      },
      error: err => {
        this.emptyCart = true
        console.log('err: ', err);
      },
      complete: () => this.emptyCart = false
    })
  }
  updateProductCount(count: number, id: string) {
    this._cartService.updateProductCount(count,id).subscribe({
      next: res => {
        this.cart = res;
        this.show()
      }
    })
  }
}
