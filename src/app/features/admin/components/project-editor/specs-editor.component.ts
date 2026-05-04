import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-specs-editor',
  standalone: false,
  templateUrl: './specs-editor.component.html',
})
export class SpecsEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();

  local: any = {};

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.stats) this.local.stats = {};
    if (!this.local.specs) this.local.specs = {};
    if (!this.local.stats.areaRange) this.local.stats.areaRange = { icon: '', label: '' };
    if (!this.local.stats.location) this.local.stats.location = { icon: '', label: '' };
    if (!this.local.stats.commonAreasLabel) this.local.stats.commonAreasLabel = { icon: '', label: '' };
    if (!this.local.specs.amenityIcons) this.local.specs.amenityIcons = [];
  }

  emit(): void { this.configChange.emit(this.local); }

  addAmenityIcon(): void {
    this.local.specs.amenityIcons.push({ icon: '', label: '' });
    this.emit();
  }

  removeAmenityIcon(i: number): void {
    this.local.specs.amenityIcons.splice(i, 1);
    this.emit();
  }

  trackByIndex(i: number): number { return i; }
}
