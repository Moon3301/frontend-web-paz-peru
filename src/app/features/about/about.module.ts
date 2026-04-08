import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsDeliveredComponent } from './pages/projects-delivered/projects-delivered.component';


@NgModule({
  declarations: [
    AboutUsComponent,
    ProjectsDeliveredComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
