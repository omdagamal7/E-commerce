import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/core/Services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: [
    '../css/authenticationStyle.css',
    './signup.component.css'
  ],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {
  isInvalid: boolean = false;
  loader: boolean = false;
  alreadyExist: any;
  signUpForm!: FormGroup;
  constructor(
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router:Router,
    private _messageService: MessageService
    ) {}
    show(message: string) {
      this._messageService.add({ severity: 'error', summary: 'Error', detail: message });
  }

  ngOnInit(): void {
    this.signUpForm = this._formBuilder.group({
      name: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(18)]],
      email: [null,[Validators.required,Validators.email]],
      phone: [null,[Validators.required,Validators.pattern(/^[0-9]{11,12}$/)]],
      password: [null,[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{7,20}$/)]],
      rePassword: [null,[Validators.required,this.validateRePassword.bind(this)]]
    })

  }

  validateRePassword(control: FormControl) {
    const password = this.signUpForm?.get('password')?.value;
    const rePassword = control.value;
    if (password === rePassword) {
      return null
    } else {
      return {matching: true};
    }
  }
  signedUp(form: any) {
    if (form.valid) {
      this.loader = true;
      this._authService.SignUp(form.value).subscribe({
        next: res => {;
          console.log('res: ', res);
        },
        error: err => {
          this.loader = false;
          if (err.error.message) {
            this.show(err.error.message)
          }
        },
        complete: () => {
          setTimeout(() => {
            this._router.navigate(['/login']);
          }, 500);
        }
      })
    } else {
      this.isInvalid = true
    }
  }
}
