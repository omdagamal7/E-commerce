import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { BehaviorSubject } from 'rxjs';
import { WishList } from 'src/shared/interfaces/wish-list';
import { ProductsService } from 'src/shared/services/products.service';
import { WishListService } from 'src/shared/services/wish-list.service';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css'],
  providers: [MessageService],
  standalone: true,
  imports: [
    CommonModule,
    ToastModule
  ]
})
export class WishListComponent implements OnInit {
  wishList!: WishList;
  numOfWishlistItems: BehaviorSubject<number> = new BehaviorSubject(0)
  constructor (
    private _wishListService:WishListService,
    private _messageService: MessageService,
    ) {}
    show(message: string) {
      this._messageService.add({ severity: 'success', summary: 'Success', detail: message });
  }
  ngOnInit(): void {
    console.log(1);
    
    this._wishListService.getWishList().subscribe({
      next: res => {
        this.wishList = res;
      console.log(this.wishList);
      
      }
    })
    this._wishListService.numOfWishlistItems.subscribe(
      res => this.numOfWishlistItems.next(res)
    )
  }
  removeFromWishList(id:string) {
    this._wishListService.removeFromWishList(id).subscribe({
      next: res => {
        this.show(res.message)

      },
      error: err => console.log(err),
      complete: () => this._wishListService.getWishList().subscribe({
        next: res => {
          this.wishList = res;
          console.log(this.wishList);
          
          this._wishListService.numOfWishlistItems.next(res.count)
        }
      })
    })
  }
}
