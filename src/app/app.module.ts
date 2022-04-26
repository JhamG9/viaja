import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './modules/landing/landing.component';
import { HeaderComponent } from './modules/landing/header/header.component';
import { BodyComponent } from './modules/landing/body/body.component';
import { OurBlogsComponent } from './modules/landing/our-blogs/our-blogs.component';
import { AboutUsComponent } from './modules/landing/about-us/about-us.component';
import { PhraseComponent } from './modules/landing/phrase/phrase.component';
import { FooterComponent } from './modules/landing/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HeaderComponent,
    BodyComponent,
    OurBlogsComponent,
    AboutUsComponent,
    PhraseComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
