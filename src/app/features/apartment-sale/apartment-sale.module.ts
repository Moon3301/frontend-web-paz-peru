import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApartmentSaleRoutingModule } from './apartment-sale-routing.module';
import { HeroComponent } from './components/hero/hero.component';

import { QuoterComponent } from './components/quoter/quoter.component';
import { AmenitiesComponent } from './components/amenities/amenities.component';
import { ApartmentSpecsComponent } from './components/apartment-specs/apartment-specs.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { VideoComponent } from './components/video/video.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { Lima15Component } from './pages/miraflores/lima15/lima15.component';
import { RivaComponent } from './pages/miraflores/riva/riva.component';
import { MarenaComponent } from './pages/san-miguel/marena/marena.component';
import { SerenaComponent } from './pages/san-miguel/serena/serena.component';
import { RealComponent } from './pages/la-victoria/real/real.component';
import { SaviaComponent } from './pages/pueblo-libre/savia/savia.component';
import { MedinaComponent } from './pages/jesus-maria/medina/medina.component';
import { MatizComponent } from './pages/san-isidro/matiz/matiz.component';
import { FlorenciaComponent } from './pages/pueblo-libre/florencia/florencia.component';
import { EscalaComponent } from './pages/la-victoria/escala/escala.component';
import { PatioLaPazComponent } from './pages/san-miguel/patio-la-paz/patio-la-paz.component';
import { AmalfiComponent } from './pages/san-miguel/amalfi/amalfi.component';
import { CentralComponent } from './pages/miraflores/central/central.component';
import { TallerComponent } from './pages/miraflores/taller/taller.component';

@NgModule({
  declarations: [
    HeroComponent,
    QuoterComponent,
    AmenitiesComponent,
    ApartmentSpecsComponent,
    GalleryComponent,
    VideoComponent,
    UbicationComponent,
    Lima15Component,
    RivaComponent,
    MarenaComponent,
    SerenaComponent,
    RealComponent,
    SaviaComponent,
    MedinaComponent,
    MatizComponent,
    FlorenciaComponent,
    EscalaComponent,
    PatioLaPazComponent,
    AmalfiComponent,
    CentralComponent,
    TallerComponent
  ],
  imports: [
    CommonModule,
    ApartmentSaleRoutingModule
  ]
})
export class ApartmentSaleModule { }
