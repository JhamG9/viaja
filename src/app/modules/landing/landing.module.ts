import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { OurBlogsComponent } from './our-blogs/our-blogs.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PhraseComponent } from './phrase/phrase.component';
import { FooterComponent } from './footer/footer.component';
import { OptionsMobileComponent } from './options-mobile/options-mobile.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LandingRoutingModule } from './landing-routing.module';

@NgModule({
  declarations: [
    LandingComponent,
    HeaderComponent,
    BodyComponent,
    OurBlogsComponent,
    AboutUsComponent,
    PhraseComponent,
    FooterComponent,
    OptionsMobileComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    LandingRoutingModule
  ]
})
export class LandingModule { }
