/**
 * Created by Administrator on 2017/9/16.
 */
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {FineFreeComponent} from './fine-free.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: FineFreeComponent}
        ])],
    exports: [RouterModule],
})
export class FineFreeRoutingModule {
}

@NgModule({
    imports: [
        FineFreeRoutingModule
    ],
    declarations: [FineFreeComponent]
})
export class FineFreeModule { }
