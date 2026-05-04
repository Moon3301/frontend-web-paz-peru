import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-projects-list',
  standalone: false,
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css',
})
export class ProjectsListComponent implements OnInit {
  projects: any[] = [];
  loading = true;
  confirmDeleteId: number | null = null;

  constructor(
    private readonly api: AdminApiService,
    private readonly router: Router,
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load(): void {
    this.loading = true;
    this.api.getProjects().subscribe({
      next: (data) => { this.projects = data; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  edit(id: number): void {
    this.router.navigate(['/admin/projects', id]);
  }

  newProject(): void {
    this.router.navigate(['/admin/projects/new']);
  }

  toggle(p: any): void {
    this.api.toggleProject(p.id).subscribe({
      next: (updated: any) => { p.isActive = updated.isActive; },
    });
  }

  confirmDelete(id: number): void {
    this.confirmDeleteId = id;
  }

  cancelDelete(): void {
    this.confirmDeleteId = null;
  }

  doDelete(id: number): void {
    this.api.deleteProject(id).subscribe(() => {
      this.confirmDeleteId = null;
      this.load();
    });
  }

  statusClass(status: string): string {
    const map: Record<string, string> = {
      'LANZAMIENTO': 'badge--gold',
      'EN CONSTRUCCIÓN': 'badge--blue',
      'ENTREGA': 'badge--green',
      'AGOTADO': 'badge--grey',
    };
    return map[status] || 'badge--grey';
  }
}
