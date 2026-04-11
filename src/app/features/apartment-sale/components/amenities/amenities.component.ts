import { Component, Input } from '@angular/core';
import { AmenitiesConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-amenities',
  standalone: false,
  templateUrl: './amenities.component.html',
  styleUrl: './amenities.component.css'
})
export class AmenitiesComponent {
  @Input() config!: AmenitiesConfig;
}
