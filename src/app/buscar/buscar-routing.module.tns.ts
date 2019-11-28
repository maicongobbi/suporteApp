import { NgModule } from '@angular/core';
import { NativeScriptRouterModule } from 'nativescript-angular/router';
import { Routes } from '@angular/router';
import { BuscarComponent } from './buscar.component';


const routes: Routes =[{
  path: '',
  component: BuscarComponent
}]
@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class BuscarRoutingModule { }
