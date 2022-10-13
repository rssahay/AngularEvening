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
import { ShopCategoryComponent } from './shop-category/shop-category.component';
import { MensSectionComponent } from './mens-section/mens-section.component';
import { GirlsSectionComponent } from './girls-section/girls-section.component';
import { MenFootwearComponent } from './men-footwear/men-footwear.component';
import { MenwatchComponent } from './menwatch/menwatch.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SquarePipe } from './Pipes/square.pipe';
import { appHttpInterceptors } from './Interceptors/appInterceptors';
import { appHttp } from './Interceptors/appHttpInterceptor';
import { RequestCheck } from './Interceptors/requestCheck';
import { ReverseStringPipe } from './Pipes/reverse-string.pipe';




@NgModule({
  declarations: [
    AppComponent,
    Demo1Component,
    HelloworldComponent,
    HoverhighlighterDirective,
    EducationComponent,
    PagenotfoundComponent,
    ShopCategoryComponent,
    MensSectionComponent,
    GirlsSectionComponent,
    MenFootwearComponent,
    MenwatchComponent,
  //  ReverseStringPipe,
  //  SquarePipe,
    
   // CustomHighlighterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentFundamentalsModule,
    ReactiveFormsModule,
    Feature2Module,
    AdminModule,
    HttpClientModule
  ],
  providers: [
    {
    provide: HTTP_INTERCEPTORS, useClass: appHttpInterceptors, multi:true
  },
  {
    provide: HTTP_INTERCEPTORS, useClass: appHttp, multi:true
  },{
    provide: HTTP_INTERCEPTORS, useClass:RequestCheck, multi:true
  }
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
