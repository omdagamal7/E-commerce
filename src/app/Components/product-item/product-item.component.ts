import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart/shared/services/cart.service';
import { MessageService } from 'primeng/api';
import { Products } from 'src/shared/interfaces/products';
import { ProductsService } from 'src/shared/services/products.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
  providers: [MessageService]
})
export class ProductItemComponent implements OnInit {
  products!: Products[]
  constructor (
    private _productsService:ProductsService,
    private _cartService:CartService,
    private _messageService: MessageService
  ) {}
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
      next: res => this.show(res.message),
      error: err => console.log(err),

    })
  }
}
