import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({ selector: 'app-executives-editor', standalone: false, templateUrl: './executives-editor.component.html' })
export class ExecutivesEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();
  local: any = {};

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.executives) this.local.executives = [];
  }

  emit(): void { this.configChange.emit(this.local); }
  addExec(): void { this.local.executives.push({ name: '', role: 'Ejecutivo de Ventas', phone: '', photo: '' }); this.emit(); }
  removeExec(i: number): void { this.local.executives.splice(i, 1); this.emit(); }
  trackByIndex(i: number): number { return i; }
}
