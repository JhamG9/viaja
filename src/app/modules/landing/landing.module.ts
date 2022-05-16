import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { BodyComponent } from './body/body.component';
import { OurBlogsComponent } from './our-blogs/our-blogs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PhraseComponent } from './phrase/phrase.component';
import { FooterComponent } from './footer/footer.component';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingComponent,
    BodyComponent,
    OurBlogsComponent,
    AboutUsComponent,
    PhraseComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
