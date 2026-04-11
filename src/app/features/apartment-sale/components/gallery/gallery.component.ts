import { Component, Input } from '@angular/core';
import { GalleryConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-gallery',
  standalone: false,
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  @Input() config!: GalleryConfig;

  activeTabIndex = 0;
  activeImageIndex = 0;

  selectTab(index: number) {
    this.activeTabIndex = index;
    this.activeImageIndex = 0;
  }

  prevImage() {
    const images = this.activeTab?.images ?? [];
    this.activeImageIndex =
      (this.activeImageIndex - 1 + images.length) % images.length;
  }

  nextImage() {
    const images = this.activeTab?.images ?? [];
    this.activeImageIndex = (this.activeImageIndex + 1) % images.length;
  }

  get activeTab() {
    return this.config?.tabs?.[this.activeTabIndex];
  }

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = '/images/placeholder.svg';
  }
}
