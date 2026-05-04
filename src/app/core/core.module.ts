import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { WebpPipe } from './pipes/webp.pipe';
import { AssetUrlPipe } from './pipes/asset-url.pipe';
import { ContentService } from './services/content.service';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';

@NgModule({
  declarations: [WebpPipe, AssetUrlPipe, PageLoaderComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [WebpPipe, AssetUrlPipe, PageLoaderComponent],
  providers: [ContentService],
})
export class CoreModule {}
