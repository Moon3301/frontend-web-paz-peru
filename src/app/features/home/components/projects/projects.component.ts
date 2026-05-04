import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: ProjectSummary[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.contentService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error loading projects', err),
    });
  }
}
