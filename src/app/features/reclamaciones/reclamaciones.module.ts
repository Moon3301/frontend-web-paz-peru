import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ReclamacionesRoutingModule } from './reclamaciones-routing.module';
import { ReclamacionesComponent } from './reclamaciones.component';

@NgModule({
  declarations: [
    ReclamacionesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ReclamacionesRoutingModule,
  ]
})
export class ReclamacionesModule { }
