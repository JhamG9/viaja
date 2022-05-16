import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  openedSideNav: boolean = false;

  constructor() {
  }

  openSideNav() {
    this.openedSideNav = true;
  }

  closeSideNav() {
    this.openedSideNav = false;
  }
}
