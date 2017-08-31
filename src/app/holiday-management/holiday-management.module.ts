import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {HolidayManagementComponent} from './holiday-management.component';
import { CommonHolidayComponent } from './common-holiday/common-holiday.component';
import { SpecialHolidayComponent } from './special-holiday/special-holiday.component'

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: HolidayManagementComponent}
    ])],
  exports: [RouterModule],
})
export class HolidayManagementRoutingModule {
}


@NgModule({
  imports: [
    HolidayManagementRoutingModule
  ],
  declarations: [HolidayManagementComponent, CommonHolidayComponent, SpecialHolidayComponent]
})
export class HolidayManagementModule { }
