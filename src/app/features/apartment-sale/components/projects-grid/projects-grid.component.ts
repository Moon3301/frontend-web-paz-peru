import { Component, Input } from '@angular/core';
import { ApartmentProject } from '../../data/projects.data';

@Component({
  selector: 'apartment-projects-grid',
  standalone: false,
  templateUrl: './projects-grid.component.html',
  styleUrl: './projects-grid.component.css'
})
export class ProjectsGridComponent {
  @Input() projects: ApartmentProject[] = [];
}
