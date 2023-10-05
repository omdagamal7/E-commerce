import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Details } from 'src/shared/interfaces/details';
import { ProductsService } from 'src/shared/services/products.service';
import { MessageService } from 'primeng/api';
import { CartService } from 'src/app/cart/shared/services/cart.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [MessageService]
})
export class ProductDetailsComponent implements OnInit {
  productId: string = '';
  details!: Details;
  constructor(
    private _productsService: ProductsService,
    private _cartService: CartService,
    private _activatedRoute: ActivatedRoute,
    private _messageService:MessageService
  ) {}
  show(message: string) {
    this._messageService.add({ severity: 'success', summary: 'Success', detail: message });
}
  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe({
      next: (res: any) => this.productId = res.params.id
    })
    this._productsService.getProductDetails(this.productId).subscribe({
      next: res => this.details = res.data,
      error: err => console.log(err)
    })
  }
  addToCart(productId: string) {
    this._cartService.addProduct(productId).subscribe({
      next: res =>  this.show(res.message)
    })
  }
    customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    autoplay: true,
    nav: true
  }
}
