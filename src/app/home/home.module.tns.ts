import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ListaModule } from "../lista/lista.module.tns";
import { ListaComponent } from "../lista/lista.component";

@NgModule({
    imports: [
        HomeRoutingModule,
        ListaModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
    ],
    declarations: [
        HomeComponent, ListaComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
