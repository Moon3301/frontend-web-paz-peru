import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { ContentService } from '../../../../core/services/content.service';
import { SeoService } from '../../../../core/services/seo.service';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'app-all-projects',
  standalone: false,
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit {
  projects: ProjectSummary[] = [];

  constructor(
    private readonly contentService: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    forkJoin({
      settings: this.contentService.getSettings(),
      projects: this.contentService.getProjects(),
    }).subscribe({
      next: ({ settings, projects }) => {
        this.projects = projects;
        this.seo.setPage({
          title:       settings['seo_page_projects_title']       || 'Proyectos',
          description: settings['seo_page_projects_description'] || 'Descubre todos los proyectos inmobiliarios de Paz Inmobiliaria en Lima: Miraflores, San Miguel, Pueblo Libre, La Victoria y más.',
          keywords:    settings['seo_page_projects_keywords']    || 'proyectos inmobiliarios Lima, departamentos en venta Lima, Paz Inmobiliaria proyectos',
        });
      },
      error: (err) => {
        console.error('Error loading projects', err);
        this.seo.setPage({
          title:       'Proyectos',
          description: 'Descubre todos los proyectos inmobiliarios de Paz Inmobiliaria en Lima: Miraflores, San Miguel, Pueblo Libre, La Victoria y más.',
          keywords:    'proyectos inmobiliarios Lima, departamentos en venta Lima, Paz Inmobiliaria proyectos',
        });
      },
    });
  }
}
