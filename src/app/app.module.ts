import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from '@src/app/app-routing.module';
import { AppComponent } from '@src/app/app.component';
import { BuscarRoutingModule } from './buscar/buscar-routing.module.tns';
import { ListaRoutingModule } from './home/lista/lista-routing.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuscarRoutingModule,
    ListaRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
