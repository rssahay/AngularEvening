import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BillingComponent } from './billing/billing.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { Feature1RoutingModule } from './feature1-routing.module';



@NgModule({
  declarations: [
    BillingComponent,
    CheckoutComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    Feature1RoutingModule
  ]
})
export class Feature1Module { }
