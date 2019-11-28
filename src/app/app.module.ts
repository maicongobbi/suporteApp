import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { BuscarRoutingModule } from './buscar/buscar-routing.module.tns';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuscarRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
