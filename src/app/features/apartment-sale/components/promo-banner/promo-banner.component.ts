import { Component, Input } from '@angular/core';
import { PromoBannerConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-promo-banner',
  standalone: false,
  templateUrl: './promo-banner.component.html',
  styleUrl: './promo-banner.component.css',
})
export class PromoBannerComponent {
  @Input() config?: PromoBannerConfig | null;
}
