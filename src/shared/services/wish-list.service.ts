import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishListService implements OnInit {
  numOfWishlistItems: BehaviorSubject<number> = new BehaviorSubject(0)
  addedToWishlist = false
  constructor(private _httpClient: HttpClient) {
  }
  ngOnInit(): void {
    this.getNumOfWishlistItems()
    
  }
  getNumOfWishlistItems() {
    this.getWishList().subscribe({
      next: res => this.numOfWishlistItems.next(res.count)
    })
  }
  addToWishList(id: string): Observable<any> {
    this.addedToWishlist = true
    return this._httpClient.post(`https://ecommerce.routemisr.com/api/v1/wishlist`,{
      productId: id,
    });
  }
  getWishList(): Observable<any> {
    return this._httpClient.get('https://ecommerce.routemisr.com/api/v1/wishlist')
  }
  removeFromWishList(id: string): Observable<any> {
    return this._httpClient.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`);
  }
}
