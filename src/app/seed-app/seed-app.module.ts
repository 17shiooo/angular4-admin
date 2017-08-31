import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {SeedAppComponent} from './seed-app.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  { path: '', component: SeedAppComponent,children:[
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {
      path: 'employee-management',
      loadChildren: '../employee-management/employee-management.module#EmployeeManagementModule'
    },
    {
      path: 'authority-management',
      loadChildren: '../authority-management/authority-management.module#AuthorityManagementModule'
    },
    {
      path: 'holiday-management', loadChildren: '../holiday-management/holiday-management.module#HolidayManagementModule'
    },
    {
      path: 'payment-management', loadChildren: '../payment-management/payment-management.module#PaymentManagementModule'
    },
    {
      path: 'my-account', loadChildren: '../my-account/my-account.module#MyAccountModule'
    }
  ] },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeedAppRoutingModule {
}

@NgModule({
  imports: [
    CommonModule,
    SeedAppRoutingModule
  ],
  declarations: [SeedAppComponent,HomeComponent]
})
export class SeedAppModule { }
