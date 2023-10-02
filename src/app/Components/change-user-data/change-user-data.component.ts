import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/core/Services/auth.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-change-user-data',
  templateUrl: './change-user-data.component.html',
  styleUrls: [
    './change-user-data.component.css',
    '../css/authenticationStyle.css'
],
  providers: [
    MessageService,
    NavbarComponent
  ]
})
export class ChangeUserDataComponent {

  
    isInvalid = false
    loader = false
    constructor (
      private _formBuilder: FormBuilder,
      private _authServices: AuthService,
      private _router: Router,
      private _messageService: MessageService,
      private _navBar: NavbarComponent
      ) {}
      show(message: string) {
        this._messageService.add({ severity: 'error', summary: 'Error', detail: message });
    }
    changeDataForm: FormGroup = this._formBuilder.group({
      name: [null,[Validators.required,Validators.minLength(3),Validators.maxLength(16)]],
      email: [null,[Validators.required,Validators.email]],
      phone: [null,[Validators.required,Validators.minLength(10),Validators.maxLength(12)]]
    })
    changed(form: any) {
      if (form.valid) {
        this.loader = true
        this._authServices.changeUserData(form.value).subscribe({
          next: res => console.log(res),
          error: err => {
            console.log('err: ', err);
            this.loader = false;
            console.log(err.error.errors.msg);
            if (err.error.errors.msg) {
              this.show(err.error.errors.msg)
            }
          },
          complete: () => {
            this._router.navigate(['/home'])
          }
    })
  }
    }
  }