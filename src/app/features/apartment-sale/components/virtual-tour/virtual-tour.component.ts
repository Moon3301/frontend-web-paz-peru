import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VirtualTourConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-virtual-tour',
  standalone: false,
  templateUrl: './virtual-tour.component.html',
  styleUrl: './virtual-tour.component.css'
})
export class VirtualTourComponent implements OnInit {
  @Input() config!: VirtualTourConfig;

  safeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    if (this.config.url) {
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.config.url);
    }
  }
}
