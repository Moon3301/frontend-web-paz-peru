import { Component, OnInit } from '@angular/core';
import { ContentService } from '../../core/services/content.service';
import { CmsEvent } from '../../core/models/content.models';

@Component({
  selector: 'app-events-fairs',
  standalone: false,
  templateUrl: './events-fairs.component.html',
  styleUrl: './events-fairs.component.css',
})
export class EventsFairsComponent implements OnInit {
  events: CmsEvent[] = [];
  fairs: CmsEvent[] = [];
  loading = true;

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    this.content.getEvents().subscribe({
      next: (items) => {
        this.events = items.filter((e) => e.type === 'EVENT');
        this.fairs  = items.filter((e) => e.type === 'FAIR');
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      },
    });
  }

  formatDate(iso: string | null): string {
    if (!iso) return '';
    const date = new Date(iso);
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
  }
}
