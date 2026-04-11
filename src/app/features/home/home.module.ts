import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeroComponent } from './components/hero/hero.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    UbicationComponent,
    ProjectsComponent,
    OurHistoryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
