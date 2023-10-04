import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService{
  numberOfItems: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor(private _httpClient: HttpClient) {
    this.numberOfCartItems()
  }
  numberOfCartItems() {
    this.getCart().subscribe({
      next: res => {
        this.numberOfItems.next(res.numOfCartItems);
      }
    })
  }
  getCart(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart')
  }
  addProduct(id: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
      "productId":`${id}`
    })
  }
  updateProductCount( count:number, id:string) : Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count: `${count}`
    })
  }
  removeProduct(id:string) : Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`)
  }
  checkOut(cartId: string, shipping: any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress: shipping
    })
  }
}
