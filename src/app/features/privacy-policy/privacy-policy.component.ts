import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-privacy-policy',
  standalone: false,
  templateUrl: './privacy-policy.component.html',
  styleUrl: './privacy-policy.component.css',
})
export class PrivacyPolicyComponent implements OnInit {
  content = '';
  loading = true;

  constructor(
    private readonly contentService: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {

    window.scrollTo({ top: 0, behavior: 'smooth' });

    this.seo.setPage({
      title:       'Política de Privacidad',
      description: 'Consulta la política de privacidad y protección de datos personales de Paz Inmobiliaria.',
      noIndex:     true,
    });

    this.contentService.getSettings().subscribe({
      next: (s) => {
        this.content = s['privacy_policy'] ?? '<p>Contenido no disponible.</p>';
        this.loading = false;
      },
      error: () => {
        this.content = '<p>No se pudo cargar la política de privacidad.</p>';
        this.loading = false;
      },
    });
  }
}
