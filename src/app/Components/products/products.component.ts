import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CartService } from 'src/app/cart/shared/services/cart.service';
import { Products } from 'src/shared/interfaces/products';
import { ProductsService } from 'src/shared/services/products.service';
import { WishListService } from 'src/shared/services/wish-list.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ToastModule
  ],
  providers: [MessageService]
})
export class ProductsComponent implements OnInit {
  products!: Products[]
  constructor (
    private _productsService: ProductsService,
    private _wishListService: WishListService,
    private _cartService: CartService,
    private _messageService:MessageService
  ) {}
  show(message: string) {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: message });
}
  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next: res => {
        this.products = res.data
        console.log('this.products: ', this.products);
      }
    })
  }
  addProduct(id: string) {
    this._cartService.addProduct(id).subscribe({
      next: res => {
        this.show(res.message);
        this._cartService.numberOfItems.next(res.numOfCartItems)
      },
      error: err => console.log(err),

    })
  }
  addToWishList(id:string) {
    this._wishListService.addToWishList(id).subscribe({
      next: res => {
        console.log(res)
        this.show(res.message)
      }
    })
  }
}
