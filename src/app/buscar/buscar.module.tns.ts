import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { BuscarRoutingModule } from './buscar-routing.module.tns';
import { BuscarComponent } from './buscar.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    NativeScriptCommonModule, 
    BuscarRoutingModule, BuscarRoutingModule,
    CommonModule,
    HttpClientModule

  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BuscarModule { }
