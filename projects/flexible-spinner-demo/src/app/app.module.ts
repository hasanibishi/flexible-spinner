import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexibleSpinnerModule } from 'flexible-spinner';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FlexibleSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
