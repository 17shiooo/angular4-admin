import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {MyAccountComponent} from './my-account.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: MyAccountComponent}
    ])],
  exports: [RouterModule],
})
export class MyAccountRoutingModule {
}


@NgModule({
  imports: [
    MyAccountRoutingModule
  ],
  declarations: [MyAccountComponent]
})
export class MyAccountModule { }
