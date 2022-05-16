import { Component } from '@angular/core';
import { SideNavService } from './services/side-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'viaja';

  constructor(public sideNavService: SideNavService) { }


  closeSideNav() {
    this.sideNavService.closeSideNav();
  }
}
