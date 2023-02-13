import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotographyComponent } from './infrastructure/components/interactive/photography/photography.component';
import { FooterComponent } from './infrastructure/components/interactive/footer/footer.component';
import { HeaderComponent } from './infrastructure/components/interactive/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './infrastructure/components/view/slider/slider.component';
import { RouletteComponent } from './infrastructure/components/view/roulette/roulette.component';
import { ServicesComponent } from './infrastructure/components/view/services/services.component';
import { GridComponent } from './infrastructure/components/view/grid/grid.component';
import { FormComponent } from './infrastructure/components/view/form/form.component';
import { WeddingComponent } from './infrastructure/components/interactive/wedding/wedding.component';
import { FifteenComponent } from './infrastructure/components/interactive/fifteen/fifteen.component';
import { ContactComponent } from './infrastructure/components/interactive/contact/contact.component';
import { CardComponent } from './infrastructure/components/view/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaternityComponent } from './infrastructure/components/interactive/maternity/maternity.component';
import { StartComponent } from './infrastructure/components/interactive/start/start.component';
import { DescriptionComponent } from './infrastructure/components/view/description/description.component';

@NgModule({
  declarations: [
    AppComponent,
    PhotographyComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    RouletteComponent,
    ServicesComponent,
    GridComponent,
    FormComponent,
    WeddingComponent,
    FifteenComponent,
    ContactComponent,
    CardComponent,
    MaternityComponent,
    StartComponent,
    DescriptionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
