import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [
    '../css/login&signupStyle.css',
    './login.component.css'
  ],
  providers: [MessageService]
})
export class LoginComponent {
  loader: boolean = false;
  incorrect: boolean = false;
  isInvalid: boolean = false;
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)]),
  })
  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _messageService: MessageService
    ) {}
    show(message:string) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  loggedIn(form:any) {

    if (form.valid) {
      this.loader = true;
      this._authService.logIn(form.value).subscribe({
        next: res => {
          localStorage.setItem('token',res.token),
          this._authService.getUserData()
        },
        error: err => {

          if (err.error.message) {
            this.show(err.error.message)
          }
          this.loader = false;
        },
        complete: () => {
          this._router.navigate(['/home'])
        }
      })
    } else {
      this.isInvalid = true
    }
  }
}
