import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Feature2RoutingModule } from './feature2-routing.module';
import { TestexampleComponent } from './testexample/testexample.component';


@NgModule({
  declarations: [
    TestexampleComponent
  ],
  imports: [
    CommonModule,
    Feature2RoutingModule
  ],
  exports:[TestexampleComponent]
})
export class Feature2Module { }
