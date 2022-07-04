import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manaure',
  templateUrl: './manaure.component.html',
  styleUrls: ['./manaure.component.scss']
})
export class ManaureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  scrollTo(element: HTMLElement){
    element.scrollIntoView({behavior: 'smooth'});
  }

}
