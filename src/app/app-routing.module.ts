import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./infrastructure/components/interactive/start/start.component";

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', pathMatch: "full", redirectTo: 'start'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
