import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetCodeComponent } from './Components/reset-code/reset-code.component';
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';
import { authGuard } from 'src/core/guards/auth.guard';
import { registrationGuard } from 'src/core/guards/registration.guard';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ChangeUserDataComponent } from './Components/change-user-data/change-user-data.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckoutComponent } from './cart/checkout/checkout.component';
import { OrdersComponent } from './cart/orders/orders.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' ,},
  {path: 'home', canActivate:[authGuard], component:HomeComponent, title: 'home'},
  {path: 'categories', canActivate:[authGuard], component:CategoriesComponent, title: 'Categories'},
  {path: 'brands', canActivate:[authGuard], component:BrandsComponent, title: 'Brands'},
  {path: 'products',canActivate:[authGuard],component:ProductsComponent, title: 'Products'},
  {path: 'checkout/:id', canActivate:[authGuard], component: CheckoutComponent, title: 'Check Out'},
  {path: 'allorders', canActivate:[authGuard], component: OrdersComponent, title: 'All Orders'},
  {path: 'details/:id',canActivate:[authGuard],component:ProductDetailsComponent, title: 'Details'},
  {path: 'changePassword',canActivate:[authGuard],component:ChangePasswordComponent, title: 'Change Your Password'},
  {path: 'changeUserData',canActivate:[authGuard],component:ChangeUserDataComponent, title: 'Change Your data'},
  {path: 'login', canActivate:[registrationGuard], component:LoginComponent, title: 'Log-in'},
  {path: 'forgotPassword', canActivate:[registrationGuard], component:ForgotPasswordComponent, title: 'Forgot Password'},
  {path: 'resetCode',canActivate:[registrationGuard], component:ResetCodeComponent, title: 'Code'},
  {path: 'resetpass', canActivate:[registrationGuard], component:ResetPassComponent, title: 'Reset Password'},
  {path: 'signup', canActivate:[registrationGuard], component:SignupComponent, title: 'Sign-up'},
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule), title: 'Cart' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
