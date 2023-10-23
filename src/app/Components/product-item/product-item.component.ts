import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/shared/services/cart.service';
import { MessageService } from 'primeng/api';
import { Products } from 'src/shared/interfaces/products';
import { ProductsService } from 'src/shared/services/products.service';
import { WishListService } from 'src/shared/services/wish-list.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [MessageService]
})
export class ProductItemComponent implements OnInit {
  products!: Products[];
  searchKey: string = '';
  addedToWishlist!: boolean
  constructor (
    private _productsService:ProductsService,
    private _wishListService:WishListService,
    private _cartService:CartService,
    private _messageService: MessageService
  ) {
    // this._wishListService.addedToWishlist.subscribe( res => {
    //   this.addedToWishlist.next(res)
    // })
  }
  show(message: string) {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: message });
}
  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next: res => this.products = res.data,
      error: err => console.log(err)
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
        this._wishListService.numOfWishlistItems.next(res.data.length)
        this.show(res.message)
      },
    })
  }
  removFromWishlist(id: string) {
    this._wishListService.removeFromWishList(id).subscribe({
      next: res => this.show(res.message),
      complete: () => {
        this._wishListService.addedToWishlist.subscribe(
          res => this.addedToWishlist = res
        )
      }
    })
  }
}
