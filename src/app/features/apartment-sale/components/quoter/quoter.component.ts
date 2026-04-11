import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { QuoterConfig } from '../../models/project-config.interface';

@Component({
  selector: 'app-quoter',
  standalone: false,
  templateUrl: './quoter.component.html',
  styleUrl: './quoter.component.css'
})
export class QuoterComponent implements OnInit, OnDestroy {
  @Input() config!: QuoterConfig;
  safeUrl!: SafeResourceUrl;
  submitted = false;

  private messageListener = (event: MessageEvent) => {
    if (event.data?.type === 'cotizador_success') {
      this.submitted = true;
    }
  };

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.config.iframeUrl
    );
    window.addEventListener('message', this.messageListener);
  }

  ngOnDestroy() {
    window.removeEventListener('message', this.messageListener);
  }
}
