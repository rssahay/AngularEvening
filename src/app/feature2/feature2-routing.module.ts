import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CashbckComponent } from './cashbck/cashbck.component';
import { DiscountoffersComponent } from './discountoffers/discountoffers.component';
import { TestexampleComponent } from './testexample/testexample.component';

const routes: Routes = [{
  path: '', component: TestexampleComponent,
}, {
  path: 'offers', component: DiscountoffersComponent
},{
  path:'cashback', component:CashbckComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature2RoutingModule { }
