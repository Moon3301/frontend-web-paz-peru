import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { HeroSlide, DEFAULT_SLIDES } from './components/hero/hero.component';
import { HistoryConfig }  from './components/our-history/our-history.component';
import { UbicationConfig } from './components/ubication/ubication.component';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  /** Banner promocional entre hero y proyectos */
  homeBanner = '/images/home/home_m.png';

  /** Slides del hero — empieza con los defaults para que el vídeo se muestre
   *  inmediatamente; se reemplaza cuando el CMS carga datos distintos. */
  heroSlides: HeroSlide[] = DEFAULT_SLIDES;

  /** Config de Nuestra Historia */
  historyConfig: HistoryConfig | null = null;

  /** Config de Ubícanos */
  ubicationConfig: UbicationConfig | null = null;

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        // Banner home
        if (s['home_promo_banner']) this.homeBanner = s['home_promo_banner'];

        // Hero slides
        if (s['home_hero_slides']) {
          try { this.heroSlides = JSON.parse(s['home_hero_slides']); } catch { /* usa default */ }
        }

        // Historia
        if (s['home_history_text'] || s['home_history_youtube_id'] || s['home_history_stats']) {
          this.historyConfig = {
            text:      s['home_history_text']       ?? '',
            youtubeId: s['home_history_youtube_id'] ?? '8QVPyM1CRaY',
            stats:     s['home_history_stats']
                         ? this.parseJson(s['home_history_stats'], [])
                         : [],
          };
        }

        // Ubícanos
        if (s['home_ubication_subtitle'] || s['home_ubication_map']) {
          this.ubicationConfig = {
            subtitle: s['home_ubication_subtitle'] ?? '',
            mapImage: s['home_ubication_map']      ?? '/images/ubication/mapa.webp',
          };
        }
      },
      error: () => { /* mantener fallbacks */ },
    });
  }

  private parseJson<T>(value: string, fallback: T): T {
    try { return JSON.parse(value) as T; } catch { return fallback; }
  }
}
