import { Directive, HostListener } from '@angular/core';
import { NavbarComponent } from './navbar.component';

@Directive({
  selector: '[appToken]'
})
export class TokenDirective {

  constructor(private _nav: NavbarComponent) { }

  @HostListener('window:storage', ['$event'])
  onStorageChange(event: StorageEvent) {
    if (event.key === 'token') {
      if (event.newValue == null) {
        this._nav.logOut()
      }
    }
  }

}
