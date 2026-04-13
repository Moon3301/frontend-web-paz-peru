import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-modal',
  standalone: false,
  templateUrl: './video-modal.component.html',
  styleUrl: './video-modal.component.css'
})
export class VideoModalComponent implements OnChanges {
  @Input() isOpen = false;
  @Input() videoUrl = '';
  @Output() closed = new EventEmitter<void>();

  safeUrl: SafeResourceUrl | null = null;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['videoUrl'] && this.videoUrl) {
      const autoplayUrl = this.videoUrl.includes('?')
        ? `${this.videoUrl}&autoplay=1`
        : `${this.videoUrl}?autoplay=1`;
      this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(autoplayUrl);
    }
    if (changes['isOpen']) {
      document.body.style.overflow = this.isOpen ? 'hidden' : '';
    }
  }

  close() {
    document.body.style.overflow = '';
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('video-modal__backdrop')) {
      this.close();
    }
  }
}
