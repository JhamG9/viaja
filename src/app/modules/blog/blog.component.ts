import { Component, OnInit } from '@angular/core';
import { NgxMasonryOptions } from 'ngx-masonry';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  public myOptions: NgxMasonryOptions = {
    fitWidth: true,    
    percentPosition: true,
    gutter: 10
  };

  masonryItems = [
    {
      title: 'item 1',
      img: 'https://cdn.pixabay.com/photo/2019/05/15/19/13/flower-4205744_960_720.jpg'
    },
    {
      title: 'item 2',
      img: 'https://cdn.pixabay.com/photo/2021/07/27/13/40/woman-6496881_960_720.jpg'
    },
    {
      title: 'item 3',
      img: 'https://cdn.pixabay.com/photo/2022/05/21/21/04/monkeys-7212290_960_720.jpg'
    },
    {
      title: 'item 4',
      img: 'https://cdn.pixabay.com/photo/2022/05/17/12/11/wheat-7202481_960_720.jpg'
    },
    {
      title: 'item 5',
      img: 'https://cdn.pixabay.com/photo/2022/05/22/19/04/pregnancy-7214373_960_720.jpg'
    },
    {
      title: 'item 6',
      img: 'https://cdn.pixabay.com/photo/2022/03/23/17/16/waterfall-7087571_960_720.jpg'
    },
    {
      title: 'item 7',
      img: 'https://cdn.pixabay.com/photo/2022/05/11/07/10/porridge-7188630_960_720.jpg'
    },
    {
      title: 'item 8',
  img: 'https://cdn.pixabay.com/photo/2022/05/16/01/15/road-7199274_960_720.jpg'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
