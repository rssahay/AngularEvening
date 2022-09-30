import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { PermissionComponent } from './permission/permission.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    UserAddComponent,
    PermissionComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
