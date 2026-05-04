import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

import { PromotionsRoutingModule } from './promotions-routing.module';
import { PromotionsComponent } from './promotions.component';

@NgModule({
  declarations: [PromotionsComponent],
  imports: [
    CommonModule,
    RouterModule,
    PromotionsRoutingModule,
    CoreModule,
  ],
})
export class PromotionsModule {}
