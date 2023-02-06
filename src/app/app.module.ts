import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './infrastructure/components/interactive/start/start.component';
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

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
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
    CardComponent
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
