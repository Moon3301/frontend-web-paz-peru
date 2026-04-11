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

  get hasValidUrl(): boolean {
    return this.safeUrls.some(u => u !== null);
  }

  selectTab(index: number) {
    this.activeTabIndex = index;
  }

  private isValidUrl(url: string): boolean {
    return url.startsWith('https://') || url.startsWith('http://');
  }
}
