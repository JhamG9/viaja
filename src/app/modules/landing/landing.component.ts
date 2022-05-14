import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../../services/side-nav.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public sideNavService: SideNavService) { }

  ngOnInit(): void {
  }

  closeSideNav() {
    this.sideNavService.closeSideNav();
  }
}
