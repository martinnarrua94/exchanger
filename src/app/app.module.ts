import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { FormsModule } from '@angular/forms';
import { ExchangePickerComponent } from './exchange/exchange-picker/exchange-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent,
    ExchangePickerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
