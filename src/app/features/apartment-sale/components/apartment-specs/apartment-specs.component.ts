import { Component, Input } from '@angular/core';
import { ApartmentSpecsConfig, ProjectStatsConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-apartment-specs',
  standalone: false,
  templateUrl: './apartment-specs.component.html',
  styleUrl: './apartment-specs.component.css'
})
export class ApartmentSpecsComponent {
  /** Barra de 3 columnas: m², ubicación, áreas comunes */
  @Input() stats?: ProjectStatsConfig;
  /** Panel interior: imagen + logo + specs detallados */
  @Input() specs?: ApartmentSpecsConfig;

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.onerror = null;
    img.src = '/images/placeholder.svg';
  }
}
