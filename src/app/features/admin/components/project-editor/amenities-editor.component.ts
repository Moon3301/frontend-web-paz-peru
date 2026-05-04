import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities-editor',
  standalone: false,
  templateUrl: './amenities-editor.component.html',
})
export class AmenitiesEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();
  local: any = {};

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.items) this.local.items = [];
  }

  emit(): void { this.configChange.emit(this.local); }
  addItem(): void { this.local.items.push({ icon: '', label: '' }); this.emit(); }
  removeItem(i: number): void { this.local.items.splice(i, 1); this.emit(); }
  trackByIndex(i: number): number { return i; }
}
