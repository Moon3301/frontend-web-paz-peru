import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-editor',
  standalone: false,
  templateUrl: './gallery-editor.component.html',
})
export class GalleryEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();
  local: any = {};
  activeTabIndex = 0;

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.tabs) this.local.tabs = [];
    if (this.local.backgroundColor === undefined) this.local.backgroundColor = '';
    if (this.local.textColor       === undefined) this.local.textColor       = '';
  }

  emit(): void { this.configChange.emit(this.local); }
  addTab(): void { this.local.tabs.push({ label: '', subtitle: '', images: [] }); this.activeTabIndex = this.local.tabs.length - 1; this.emit(); }
  removeTab(i: number): void { this.local.tabs.splice(i, 1); this.activeTabIndex = 0; this.emit(); }
  addImage(tab: any): void { tab.images.push({ src: '' }); this.emit(); }
  removeImage(tab: any, i: number): void { tab.images.splice(i, 1); this.emit(); }
  trackByIndex(i: number): number { return i; }
}
