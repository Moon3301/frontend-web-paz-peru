import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-banner-editor',
  standalone: false,
  templateUrl: './promo-banner-editor.component.html',
})
export class PromoBannerEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();

  local: any = {
    imageDesktop: '',
    imageMobile: '',
    link: '',
    isVisible: false,
  };

  ngOnInit(): void {
    this.local = { ...this.local, ...JSON.parse(JSON.stringify(this.config || {})) };
  }

  emit(): void { this.configChange.emit(this.local); }
  doSave(): void { this.save.emit(); }
}
