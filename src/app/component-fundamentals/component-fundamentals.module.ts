import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentFundamentalsRoutingModule } from './component-fundamentals-routing.module';
import { DirectivesExampleComponent } from './directives-example/directives-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomHighlighterDirective } from '../Directives/custom-highlighter.directive';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { StudenDetailsChildComponent } from './studen-details-child/studen-details-child.component';
import { ReactiveFormsExamplesComponent } from './reactive-forms-examples/reactive-forms-examples.component';
import { LifecycleeventsComponent } from './lifecycleevents/lifecycleevents.component';
import { Feature2Module } from '../feature2/feature2.module';
import { LifecyclechildComponent } from './lifecycleevents/lifecyclechild/lifecyclechild.component';
import { SchoolParentComponent } from './school-parent/school-parent.component';
import { StudentChildComponent } from './student-child/student-child.component';
import { LoginuserComponent } from './loginuser/loginuser.component';
import { ReactiveProgramComponent } from './reactive-program/reactive-program.component';
import { RxjsExampleComponent } from './rxjs-example/rxjs-example.component';
import { RxjsSubjectsExampleComponent } from './rxjs-subjects-example/rxjs-subjects-example.component';
import { UserHttpExampleComponent } from './user-http-example/user-http-example.component';
import { SquarePipe } from '../Pipes/square.pipe';
import { ReverseStringPipe } from '../Pipes/reverse-string.pipe';


@NgModule({
  declarations: [
    DirectivesExampleComponent,
    CustomHighlighterDirective,
    ParentComponent,
    ChildComponent,
    StudenDetailsChildComponent,
    ReactiveFormsExamplesComponent,
    LifecycleeventsComponent,
    LifecyclechildComponent,
    SchoolParentComponent,
    StudentChildComponent,
    LoginuserComponent,
    ReactiveProgramComponent,
    RxjsExampleComponent,
    RxjsSubjectsExampleComponent,
    UserHttpExampleComponent,
    SquarePipe,
    ReverseStringPipe
  ],
  imports: [
    CommonModule,
    FormsModule  ,
    ComponentFundamentalsRoutingModule,
    ReactiveFormsModule,
    Feature2Module
    
  ],
  exports:[DirectivesExampleComponent,
    ParentComponent,
    ReactiveFormsExamplesComponent,
    LifecycleeventsComponent,
    SchoolParentComponent]
})
export class ComponentFundamentalsModule { }
