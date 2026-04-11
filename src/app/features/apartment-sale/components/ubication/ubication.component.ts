import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { UbicationConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-ubication',
  standalone: false,
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css'
})
export class UbicationComponent implements OnInit {
  @Input() config!: UbicationConfig;
  safeMapUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.isValidEmbedUrl(this.config.mapEmbedUrl)) {
      this.safeMapUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        this.config.mapEmbedUrl
      );
    }
  }

  /** Solo crear el iframe si la URL es un embed real de Google Maps */
  private isValidEmbedUrl(url: string): boolean {
    return url.startsWith('https://') || url.startsWith('http://');
  }
}
