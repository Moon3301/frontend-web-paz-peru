import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProjectsComponent } from './pages/all-projects/all-projects.component';
import { DistrictComponent } from './pages/district/district.component';
import { ProjectDynamicComponent } from './pages/project-dynamic/project-dynamic.component';
import { ProjectResolver } from './resolvers/project.resolver';

const routes: Routes = [
  { path: 'all', component: AllProjectsComponent },
  { path: 'miraflores',   component: DistrictComponent, data: { districtSlug: 'miraflores'   } },
  { path: 'san-miguel',   component: DistrictComponent, data: { districtSlug: 'san-miguel'   } },
  { path: 'pueblo-libre', component: DistrictComponent, data: { districtSlug: 'pueblo-libre' } },
  { path: 'la-victoria',  component: DistrictComponent, data: { districtSlug: 'la-victoria'  } },
  { path: 'jesus-maria',  component: DistrictComponent, data: { districtSlug: 'jesus-maria'  } },
  { path: 'san-isidro',   component: DistrictComponent, data: { districtSlug: 'san-isidro'   } },

  {
    path: ':districtSlug/:projectSlug',
    component: ProjectDynamicComponent,
    resolve: { project: ProjectResolver },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ApartmentSaleRoutingModule {}
