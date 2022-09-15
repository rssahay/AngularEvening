import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Demo1Component } from './demo1/demo1.component';
import { HelloworldComponent } from './helloworld/helloworld.component';

const routes: Routes = [
  {
    path:'qwerty',  component: HelloworldComponent
  },
  {
    path:'demo', component: Demo1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
