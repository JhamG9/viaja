import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BodyComponent } from './body/body.component';
import { OurBlogsComponent } from './our-blogs/our-blogs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PhraseComponent } from './phrase/phrase.component';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    LandingComponent,
    BodyComponent,
    OurBlogsComponent,
    AboutUsComponent,
    PhraseComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
