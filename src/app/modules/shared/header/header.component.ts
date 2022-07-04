import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SideNavService } from '../../../services/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sideNavService: SideNavService,
    private route: Router) { }

  ngOnInit(): void {
  }

  openSideNav() {
    this.sideNavService.openSideNav();
  }

  redirecTo(path: string) {
    this.route.navigate([path]);
  }

}
