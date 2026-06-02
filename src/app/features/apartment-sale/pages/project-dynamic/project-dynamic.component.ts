import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProjectDetail } from '../../../../core/models/content.models';
import { SeoService } from '../../../../core/services/seo.service';
import { ProjectConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-project-dynamic',
  standalone: false,
  templateUrl: './project-dynamic.component.html',
  styleUrl: './project-dynamic.component.css',
})
export class ProjectDynamicComponent implements OnInit, OnDestroy {
  config: ProjectConfig | null = null;
  private routeSub?: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly seo: SeoService,
  ) { }

  ngOnInit(): void {
    this.routeSub = this.route.data.subscribe((data) => {
      const project: ProjectDetail = data['project'];
      if (project) {
        this.config = this.mapToProjectConfig(project);
        this.seo.setProject(project);
      } else {
        this.config = null;
      }
      window.scrollTo(0, 0);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private mapToProjectConfig(project: ProjectDetail): ProjectConfig {
    const s = project.sections;
    return {
      hero: s.hero as any,
      promoBanner: (s as any).promo_banner ?? null,
      stats: (s.specs as any)?.stats,
      specs: (s.specs as any)?.specs,
      amenities: s.amenities as any,
      // Si existe la sección quoter usa su config; si no, cae al sperantProjectId del proyecto.
      // Así el cotizador aparece automáticamente para cualquier proyecto con ID de Sperant definido.
      quoter: s.quoter
        ? { projectId: s.quoter.projectId, projectName: s.quoter.projectName ?? project.name }
        : (project.sperantProjectId != null
            ? { projectId: project.sperantProjectId, projectName: project.name }
            : undefined),
      gallery: s.gallery as any,
      video: s.video as any,
      virtualTour: s.virtual_tour as any,
      ubication: s.ubication as any,
      executives: (s.executives as any)?.executives ?? [],
    };
  }
}
