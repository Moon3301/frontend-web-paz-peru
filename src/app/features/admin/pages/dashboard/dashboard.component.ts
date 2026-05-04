import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  stats = { projects: 0, promotions: 0, delivered: 0 };

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void {
    this.api.getProjects().subscribe(d => this.stats.projects = d.length);
    this.api.getPromotions().subscribe(d => this.stats.promotions = d.length);
    this.api.getDeliveredProjects().subscribe(d => this.stats.delivered = d.length);
  }
}
