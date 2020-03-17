import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { ProgramsComponent } from './programs/programs.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { NewsComponent } from './news/news.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FacilatatorsComponent } from './facilatators/facilatators.component';
import { TicketsComponent } from './tickets/tickets.component';
import { BulletinComponent } from './bulletin/bulletin.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    SponsorsComponent,
    ProgramsComponent,
    SpeakersComponent,
    NewsComponent,
    NavigationComponent,
    FacilatatorsComponent,
    TicketsComponent,
    BulletinComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
