import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../../../core/services/content.service';
import { DeliveredProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'app-projects-delivered',
  standalone: false,
  templateUrl: './projects-delivered.component.html',
  styleUrl: './projects-delivered.component.css'
})
export class ProjectsDeliveredComponent implements OnInit {
  projects: DeliveredProjectSummary[] = [];

  constructor(private readonly contentService: ContentService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.contentService.getDeliveredProjects().subscribe({
      next: (data) => (this.projects = data),
      error: (err) => console.error('Error loading delivered projects', err),
    });
  }
}
