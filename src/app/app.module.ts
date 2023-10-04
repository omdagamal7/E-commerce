import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { BadgeModule } from 'primeng/badge';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { LoginComponent } from './Components/login/login.component';
import { SignupComponent } from './Components/signup/signup.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './Components/change-password/change-password.component';
import { ResetCodeComponent } from './Components/reset-code/reset-code.component';
import { ResetPassComponent } from './Components/reset-pass/reset-pass.component';
import { ChangeUserDataComponent } from './Components/change-user-data/change-user-data.component';
import { SliderComponent } from './Components/slider/slider.component';
import { ProductItemComponent } from './Components/product-item/product-item.component';
import { SearchPipe } from 'src/shared/pipes/search.pipe';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { HttpInterceptor } from '../shared/interceptors/http.interceptor';
import { LoaderComponent } from './Components/loader/loader.component';
import { LoaderInterceptor } from '../shared/interceptors/loader.interceptor';
import { TokenDirective } from './Components/navbar/token.directive';
import { LoginWaysComponent } from './Components/login-ways/login-ways.component';
import { FooterComponent } from './Components/footer/footer.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CategoryComponent,
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    ResetCodeComponent,
    ResetPassComponent,
    ChangePasswordComponent,
    ChangeUserDataComponent,
    SliderComponent,
    ProductItemComponent,
    ProductDetailsComponent,
    SearchPipe,
    LoaderComponent,
    TokenDirective,
    LoginWaysComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    CarouselModule,
    FormsModule,
    BadgeModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptor,
      multi: true
    },  {
      provide: HTTP_INTERCEPTORS,
      useClass: LoaderInterceptor,
      multi: true,
  },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
