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

  /** Banners desde CMS settings (valores por defecto = imágenes estáticas) */
  heroDesktop   = '/images/promotions/banner-hero-desk.jpg';
  heroMobile    = '/images/promotions/banner-hero-mb.jpg';
  promoMainBanner = '/images/home/home_d.png';

  clienteAmigoImg          = '/images/promotions/cliente-amigo.jpg';
  clienteAmigoNote         = '';
  clienteAmigoBlocks: { title: string; text: string }[] = [];
  clienteAmigoDownloadLink = '';

  constructor(private readonly content: ContentService) { }

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        if (s['promos_hero_desktop'])          this.heroDesktop             = s['promos_hero_desktop'];
        if (s['promos_hero_mobile'])           this.heroMobile              = s['promos_hero_mobile'];
        if (s['promos_main_banner'])           this.promoMainBanner         = s['promos_main_banner'];
        if (s['promo_cliente_amigo_img'])           this.clienteAmigoImg          = s['promo_cliente_amigo_img'];
        if (s['promo_cliente_amigo_note'])          this.clienteAmigoNote         = s['promo_cliente_amigo_note'];
        if (s['promo_cliente_amigo_download_link']) this.clienteAmigoDownloadLink = s['promo_cliente_amigo_download_link'];
        if (s['promo_cliente_amigo_blocks']) {
          try { this.clienteAmigoBlocks = JSON.parse(s['promo_cliente_amigo_blocks']); } catch { /* mantener vacío */ }
        }
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
