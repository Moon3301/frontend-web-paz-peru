import { Component, Input } from '@angular/core';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'apartment-projects-grid',
  standalone: false,
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.css'
})
export class ProjectsGridComponent {
  @Input() projects: ProjectSummary[] = [];
}
