import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _httpClient: HttpClient) { }
  getCart(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/cart',{
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    })
  }
  addProduct(id: string): Observable<any> {
    return this._httpClient.post('https://ecommerce.routemisr.com/api/v1/cart',{
      "productId":`${id}`
    },{
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    })
  }
  updateProductCount( count:number, id:string) : Observable<any> {
    return this._httpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,{
      count: `${count}`
    },{
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    })
  }
  checkOut(cartId: string, shipping: any): Observable<any> {
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:4200`,{
      shippingAddress: shipping
    },{
      headers: {
        token: `${localStorage.getItem('token')}`
      }
    })
  }
}
