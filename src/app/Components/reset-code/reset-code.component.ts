import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';

@Component({
  selector: 'app-reset-code',
  templateUrl: './reset-code.component.html',
  styleUrls: [
    '../css/login&signupStyle.css',
    './reset-code.component.css'
  ]
})
export class ResetCodeComponent {
  isInvalid: boolean = false;
  loader: boolean = false;
  message: string = ''
  resetPass: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  })

  constructor(
    private _authService:AuthService,
    private _router: Router
    ) {}

    resetCode(form: any) {
    if (form.valid) {
      this.loader = true;
      this._authService.verifyCode(form.value.resetCode).subscribe({
        next: res => this.message = res.message,
        error: err => {
          this.loader = false
        },
        complete: () => {
          this._router.navigate(['/resetpass'])
        }
      })
    }
  }
}
