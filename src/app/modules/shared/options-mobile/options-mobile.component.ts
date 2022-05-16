import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-options-mobile',
  templateUrl: './options-mobile.component.html',
  styleUrls: ['./options-mobile.component.scss']
})
export class OptionsMobileComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  redirectTo(url: string) {

    switch (url) {
      case 'travel':
        // redirect to travel
        break;

      case 'contactme':
        // redirect to contact me
        break;

      default:
        // Dont isset this option
        break;
    }
    this.sideNavService.closeSideNav();
  }

}
