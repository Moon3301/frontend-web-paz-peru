import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CoreModule } from '../../core/core.module';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail.component';

@NgModule({
  declarations: [BlogComponent, BlogDetailComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BlogRoutingModule,
    CoreModule,
  ],
})
export class BlogModule {}
