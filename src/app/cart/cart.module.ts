import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastModule } from 'primeng/toast';
import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { CartProductsComponent } from './cart-products/cart-products.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterProductPipe } from './shared/pipes/filter-product.pipe';
import { CheckoutComponent } from './checkout/checkout.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CartComponent,
    CartProductsComponent,
    FilterProductPipe,
    CheckoutComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastModule,
  ],

})
export class CartModule { }
