import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';


@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PromotionsRoutingModule
  ]
})
export class PromotionsModule { }
