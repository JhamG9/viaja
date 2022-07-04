import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMasonryModule } from 'ngx-masonry';
import { SharedModule } from '../shared/shared.module';
import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';

@NgModule({
  declarations: [
    BlogsComponent
  ],
  imports: [
    CommonModule,
    NgxMasonryModule,
    SharedModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
