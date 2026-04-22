import { Component, Input, OnInit } from '@angular/core';
import { ProjectConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-project-page',
  standalone: false,
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {

  @Input() config!: ProjectConfig;

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
