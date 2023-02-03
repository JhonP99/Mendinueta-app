import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartComponent } from './infrastructure/components/view/start/start.component';
import { FooterComponent } from './infrastructure/components/interactive/footer/footer.component';
import { HeaderComponent } from './infrastructure/components/interactive/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './infrastructure/components/view/slider/slider.component';
import { RouletteComponent } from './infrastructure/components/view/roulette/roulette.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    FooterComponent,
    HeaderComponent,
    SliderComponent,
    RouletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
