import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-main-layout',
  standalone: false,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.css'
})
export class MainLayoutComponent implements OnInit {

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    // Carga la configuración SEO global desde cms_settings y la aplica al SeoService.
    // Esto incluye title template, descripción/imagen por defecto, URL del sitio, etc.
    this.content.getSettings().subscribe({
      next: (settings) => this.seo.setDefaults(settings),
    });
  }
}
