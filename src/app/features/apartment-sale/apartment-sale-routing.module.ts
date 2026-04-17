import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { DistrictComponent } from './pages/district/district.component';

const routes: Routes = [
  // All projects
  { path: 'all', component: AllProjectsComponent },

  // District pages
  { path: 'miraflores',   component: DistrictComponent, data: { districtSlug: 'miraflores'   } },
  { path: 'san-miguel',   component: DistrictComponent, data: { districtSlug: 'san-miguel'   } },
  { path: 'pueblo-libre', component: DistrictComponent, data: { districtSlug: 'pueblo-libre' } },
  { path: 'la-victoria',  component: DistrictComponent, data: { districtSlug: 'la-victoria'  } },
  { path: 'jesus-maria',  component: DistrictComponent, data: { districtSlug: 'jesus-maria'  } },
  { path: 'san-isidro',   component: DistrictComponent, data: { districtSlug: 'san-isidro'   } },

  // Miraflores projects
  { path: 'miraflores/lima-15',  component: Lima15Component  },
  { path: 'miraflores/riva',     component: RivaComponent    },
  { path: 'miraflores/central',  component: CentralComponent },
  { path: 'miraflores/taller',   component: TallerComponent  },
  // San Miguel
  { path: 'san-miguel/marena',       component: MarenaComponent    },
  { path: 'san-miguel/serena',       component: SerenaComponent    },
  { path: 'san-miguel/patio-la-paz', component: PatioLaPazComponent},
  { path: 'san-miguel/amalfi',       component: AmalfiComponent    },
  // La Victoria
  { path: 'la-victoria/real',   component: RealComponent   },
  { path: 'la-victoria/escala', component: EscalaComponent },
  // Pueblo Libre
  { path: 'pueblo-libre/savia',    component: SaviaComponent    },
  { path: 'pueblo-libre/florencia',component: FlorenciaComponent},
  // Jesús María
  { path: 'jesus-maria/medina', component: MedinaComponent },
  // San Isidro
  { path: 'san-isidro/matiz', component: MatizComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApartmentSaleRoutingModule { }
