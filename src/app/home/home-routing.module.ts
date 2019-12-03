import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home.component";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ChatComponent } from "./chat/chat.component";
import { BuscarComponent } from "../buscar/buscar.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent,
        children: [
            { path: "chat", component: ChatComponent },
            { path: "chat/:id", component: ChatComponent }
        ]
    },

];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule { }
