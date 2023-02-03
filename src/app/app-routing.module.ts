import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartComponent } from "./infrastructure/components/interactive/start/start.component";
import {WeddingComponent} from "./infrastructure/components/interactive/wedding/wedding.component";
import {FifteenComponent} from "./infrastructure/components/interactive/fifteen/fifteen.component";
import {ContactComponent} from "./infrastructure/components/interactive/contact/contact.component";

const routes: Routes = [
  { path: 'start', component: StartComponent },
  { path: '', pathMatch: "full", redirectTo: 'start'},
  { path: 'bodas', component: WeddingComponent},
  { path: 'quinceanhos', component: FifteenComponent},
  { path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
