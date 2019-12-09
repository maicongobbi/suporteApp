import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, EventData } from 'tns-core-modules/ui/page/page';
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import { android, AndroidApplication } from "tns-core-modules/application";
import * as app from "tns-core-modules/application";


import { platform } from 'os';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import { RadSideDrawerComponent } from 'nativescript-ui-sidedrawer/angular/side-drawer-directives';
import { NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  @ViewChild(RadSideDrawerComponent, { static: false }) public drawerComponent: RadSideDrawerComponent;
  private drawer: RadSideDrawer;

  constructor(
    private routerExtensions: RouterExtensions,
    private _changeDetectionRef: ChangeDetectorRef,
    private page: Page) {
    this.page.actionBarHidden = false;
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();
  }

  onProfileButtonTap() {
    // Navigate to profile page here
    //alert("Navigate to profile page");
    console.log('navegando para home********');
    let navigationsExtras: NavigationExtras = {
      queryParams: {
        id: 20//this.items[event.index].id
      }
    }
    console.log(navigationsExtras);    
    //  console.log("soli ", event.sol);
    //  console.log("soli2222 ", event);

    this.routerExtensions.navigate([
      'chat'
      
    ])   
    return ;   
  
  }

  onDrawerButtonTap(): void {
    console.log('btn direitaaaaaaaaaaaaaa');    
    this.drawer.showDrawer()
  }

  public openDrawer() {
    console.log('open');

    this.drawer.showDrawer();
  }

  public onCloseDrawerTap() {
    console.log('close');

    this.drawer.closeDrawer();
  }
}
