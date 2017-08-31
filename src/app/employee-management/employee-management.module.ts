import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {EmployeeManagementComponent} from './employee-management.component'
@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: EmployeeManagementComponent}
    ])],
  exports: [RouterModule],
})
export class EmployeeManagementRoutingModule {
}

@NgModule({
  imports: [
    EmployeeManagementRoutingModule
  ],
  declarations: [EmployeeManagementComponent]
})
export class EmployeeManagementModule { }
