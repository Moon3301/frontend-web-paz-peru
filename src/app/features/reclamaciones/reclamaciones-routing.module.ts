import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamacionesComponent } from './reclamaciones.component';

const routes: Routes = [
  { path: '', component: ReclamacionesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamacionesRoutingModule { }
