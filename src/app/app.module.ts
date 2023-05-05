import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryModule } from './country/country.module';
import { CountryRoutingModule } from './country/country-routing.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CountryModule,
    AppRoutingModule,
    CountryRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
