import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';
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
  homeBanner: string | null = null;

  /** Slides del hero — empieza con los defaults para que el vídeo se muestre
   *  inmediatamente; se reemplaza cuando el CMS carga datos distintos. */
  heroSlides: HeroSlide[] = DEFAULT_SLIDES;

  /** Config de Nuestra Historia */
  historyConfig: HistoryConfig | null = null;

  /** Config de Ubícanos */
  ubicationConfig: UbicationConfig | null = null;

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        // SEO para la página de inicio
        this.seo.setPage({
          title:       s['seo_page_home_title']       || 'Inicio',
          description: s['seo_page_home_description'] || undefined,
          keywords:    s['seo_page_home_keywords']    || undefined,
        });
        // Banner home
        this.homeBanner = s['home_promo_banner'] || null;

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
