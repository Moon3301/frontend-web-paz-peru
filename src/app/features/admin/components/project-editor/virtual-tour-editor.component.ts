import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({ selector: 'app-virtual-tour-editor', standalone: false, templateUrl: './virtual-tour-editor.component.html' })
export class VirtualTourEditorComponent implements OnInit {
  @Input() config: any = {};
  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();
  local: any = {};
  ngOnInit(): void { this.local = JSON.parse(JSON.stringify(this.config || {})); }
  emit(): void { this.configChange.emit(this.local); }
}
