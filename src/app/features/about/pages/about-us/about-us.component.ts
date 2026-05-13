import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { SeoService } from '../../../../core/services/seo.service';

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        this.seo.setPage({
          title:       s['seo_page_about_title']       || 'Nosotros',
          description: s['seo_page_about_description'] || 'Conoce la historia de Paz Inmobiliaria, más de 16 años desarrollando proyectos residenciales en Lima con más de 8,700 departamentos entregados.',
          keywords:    s['seo_page_about_keywords']    || 'quiénes somos Paz Inmobiliaria, historia inmobiliaria Lima, empresa constructora Lima',
        });
      },
      error: () => {
        this.seo.setPage({
          title:       'Nosotros',
          description: 'Conoce la historia de Paz Inmobiliaria, más de 16 años desarrollando proyectos residenciales en Lima con más de 8,700 departamentos entregados.',
          keywords:    'quiénes somos Paz Inmobiliaria, historia inmobiliaria Lima, empresa constructora Lima',
        });
      },
    });
  }
}
