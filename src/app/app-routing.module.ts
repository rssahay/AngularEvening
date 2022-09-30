import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent } from './common-feature/login/login.component';
import { LoginuserComponent } from './component-fundamentals/loginuser/loginuser.component';
import { Demo1Component } from './demo1/demo1.component';
import { EducationComponent } from './education/education.component';
import { GirlsSectionComponent } from './girls-section/girls-section.component';
import { AuthGuardGuard } from './Guards/auth-guard.guard';
import { UserAuthGuard } from './Guards/user-auth.guard';
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
    path: 'dashboard', component: DashboardComponent
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
    path: 'demo', component: Demo1Component, canActivate: [UserAuthGuard],
  },

  {
    path: 'feature1',
    loadChildren: () => import('./feature1/feature1.module').then(el => el.Feature1Module)
    
  },
  {
    path: 'feature2',
    loadChildren: () => import('./feature2/feature2.module').then(m => m.Feature2Module)
  },
  {
    path: 'login', component: LoginuserComponent
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
  // {
  //   path: '', redirectTo: '/demo', pathMatch: 'full'
  // },
  // {
  //   path: '**', component: PagenotfoundComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
