import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CartComponent } from './Components/cart/cart.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetCodeComponent } from './Components/reset-code/reset-code.component';
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';
import { authGuard } from 'src/core/guards/auth.guard';
import { registrationGuard } from 'src/core/guards/registration.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' ,},
  {path: 'home', canActivate:[authGuard], component:HomeComponent, title: 'home'},
  {path: 'categories', canActivate:[authGuard], component:CategoriesComponent, title: 'Categories'},
  {path: 'cart', canActivate:[authGuard], component:CartComponent, title: 'Cart'},
  {path: 'brands', canActivate:[authGuard], component:BrandsComponent, title: 'Brands'},
  {path: 'products',canActivate:[authGuard],component:ProductsComponent, title: 'Products'},
  {path: 'login', canActivate:[registrationGuard], component:LoginComponent, title: 'Log-in'},
  {path: 'forgotPassword', canActivate:[registrationGuard], component:ForgotPasswordComponent, title: 'Forgot Password'},
  {path: 'resetCode',canActivate:[registrationGuard], component:ResetCodeComponent, title: 'Code'},
  {path: 'resetpass', canActivate:[registrationGuard], component:ResetPassComponent, title: 'Reset Password'},
  {path: 'signup', canActivate:[registrationGuard], component:SignupComponent, title: 'Sign-up'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
