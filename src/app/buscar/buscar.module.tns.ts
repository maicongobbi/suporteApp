import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BuscarComponent } from '@src/app/buscar/buscar.component';
import { BuscarRoutingModule } from './buscar-routing.module.tns';

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    NativeScriptCommonModule, 
    BuscarRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BuscarModule { }
