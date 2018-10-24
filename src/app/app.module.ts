import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NirComponent } from './nir/nir.component';
import { NirFormatPipe } from './nir-format.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NirComponent,
    NirFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
