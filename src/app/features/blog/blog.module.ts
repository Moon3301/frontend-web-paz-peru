import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';


@NgModule({
  declarations: [BlogComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    BlogRoutingModule
  ]
})
export class BlogModule { }
