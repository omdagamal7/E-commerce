import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: [
    '../css/login&signupStyle.css',
    './forgot-password.component.css'
  ]
})
export class ForgotPasswordComponent {
  isInvalid: boolean = false;
  loader: boolean = false;
  message: string = ''
  forgotPass: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  })

  constructor(
    private _authService:AuthService,
    private _router: Router
    ) {}

  password(form: any) {
    if (form.valid) {
      this.loader = true;
      this._authService.forgotPass(form.value).subscribe({
        next: res => this.message = res.message,
        error: err => {
          console.log(err);
          this.loader = false
        },
        complete: () => {
          this._router.navigate(['/resetCode'])
        }
      })
    }
  }
}
