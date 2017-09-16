import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import {BookReviewComponent} from './book-review.component';
@NgModule({
    imports: [
        RouterModule.forChild([
            {path: '', component: BookReviewComponent}
        ])],
    exports: [RouterModule],
})
export class BookReviewRoutingModule {
}

@NgModule({
    imports: [
        BookReviewRoutingModule
    ],
    declarations: [BookReviewComponent]
})
export class BookReviewModule { }
