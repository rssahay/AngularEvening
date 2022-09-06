import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFundamentalsRoutingModule } from './component-fundamentals-routing.module';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormsModule } from '@angular/forms';
import { CustomHighlighterDirective } from '../Directives/custom-highlighter.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    DirectivesExampleComponent,
    CustomHighlighterDirective,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    FormsModule  ,
    ComponentFundamentalsRoutingModule
  ],
  exports:[DirectivesExampleComponent,
    ParentComponent]
})
export class ComponentFundamentalsModule { }
