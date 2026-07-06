import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';
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

  /** Banners desde CMS settings — null significa sin imagen configurada */
  heroDesktop: string | null     = null;
  heroMobile: string | null      = null;
  promoMainBanner: string | null = null;

  clienteAmigoImg: string | null = null;
  clienteAmigoNote         = '';
  clienteAmigoBlocks: { title: string; text: string }[] = [];
  clienteAmigoDownloadLink = '';

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        // SEO
        this.seo.setPage({
          title:       s['seo_page_promotions_title']       || 'Promociones',
          description: s['seo_page_promotions_description'] || 'Descubre las mejores promociones y ofertas en departamentos de Paz Inmobiliaria en Lima.',
          keywords:    s['seo_page_promotions_keywords']    || 'promociones departamentos Lima, ofertas inmobiliarias, descuentos Paz Inmobiliaria',
        });
        this.heroDesktop     = s['promos_hero_desktop']    || null;
        this.heroMobile      = s['promos_hero_mobile']     || null;
        this.promoMainBanner = s['promos_main_banner']     || null;
        this.clienteAmigoImg = s['promo_cliente_amigo_img'] || null;
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
