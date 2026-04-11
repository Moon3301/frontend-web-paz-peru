import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsDeliveredComponent } from './pages/projects-delivered/projects-delivered.component';

const routes: Routes = [
  { path: 'nosotros', component: AboutUsComponent },
  { path: 'proyectos-entregados', component: ProjectsDeliveredComponent },
  { path: '', redirectTo: 'nosotros', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
