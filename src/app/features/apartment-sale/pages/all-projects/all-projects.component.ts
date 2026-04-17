import { Component } from '@angular/core';
import { ALL_APARTMENT_PROJECTS, ApartmentProject } from '../../data/projects.data';

@Component({
  selector: 'app-all-projects',
  standalone: false,
  templateUrl: './all-projects.component.html',
  styleUrl: './all-projects.component.css'
})
export class AllProjectsComponent {
  projects: ApartmentProject[] = ALL_APARTMENT_PROJECTS;
}
