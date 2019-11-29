import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ListaComponent } from '@src/app/lista/lista.component';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { ListaRoutingModule } from './lista-routing.module';

@NgModule({
  declarations: [],
  imports: [
    NativeScriptCommonModule,
    NativeScriptUISideDrawerModule,
    ListaRoutingModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ListaModule { }
