import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexibleSpinnerModule } from 'flexible-spinner';

import { AppComponent } from './app.component';
import { TmpSpinnerComponent } from './tmp-spinner/tmp-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    TmpSpinnerComponent
  ],
  imports: [
    BrowserModule,
    FlexibleSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
