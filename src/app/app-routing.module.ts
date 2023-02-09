import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PhotographyComponent } from "./infrastructure/components/interactive/photography/photography.component";
import {WeddingComponent} from "./infrastructure/components/interactive/wedding/wedding.component";
import {FifteenComponent} from "./infrastructure/components/interactive/fifteen/fifteen.component";
import {ContactComponent} from "./infrastructure/components/interactive/contact/contact.component";
import {MaternityComponent} from "./infrastructure/components/interactive/maternity/maternity.component";
import {StartComponent} from "./infrastructure/components/interactive/start/start.component";

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: 'fotografia', component: PhotographyComponent },
  { path: '', pathMatch: "full", redirectTo: 'start'},
  { path: 'bodas', component: WeddingComponent},
  { path: 'quinceanhos', component: FifteenComponent},
  { path: 'maternidad', component: MaternityComponent},
  { path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
