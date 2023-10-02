import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/core/Services/auth.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: [
    './change-password.component.css',
    '../css/authenticationStyle.css'
  ],
  providers: [MessageService]

})
export class ChangePasswordComponent {
  isInvalid = false
  loader = false
  constructor (
    private _formBuilder: FormBuilder,
    private _authServices: AuthService,
    private _router: Router,
    private _messageService: MessageService
    ) {}
    show(message: string) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }
  changePassForm: FormGroup = this._formBuilder.group({
    currentPassword: [null,[Validators.required]],
    password: [null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,18}$/)]],
    rePassword: [null,[Validators.required,this.validateRePassword.bind(this)]]
  })
  validateRePassword(control: FormControl) {
    const password = this.changePassForm?.get('password')?.value;
    const rePassword = control.value;
    if (password === rePassword) {
      return null
    } else {
      return {matching: true};
    }
  }
  changed(form: any) {
    if (form.valid) {
      this.loader = true
      this._authServices.changePassword(form.value).subscribe({
        next: res => console.log(res),
        error: err => {
          this.loader = false,
          this.show(err.error.message)
        },
        complete: () => this._router.navigate(['/home'])
      })
    }
  }
}
