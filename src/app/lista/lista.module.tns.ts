import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ListaComponent } from '@src/app/lista/lista.component';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    NativeScriptCommonModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListaModule { }
