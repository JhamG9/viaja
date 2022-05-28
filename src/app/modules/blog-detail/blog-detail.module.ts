import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogDetailComponent } from './blog-detail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    BlogDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class BlogDetailModule { }
