import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { ChatModule } from "./chat.module.tns";
import { ChatComponent } from "./chat.component";


const routes: Routes = [
    { path: "", component: ChatComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChatRoutingModule { }