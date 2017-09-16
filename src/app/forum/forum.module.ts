/**
 * Created by Administrator on 2017/9/16.
 */
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {ForumComponent} from './forum.component'
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: ForumComponent}
        ])],
    exports: [RouterModule],
})
export class ForumRoutingModule {
}

@NgModule({
    imports: [
        ForumRoutingModule
    ],
    declarations: [ForumComponent]
})
export class ForumModule { }
