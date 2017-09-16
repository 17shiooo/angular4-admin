import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ClassifyComponent} from './classify.component';
@NgModule({
  imports: [
    RouterModule.forChild([
      {path: '', component: ClassifyComponent}
    ])],
  exports: [RouterModule],
})
export class ClassifyRoutingModule {
}

@NgModule({
  imports: [
    ClassifyRoutingModule
  ],
  declarations: [ClassifyComponent]
})
export class ClassifyModule { }
