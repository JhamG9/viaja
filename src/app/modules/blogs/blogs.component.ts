import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-blog',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  renderMasonryLayout: boolean = false;

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.renderMasonryLayout = true;
    }, 0);
  }
}
