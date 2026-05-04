import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { Observable, EMPTY, catchError } from 'rxjs';
import { ContentService } from '../../../core/services/content.service';
import { ProjectDetail } from '../../../core/models/content.models';

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<ProjectDetail> {
  constructor(
    private readonly content: ContentService,
    private readonly router: Router,
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<ProjectDetail> {
    const slug = route.paramMap.get('projectSlug') ?? '';

    return this.content.getProject(slug).pipe(
      catchError(() => {
        this.router.navigate(['/departamentos-en-venta']);
        return EMPTY;
      }),
    );
  }
}
