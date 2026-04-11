import { Component, Input } from '@angular/core';
import { ProjectConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-project-page',
  standalone: false,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {
  @Input() config!: ProjectConfig;
}
