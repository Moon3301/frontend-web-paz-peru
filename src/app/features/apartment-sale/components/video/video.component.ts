import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-video',
  standalone: false,
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent implements OnInit {
  @Input() config!: VideoConfig;

  activeTabIndex = 0;
  safeUrls: (SafeResourceUrl | null)[] = [];
  isModalOpen = false;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.config.tabs?.length) {
      this.safeUrls = this.config.tabs.map(tab =>
        this.isValidUrl(tab.url)
          ? this.sanitizer.bypassSecurityTrustResourceUrl(tab.url)
          : null
      );
    } else {
      this.safeUrls = [
        this.isValidUrl(this.config.url)
          ? this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url)
          : null
      ];
    }
  }

  get activeUrl(): SafeResourceUrl | null {
    return this.safeUrls[this.activeTabIndex] ?? null;
  }

  get activeRawUrl(): string {
    if (this.config.tabs?.length) {
      return this.config.tabs[this.activeTabIndex]?.url ?? this.config.url;
    }
    return this.config.url;
  }

  get hasValidUrl(): boolean {
    return this.safeUrls.some(u => u !== null);
  }

  /** Si hay fallbackImage, el video se abre en modal; si no, se muestra inline */
  get useModalMode(): boolean {
    return !!this.config.fallbackImage;
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  private isValidUrl(url: string): boolean {
    return url.startsWith('https://') || url.startsWith('http://');
  }
}
