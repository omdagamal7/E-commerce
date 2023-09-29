import { Component, OnInit, inject } from '@angular/core';
import { UserData } from 'src/core/InterFaces/userData';
import { AuthService } from 'src/core/Services/auth.service';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navToggle: boolean = true;
  socialDropDown: boolean = false;
  profileToggle: boolean = false;
  loggedIn: boolean = false
  userData: UserData = {} as UserData;
  constructor (
    private _authService:AuthService,
    private _router: Router
    ) {

    }
  ngOnInit(): void {
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
