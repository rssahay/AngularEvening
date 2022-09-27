import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { EducationComponent } from './education/education.component';
import { GirlsSectionComponent } from './girls-section/girls-section.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MenFootwearComponent } from './men-footwear/men-footwear.component';
import { MensSectionComponent } from './mens-section/mens-section.component';
import { MenwatchComponent } from './menwatch/menwatch.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShopCategoryComponent } from './shop-category/shop-category.component';

const routes: Routes = [
  {
    path: 'education', component: EducationComponent
  },
  {
    path: 'hello', component: HelloworldComponent,
    children: [{
      path: 'shopcategory', component: ShopCategoryComponent
    }, {
      path: 'mens', component: MensSectionComponent,
        children: [{
          path: 'mensfootwear', component: MenFootwearComponent
        }, {
          path: 'menwatch', component: MenwatchComponent
        }]
    }, {
      path: 'girls', component: GirlsSectionComponent
    }]

  },
  {
    path: 'demo', component: Demo1Component
  },
  {
    path: '', redirectTo: '/demo', pathMatch: 'full'
  },
  {
    path: '**', component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
