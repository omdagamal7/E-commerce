import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoriesComponent } from './Components/categories/categories.component';
import { CategoryComponent } from './Components/category/category.component';
import { BrandsComponent } from './Components/brands/brands.component';
import { ProductsComponent } from './Components/products/products.component';
import { CartComponent } from './Components/cart/cart.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ResetCodeComponent } from './Components/reset-code/reset-code.component';
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoriesComponent,
    CategoryComponent,
    BrandsComponent,
    ProductsComponent,
    CartComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetCodeComponent,
    ResetPassComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
