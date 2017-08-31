/**
 * Created by apollo on 31/8/17.
 */
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
const routes:Routes = [
  {path:'',redirectTo:'/login.html',pathMatch:'full'},
  {path:'login.html',component:LoginComponent},
  {path:'seed-app',loadChildren:'./seed-app/seed-app.module#SeedAppModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
