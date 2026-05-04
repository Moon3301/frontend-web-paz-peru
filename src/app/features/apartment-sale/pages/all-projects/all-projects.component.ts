import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'app-all-projects',
  standalone: false,
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent implements OnInit {
  projects: ProjectSummary[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.contentService.getProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error loading projects', err),
    });
  }
}
