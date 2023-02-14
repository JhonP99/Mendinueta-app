import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ContactComponent} from "./infrastructure/components/interactive/contact/contact.component";
import {StartComponent} from "./infrastructure/components/interactive/start/start.component";
import {MarketingComponent} from "./infrastructure/components/interactive/marketing/marketing.component";
import {SMediaComponent} from "./infrastructure/components/interactive/smedia/smedia.component";
import {WebDevComponent} from "./infrastructure/components/interactive/web-dev/web-dev.component";
import {BrandDesingComponent} from "./infrastructure/components/interactive/brand-desing/brand-desing.component";

const routes: Routes = [
  { path: 'start', component: StartComponent},
  { path: '', pathMatch: "full", redirectTo: 'start'},
  { path: 'marketing', component:MarketingComponent},
  { path: 'social-media', component:SMediaComponent},
  { path: 'desarrollo-web', component:WebDevComponent},
  { path: 'diseño-de-marca', component:BrandDesingComponent},
  { path: 'contacto', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
