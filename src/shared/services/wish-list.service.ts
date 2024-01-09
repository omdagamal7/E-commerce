import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WishListService {
  numOfWishlistItems: BehaviorSubject<number> = new BehaviorSubject(0)
  addedToWishlist : BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor(private _httpClient: HttpClient) {
    this.getNumOfWishlistItems()

  }
  getNumOfWishlistItems() {
    
    this.getWishList().subscribe({
      next: res => this.numOfWishlistItems.next(res.count)
    })
  }
  addToWishList(id: string): Observable<any> {
    this.addedToWishlist.next(true)
    return this._httpClient.post(`${environment.domain}/api/v1/wishlist`,{
      productId: id,
    });
  }
  getWishList(): Observable<any> {
    return this._httpClient.get(`${environment.domain}/api/v1/wishlist`)
  }
  removeFromWishList(id: string): Observable<any> {
    this.addedToWishlist.next(false)
    return this._httpClient.delete(`${environment.domain}/api/v1/wishlist/${id}`);
  }
}
