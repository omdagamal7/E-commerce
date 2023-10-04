import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/services/cart.service';
import { Cart } from '../shared/interfaces/cart';
import { MessageService } from 'primeng/api';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-cart-products',
  templateUrl: './cart-products.component.html',
  styleUrls: ['./cart-products.component.css'],
  providers: [MessageService]
})
export class CartProductsComponent implements OnInit {
  cart!: Cart;
  emptyCart: boolean = false;
  itemsNumber : BehaviorSubject<number> = new BehaviorSubject(2)
  constructor(
    private _cartService:CartService,
    private _messageService: MessageService
    ) {}
  show(message: string) {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: message });
}
  ngOnInit(): void {
    this._cartService.getCart().subscribe({
      next: res => {
        this.cart = res
        this.itemsNumber.next(res.numOfCartItems)
      },
      error: err => {
        console.log('err: ', err);
      },
    })
  }
  updateProductCount(count: number, id: string) {
    this._cartService.updateProductCount(count,id).subscribe({
      next: res => {
        this.cart = res;
        this.show("Success")
      }
    })
  }
  removeProduct(id: string) {
    this._cartService.removeProduct(id).subscribe({
      next: res => {
      this.cart = res
      this._cartService.numberOfItems.next(res.numOfCartItems)
      this.show('This product is removed')
      }
    })
  }
}
