import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommonFeatureRoutingModule } from './common-feature-routing.module';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    CommonFeatureRoutingModule,
   
    ReactiveFormsModule ,
    FormsModule,
  ]
})
export class CommonFeatureModule { }
