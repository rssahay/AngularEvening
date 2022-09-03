import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Demo1Component } from './demo1/demo1.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { ComponentFundamentalsModule } from './component-fundamentals/component-fundamentals.module';

@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HelloworldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentFundamentalsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
