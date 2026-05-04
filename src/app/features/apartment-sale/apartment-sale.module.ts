import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApartmentSaleRoutingModule } from './apartment-sale-routing.module';
import { CoreModule } from '../../core/core.module';

import { ProjectDynamicComponent } from './pages/project-dynamic/project-dynamic.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { DistrictComponent } from './pages/district/district.component';

import { HeroComponent } from './components/hero/hero.component';
import { QuoterComponent } from './components/quoter/quoter.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { ApartmentSpecsComponent } from './components/apartment-specs/apartment-specs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/video/video.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';
import { VirtualTourComponent } from './components/virtual-tour/virtual-tour.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { ExecutiveBannerComponent } from './components/executive-banner/executive-banner.component';
import { PromoBannerComponent } from './components/promo-banner/promo-banner.component';

@NgModule({
  declarations: [
    ProjectDynamicComponent,
    AllProjectsComponent,
    DistrictComponent,
    HeroComponent,
    QuoterComponent,
    AmenitiesComponent,
    ApartmentSpecsComponent,
    GalleryComponent,
    VideoComponent,
    UbicationComponent,
    ProjectPageComponent,
    VideoModalComponent,
    ProjectsGridComponent,
    VirtualTourComponent,
    ExecutiveBannerComponent,
    PromoBannerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ApartmentSaleRoutingModule,
    CoreModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApartmentSaleModule { }
