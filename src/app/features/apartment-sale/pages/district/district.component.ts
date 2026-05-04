import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin } from 'rxjs';
import { ContentService } from '../../../../core/services/content.service';
import { ProjectSummary } from '../../../../core/models/content.models';

@Component({
  selector: 'app-district',
  standalone: false,
  templateUrl: './district.component.html',
  styleUrl: './district.component.css'
})
export class DistrictComponent implements OnInit {
  districtLabel = '';
  mapImage = '';
  projects: ProjectSummary[] = [];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly contentService: ContentService,
  ) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.data['districtSlug'] as string;

    forkJoin({
      districts: this.contentService.getDistricts(),
      projects:  this.contentService.getProjects(),
    }).subscribe({
      next: ({ districts, projects }) => {
        const district = districts.find(d => d.slug === slug);
        if (district) {
          this.districtLabel = district.label;
          this.mapImage = district.mapImage ?? '';
        }
        this.projects = projects.filter(p => p.district === slug);
      },
      error: (err) => console.error('Error loading district data', err),
    });
  }
}
