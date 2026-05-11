import { Component, Input, OnChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

export interface HistoryStat {
  value: string;
  label: string;
}

export interface HistoryConfig {
  text:       string;
  youtubeId:  string;
  stats:      HistoryStat[];
}

const DEFAULT_CONFIG: HistoryConfig = {
  text: 'Paz Inmobiliaria, con más de 16 años desarrollando proyectos inmobiliarios, ' +
        '+8,700 unidades entregadas que corroboran nuestro compromiso con nuestros clientes ' +
        'y +29 proyectos desarrollados que nos alientan a seguir mejorando la ciudad, ' +
        'nuestro propósito. "Creamos espacios, para disfrutar la vida" es la guía en cada paso que damos.',
  youtubeId: '8QVPyM1CRaY',
  stats: [
    { value: '16 años', label: 'Cumpliendo sueños'          },
    { value: '+8,700',  label: 'Departamentos entregados'   },
    { value: '+29',     label: 'Proyectos desarrollados'    },
  ],
};

@Component({
  selector: 'home-our-history',
  standalone: false,
  templateUrl: './our-history.component.html',
  styleUrl: './our-history.component.css'
})
export class OurHistoryComponent implements OnChanges {

  @Input() config: HistoryConfig = DEFAULT_CONFIG;

  safeYoutubeUrl!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {
    this.updateUrl(DEFAULT_CONFIG.youtubeId);
  }

  ngOnChanges(): void {
    this.updateUrl(this.config?.youtubeId || DEFAULT_CONFIG.youtubeId);
  }

  get text(): string  { return this.config?.text  || DEFAULT_CONFIG.text;  }
  get stats(): HistoryStat[] { return this.config?.stats?.length ? this.config.stats : DEFAULT_CONFIG.stats; }

  private updateUrl(id: string): void {
    this.safeYoutubeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`
    );
  }
}
