import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-quoter-editor',
  standalone: false,
  templateUrl: './quoter-editor.component.html',
})
export class QuoterEditorComponent implements OnInit {
  /** Config guardada en la sección 'quoter'. Puede ser {} si nunca se ha guardado. */
  @Input() config: any = {};
  /** ID de Sperant del proyecto (del formulario general). Usado como fallback. */
  @Input() sperantProjectId: number | null = null;
  /** Nombre del proyecto (del formulario general). Usado como fallback. */
  @Input() projectName = '';

  @Output() configChange = new EventEmitter<any>();
  @Output() save = new EventEmitter<void>();

  local: any = {};

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    // Si la sección no tiene projectId propio, pre-rellena con el del proyecto
    if (!this.local.projectId && this.sperantProjectId) {
      this.local.projectId = this.sperantProjectId;
    }
    if (!this.local.projectName) {
      this.local.projectName = this.projectName || '';
    }
  }

  emit(): void { this.configChange.emit(this.local); }
}
