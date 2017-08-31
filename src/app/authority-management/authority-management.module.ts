import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from "@angular/router";
import {AuthorityManagementComponent} from './authority-management.component'

const routes: Routes = [
  { path: '', component: AuthorityManagementComponent },
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthorityManagementRoutingModule {
}


@NgModule({
  imports: [
    CommonModule,
    AuthorityManagementRoutingModule
  ],
  declarations: [AuthorityManagementComponent]
})
export class AuthorityManagementModule { }

