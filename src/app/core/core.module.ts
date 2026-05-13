import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WebpPipe } from './pipes/webp.pipe';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { SlugToLabelPipe } from './pipes/slug-to-label.pipe';
import { ContentService } from './services/content.service';
import { SeoService } from './services/seo.service';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  declarations: [WebpPipe, AssetUrlPipe, SlugToLabelPipe, PageLoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [WebpPipe, AssetUrlPipe, SlugToLabelPipe, PageLoaderComponent],
  providers: [ContentService, SeoService],
})
export class CoreModule {}
