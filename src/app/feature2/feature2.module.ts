import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { TestexampleComponent } from './testexample/testexample.component';
import { DiscountoffersComponent } from './discountoffers/discountoffers.component';
import { CashbckComponent } from './cashbck/cashbck.component';


@NgModule({
  declarations: [
    TestexampleComponent,
    DiscountoffersComponent,
    CashbckComponent
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  exports:[TestexampleComponent]
})
export class Feature2Module { }
