import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFundamentalsRoutingModule } from './component-fundamentals-routing.module';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DirectivesExampleComponent
  ],
  imports: [
    CommonModule,
    FormsModule  ,    
    ComponentFundamentalsRoutingModule
  ],
  exports:[DirectivesExampleComponent]
})
export class ComponentFundamentalsModule { }
