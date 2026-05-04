import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-editor',
  standalone: false,
  templateUrl: './hero-editor.component.html',
})
export class HeroEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();

  local: any = {};

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.slides) this.local.slides = [];
  }

  emit(): void { this.configChange.emit(this.local); }

  addSlide(): void {
    this.local.slides = [...(this.local.slides || []), { image: '', alt: '' }];
    this.emit();
  }

  removeSlide(i: number): void {
    this.local.slides.splice(i, 1);
    this.emit();
  }

  trackByIndex(i: number): number { return i; }
}
