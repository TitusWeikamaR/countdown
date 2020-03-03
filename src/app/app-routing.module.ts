import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import{SpeakersComponent} from './speakers/speakers.component';
import{NewsComponent} from './news/news.component';
import{HeaderComponent} from './header/header.component';
import {FacilatatorsComponent} from './facilatators/facilatators.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'home', component:HeaderComponent},
  {path:'aboutus', component:AboutUsComponent},
  {path:'speakers', component:FacilatatorsComponent},
  {path:'news', component:NewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
