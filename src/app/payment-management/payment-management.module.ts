import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {PaymentManagementComponent} from './payment-management.component';
import { PaymentConfigComponent } from './payment-config/payment-config.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: PaymentManagementComponent}
    ])],
  exports: [RouterModule],
})
export class PaymentManagementRoutingModule {
}

@NgModule({
  imports: [
    PaymentManagementRoutingModule
  ],
  declarations: [PaymentManagementComponent, PaymentConfigComponent]
})
export class PaymentManagementModule { }
