import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {

  openedSideNav: boolean = true;

  constructor() {
  }

  openSideNav() {
    this.openedSideNav = true;
  }

  closeSideNav() {
    this.openedSideNav = false;
  }
}
