import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { BuscarComponent } from '@src/app/buscar/buscar.component';

@NgModule({
  declarations: [BuscarComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class BuscarModule { }
