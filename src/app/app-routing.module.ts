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
// import { authGuard } from 'src/core/guards/auth.guard';
// import { registrationGuard } from 'src/core/guards/registration.guard';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' ,},
  {path: 'home', component:HomeComponent, title: 'home'},
  {path: 'categories',  component:CategoriesComponent, title: 'Categories'},
  {path: 'cart',  component:CartComponent, title: 'Cart'},
  {path: 'brands',  component:BrandsComponent, title: 'Brands'},
  {path: 'products', component:ProductsComponent, title: 'Products'},
  {path: 'login',  component:LoginComponent, title: 'Log-in'},
  {path: 'forgotPassword',  component:ForgotPasswordComponent, title: 'Forgot Password'},
  {path: 'resetCode', component:ResetCodeComponent, title: 'Code'},
  {path: 'resetpass',  component:ResetPassComponent, title: 'Reset Password'},
  {path: 'signup',  component:SignupComponent, title: 'Sign-up'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
