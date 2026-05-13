import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ContentService } from '../../../../core/services/content.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'app-district',
  standalone: false,
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {
  districtLabel = '';
  mapImage = '';
  projects: ProjectSummary[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly contentService: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['districtSlug'] as string;

    forkJoin({
      districts: this.contentService.getDistricts(),
      projects:  this.contentService.getProjects(),
    }).subscribe({
      next: ({ districts, projects }) => {
        const district = districts.find(d => d.slug === slug);
        if (district) {
          this.districtLabel = district.label;
          this.mapImage = district.mapImage ?? '';
        }
        this.projects = projects.filter(p => p.district === slug);

        // SEO dinámico basado en el distrito
        const label = district?.label || slug;
        this.seo.setPage({
          title:       `Departamentos en ${label}`,
          description: `Conoce los proyectos de Paz Inmobiliaria en ${label}. Departamentos modernos con los mejores acabados en Lima.`,
          keywords:    `departamentos ${label}, proyectos inmobiliarios ${label}, Paz Inmobiliaria ${label}`,
        });
      },
      error: (err) => {
        console.error('Error loading district data', err);
        this.seo.setPage({
          title:       'Proyectos por distrito',
          description: 'Explora los proyectos de Paz Inmobiliaria por distrito en Lima.',
          keywords:    'departamentos Lima, proyectos inmobiliarios Lima, Paz Inmobiliaria',
        });
      },
    });
  }
}
