import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NirComponent } from './nir/nir.component';
import { NirFormatPipe } from './nir-format.pipe';
import { PasswordComponent } from './password/password.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NirComponent,
    NirFormatPipe,
    PasswordComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
