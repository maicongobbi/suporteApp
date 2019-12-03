import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular/side-drawer-directives";
import { NativeScriptCommonModule } from "nativescript-angular/common";
import { ListaModule } from "./lista/lista.module.tns";
import { ListaComponent } from "./lista/lista.component";
import { TabsComponent } from "./tabs/tabs.component";
import { ChatModule } from "./chat/chat.module.tns";
import { ChatComponent } from "./chat/chat.component";
import { Observable } from "tns-core-modules/ui/page/page";

@NgModule({
    imports: [
        HomeRoutingModule,
        ListaModule,
        NativeScriptCommonModule,
        NativeScriptUISideDrawerModule,
        ChatModule,
        
    ],
    declarations: [
        HomeComponent, ListaComponent, TabsComponent, ChatComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class HomeModule { }
