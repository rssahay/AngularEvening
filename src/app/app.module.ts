import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Demo1Component } from './demo1/demo1.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ComponentFundamentalsModule } from './component-fundamentals/component-fundamentals.module';
import { CustomHighlighterDirective } from './Directives/custom-highlighter.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { Feature2Module } from './feature2/feature2.module';
import { HoverhighlighterDirective } from './Directives/hoverhighlighter.directive';
import { EducationComponent } from './education/education.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';



@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HelloworldComponent,
    HoverhighlighterDirective,
    EducationComponent,
    PagenotfoundComponent,
   // CustomHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentFundamentalsModule,
    ReactiveFormsModule,
    Feature2Module

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
