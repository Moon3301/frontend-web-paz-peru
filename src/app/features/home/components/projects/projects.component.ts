import { Component } from '@angular/core';
import { ALL_APARTMENT_PROJECTS } from '../../../apartment-sale/data/projects.data';

export interface HomeProject {
  name: string;
  district: string;
  districtSlug: string;
  status: string;
  image: string;
  logo: string;
  link: string;
}

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects = ALL_APARTMENT_PROJECTS;
}
