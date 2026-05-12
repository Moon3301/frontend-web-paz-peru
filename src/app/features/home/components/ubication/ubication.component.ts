import { Component, Input } from '@angular/core';

export interface UbicationConfig {
  subtitle: string;
  mapImage: string;
}

const DEFAULT: UbicationConfig = {
  subtitle: 'Los proyectos de Paz Inmobiliaria están en los distritos de Miraflores, Pueblo Libre, San Miguel y más.',
  mapImage: '/images/ubication/mapa.webp',
};

@Component({
  selector: 'home-ubication',
  standalone: false,
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css'
})
export class UbicationComponent {

  @Input() config: UbicationConfig = DEFAULT;

  get subtitle(): string { return this.config?.subtitle || DEFAULT.subtitle; }
  get mapImage(): string { return this.config?.mapImage || DEFAULT.mapImage; }
}
