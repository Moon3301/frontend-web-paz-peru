import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface HistoryStat {
  value: string;
  label: string;
}

@Component({
  selector: 'home-our-history',
  standalone: false,
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.css'
})
export class OurHistoryComponent {

  safeYoutubeUrl: SafeResourceUrl;

  stats: HistoryStat[] = [
    { value: '16 años',  label: 'Cumpliendo sueños' },
    { value: '+8,700',   label: 'Departamentos entregados' },
    { value: '+29',      label: 'Proyectos desarrollados' }
  ];

  constructor(private sanitizer: DomSanitizer) {
    // Actualizar el ID del video de YouTube cuando se confirme
    const videoId = '8QVPyM1CRaY';
    this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    );
  }
}
