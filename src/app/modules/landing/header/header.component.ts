import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sideNavService.openSideNav();
  }

}
