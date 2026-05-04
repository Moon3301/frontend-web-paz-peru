import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../../core/core.module';

import { EventsFairsRoutingModule } from './events-fairs-routing.module';
import { EventsFairsComponent } from './events-fairs.component';

@NgModule({
  declarations: [EventsFairsComponent],
  imports: [
    CommonModule,
    EventsFairsRoutingModule,
    CoreModule,
  ],
})
export class EventsFairsModule {}
