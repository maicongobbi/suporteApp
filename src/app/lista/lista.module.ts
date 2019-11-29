import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaComponent } from '@src/app/lista/lista.component';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptUISideDrawerModule } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { ListaRoutingModule } from './lista-routing.module';

@NgModule({
  declarations: [ListaComponent],
  imports: [
    CommonModule,
   
  ]
})
export class ListaModule { }
