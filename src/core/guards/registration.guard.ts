import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const registrationGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  if (localStorage.getItem('token') == null) {
    return true
  } else {
    router.navigate(['/home']);
    return false
  }
};
