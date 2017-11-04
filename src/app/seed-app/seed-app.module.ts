import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { SeedAppComponent } from './seed-app.component';
import { HomeComponent } from '../home/home.component';

const routes: Routes = [
  {
    path: '', component: SeedAppComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'forum',
        loadChildren: '../forum/forum.module#ForumModule'
      },
      {
        path: 'fine_free',
        loadChildren: '../fine-free/fine-free.module#FineFreeModule'
      },
      {
        path: 'classify',
        loadChildren: '../classify/classify.module#ClassifyModule'
      },
      {
        path: 'book_review',
        loadChildren: '../book-review/book-review.module#BookReviewModule'
      },
    ]
  },
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
    HttpModule,
    SeedAppRoutingModule
  ],
  declarations: [SeedAppComponent, HomeComponent]
})
export class SeedAppModule { }
