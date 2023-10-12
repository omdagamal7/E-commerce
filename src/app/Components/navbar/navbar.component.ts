import { Component, OnInit, inject } from '@angular/core';
import { UserData } from 'src/core/InterFaces/userData';
import { AuthService } from 'src/core/Services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { CartProductsComponent } from 'src/app/cart/cart-products/cart-products.component';
import { BadgeDirective } from 'primeng/badge';
import { CartService } from 'src/app/cart/shared/services/cart.service';
import { WishListService } from 'src/shared/services/wish-list.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navToggle: boolean = true;
  socialDropDown: boolean = false;
  profileToggle: boolean = false;
  loggedIn: boolean = false
  userData!: UserData;
  numberOfItems!: string;
  wishlistCount!: string
  constructor (
    private _authService:AuthService,
    private _router: Router,
    private _cartService: CartService,
    private _wishListService: WishListService
    ) {

    }
  ngOnInit(): void {
    this._cartService.numberOfItems.subscribe(
      (res) => this.numberOfItems = `${res}`
    )
    if (localStorage.getItem('token') != null) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
    this._authService.userData.subscribe(res => {
      this.userData = res
      if (this._authService.userData.getValue()) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false
      }
    })
    this._wishListService.numOfWishlistItems.subscribe(
      res => this.wishlistCount = `${res}`
    )
}

  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this.loggedIn = false
    this.profileToggle = false
  }
  dropDown() {
    this.navToggle = !this.navToggle
  }

  socialToggle () {
    this.socialDropDown = !this.socialDropDown
  }
  profileOpen () {
    this.profileToggle = !this.profileToggle
  }
}
