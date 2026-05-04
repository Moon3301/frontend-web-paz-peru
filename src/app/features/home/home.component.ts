import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';

@Component({
  selector: 'home-page',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  /** URL del banner promocional del home (fallback a la imagen estática) */
  homeBanner = '/images/home/home_m.png';

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (settings) => {
        if (settings['home_promo_banner']) {
          this.homeBanner = settings['home_promo_banner'];
        }
      },
      error: () => { /* mantener fallback */ },
    });
  }
}

