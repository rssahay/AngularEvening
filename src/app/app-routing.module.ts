import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { EducationComponent } from './education/education.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path:'education', component: EducationComponent
  },
  {
    path:'hello',  component: HelloworldComponent
  },
  {
    path:'demo', component: Demo1Component
  },
 
  {
    path:'' , redirectTo :'/demo' , pathMatch:'full'
  },
  {
    path:'**' , component: PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
