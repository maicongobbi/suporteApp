import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat-routing.module.tns';
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

@NgModule({
  declarations: [ChatComponent],
  imports: [
    NativeScriptCommonModule,
    ChatRoutingModule,
    NativeScriptUIListViewModule
  ],
  schemas: [NO_ERRORS_SCHEMA]
})
export class ChatModule { }
