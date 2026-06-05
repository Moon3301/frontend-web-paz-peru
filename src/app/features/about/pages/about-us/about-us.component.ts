import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { SeoService } from '../../../../core/services/seo.service';

interface AboutStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about-us',
  standalone: false,
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent implements OnInit {

  stats: AboutStat[] = [
    { value: '15 años',  label: 'Cumpliendo sueños'      },
    { value: '+ 8,600',  label: 'Unidades entregadas'     },
    { value: '+ 25',     label: 'Proyectos desarrollados' },
  ];

  tagline       = 'Creamos espacios para disfrutar la vida';
  respaldoTitle = 'Nuestro respaldo';
  respaldoParas: string[] = [];

  private readonly DEFAULT_RESPALDO =
    'En el 2008, 2 de los más importantes grupos inmobiliarios del Perú (Grupo Centenario) y Chile (Paz Corp.) se unieron para crear una empresa que desarrolle proyectos inmobiliarios que trasciendan en el país.\n\nEse año marcó un antes y un después para miles de familias que hoy ven realizado sus sueños a través del trabajo de nuestro gran equipo de colaboradores.\n\nEl respaldo que nos dan estas 2 grandes empresas, nos permiten desarrollar proyectos de una gran calidad que van acorde a la exigencia de nuestros clientes y que nos impulsan a seguir innovando día a día en el mundo inmobiliario.';

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.respaldoParas = this.splitParas(this.DEFAULT_RESPALDO);

    this.content.getSettings().subscribe({
      next: (s) => {
        this.seo.setPage({
          title:       s['seo_page_about_title']       || 'Nosotros',
          description: s['seo_page_about_description'] || 'Conoce la historia de Paz Inmobiliaria, más de 16 años desarrollando proyectos residenciales en Lima con más de 8,700 departamentos entregados.',
          keywords:    s['seo_page_about_keywords']    || 'quiénes somos Paz Inmobiliaria, historia inmobiliaria Lima, empresa constructora Lima',
        });

        if (s['about_stats']) {
          try { this.stats = JSON.parse(s['about_stats']); } catch { /* keep defaults */ }
        }
        if (s['about_tagline'])        this.tagline       = s['about_tagline'];
        if (s['about_respaldo_title']) this.respaldoTitle  = s['about_respaldo_title'];
        if (s['about_respaldo_text'])  this.respaldoParas  = this.splitParas(s['about_respaldo_text']);
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

  private splitParas(text: string): string[] {
    return text.split(/\n\n+/).map(p => p.trim()).filter(p => p.length > 0);
  }
}
