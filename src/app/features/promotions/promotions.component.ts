import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { Promotion } from '../../core/models/content.models';

@Component({
  selector: 'app-promotions',
  standalone: false,
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css',
})
export class PromotionsComponent implements OnInit {
  featuredPromos: Promotion[] = [];
  otherPromos: Promotion[] = [];
  loading = true;

  /** Hero banner de la página de promociones (valores por defecto = imágenes estáticas) */
  heroDesktop = '/images/promotions/banner-hero-desk.jpg';
  heroMobile  = '/images/promotions/banner-hero-mb.jpg';

  constructor(private readonly content: ContentService) { }

  ngOnInit(): void {
    // Cargar banners hero desde CMS settings
    this.content.getSettings().subscribe({
      next: (s) => {
        if (s['promos_hero_desktop']) this.heroDesktop = s['promos_hero_desktop'];
        if (s['promos_hero_mobile'])  this.heroMobile  = s['promos_hero_mobile'];
      },
      error: () => { /* mantener fallback */ },
    });

    this.content.getPromotions().subscribe({
      next: (promos) => {
        this.featuredPromos = promos.filter((p) => p.isFeatured);
        this.otherPromos = promos.filter((p) => !p.isFeatured);
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }
}
