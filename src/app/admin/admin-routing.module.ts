import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PermissionComponent } from './permission/permission.component';
import { UserAddComponent } from './user-add/user-add.component';

const routes: Routes = [
  {
    path:'dashboard', component:DashboardComponent,
    children:[{
      path:'permission', component: PermissionComponent
    },{
      path:'useradd', component: UserAddComponent
    }]
  }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
