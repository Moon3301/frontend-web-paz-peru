import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ApartmentSaleRoutingModule } from './apartment-sale-routing.module';

// Shared components
import { HeroComponent } from './components/hero/hero.component';
import { QuoterComponent } from './components/quoter/quoter.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { ApartmentSpecsComponent } from './components/apartment-specs/apartment-specs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/video/video.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { ProjectPageComponent } from './components/project-page/project-page.component';
import { ProjectsGridComponent } from './components/projects-grid/projects-grid.component';

// Page components
import { Lima15Component } from './pages/miraflores/lima15/lima15.component';
import { RivaComponent } from './pages/miraflores/riva/riva.component';
import { CentralComponent } from './pages/miraflores/central/central.component';
import { TallerComponent } from './pages/miraflores/taller/taller.component';
import { MarenaComponent } from './pages/san-miguel/marena/marena.component';
import { SerenaComponent } from './pages/san-miguel/serena/serena.component';
import { PatioLaPazComponent } from './pages/san-miguel/patio-la-paz/patio-la-paz.component';
import { AmalfiComponent } from './pages/san-miguel/amalfi/amalfi.component';
import { RealComponent } from './pages/la-victoria/real/real.component';
import { EscalaComponent } from './pages/la-victoria/escala/escala.component';
import { SaviaComponent } from './pages/pueblo-libre/savia/savia.component';
import { FlorenciaComponent } from './pages/pueblo-libre/florencia/florencia.component';
import { MedinaComponent } from './pages/jesus-maria/medina/medina.component';
import { MatizComponent } from './pages/san-isidro/matiz/matiz.component';
import { VirtualTourComponent } from './components/virtual-tour/virtual-tour.component';
import { VideoModalComponent } from './components/video-modal/video-modal.component';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { DistrictComponent } from './pages/district/district.component';

@NgModule({
  declarations: [
    // Shared
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
    // Pages
    Lima15Component,
    RivaComponent,
    CentralComponent,
    TallerComponent,
    MarenaComponent,
    SerenaComponent,
    PatioLaPazComponent,
    AmalfiComponent,
    RealComponent,
    EscalaComponent,
    SaviaComponent,
    FlorenciaComponent,
    MedinaComponent,
    MatizComponent,
    VirtualTourComponent,
    AllProjectsComponent,
    DistrictComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ApartmentSaleRoutingModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ApartmentSaleModule { }
