import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/** Las 9 posiciones del selector visual */
export type PosV = 'top' | 'center' | 'bottom';
export type PosH = 'left' | 'center' | 'right';

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

  // ── Selector de posición ─────────────────────────────────────────────────
  posV: PosV = 'bottom';
  posH: PosH = 'center';
  posOffset = 8;   // % desde el borde (top o bottom según posV)

  readonly vOptions = [
    { label: 'Arriba',  value: 'top'    },
    { label: 'Centro',  value: 'center' },
    { label: 'Abajo',   value: 'bottom' },
  ];
  readonly hOptions = [
    { label: 'Izquierda', value: 'left'   },
    { label: 'Centro',    value: 'center' },
    { label: 'Derecha',   value: 'right'  },
  ];

  /** Arrays tipados para el *ngFor del grid 3×3 — evita error TS con string literal */
  readonly vCells: PosV[] = ['top', 'center', 'bottom'];
  readonly hCells: PosH[] = ['left', 'center', 'right'];

  // ── Estado de acordeones ─────────────────────────────────────────────────
  accordionValue: string[] = [];   // vacío = todo colapsado

  ngOnInit(): void {
    this.local = JSON.parse(JSON.stringify(this.config || {}));
    if (!this.local.slides)        this.local.slides        = [];
    if (!this.local.textPosition)  this.local.textPosition  = {};
    if (!this.local.logoSize)      this.local.logoSize      = {};
    ['desktop','tablet','mobile'].forEach(bp => {
      if (!this.local.logoSize[bp]) this.local.logoSize[bp] = {};
    });
    ['badgeStyle','descriptionStyle','priceLabelStyle','priceFromStyle'].forEach(k => {
      if (!this.local[k]) this.local[k] = {};
    });
    this.readPositionFromConfig();
  }

  emit(): void { this.configChange.emit(this.local); }

  // ── Slides ────────────────────────────────────────────────────────────────

  addSlide(): void {
    this.local.slides = [...(this.local.slides || []), { image: '', alt: '' }];
    this.emit();
  }

  removeSlide(i: number): void {
    this.local.slides.splice(i, 1);
    this.emit();
  }

  trackByIndex(i: number): number { return i; }

  // ── Posición ──────────────────────────────────────────────────────────────

  /** Lee el textPosition actual del config y lo convierte a posV/posH/posOffset */
  private readPositionFromConfig(): void {
    const pos = this.local.textPosition || {};

    // Vertical
    if (pos.top !== undefined) {
      this.posV = (pos.top === '50%') ? 'center' : 'top';
    } else {
      this.posV = 'bottom';
    }

    // Offset numérico desde el borde activo
    const rawVal = this.posV === 'bottom'
      ? pos.bottom
      : (this.posV === 'top' ? pos.top : null);
    if (rawVal && rawVal !== '50%') {
      const parsed = parseFloat(rawVal);
      this.posOffset = isNaN(parsed) ? 8 : parsed;
    } else {
      this.posOffset = 8;
    }

    // Horizontal
    if (pos.left !== undefined && pos.right !== undefined) {
      this.posH = 'center';
    } else if (pos.right !== undefined && pos.left === undefined) {
      this.posH = 'right';
    } else if (pos.left !== undefined && pos.right === undefined) {
      this.posH = 'left';
    } else {
      this.posH = 'center';
    }
  }

  /** Aplica los valores posV/posH/posOffset al config y emite */
  applyPosition(): void {
    const pos: Record<string, string> = {};
    const offset = this.posOffset + '%';

    if (this.posV === 'top')    { pos['top']    = offset; }
    else if (this.posV === 'center') { pos['top'] = '50%'; }
    else                        { pos['bottom'] = offset; }

    if (this.posH === 'left')   { pos['left']   = '5%'; }
    else if (this.posH === 'right')  { pos['right']  = '5%'; }
    else                        { pos['left'] = '0'; pos['right'] = '0'; }

    this.local.textPosition = pos;
    this.emit();
  }

  /** Activa una celda del grid 3×3.
   *  Acepta string para que el template checker no pierda el tipo en *ngFor. */
  selectCell(v: string, h: string): void {
    this.posV = v as PosV;
    this.posH = h as PosH;
    this.applyPosition();
  }

  isActiveCell(v: string, h: string): boolean {
    return this.posV === v && this.posH === h;
  }

  /** Descripción legible de la posición actual */
  get positionLabel(): string {
    const v = { top: 'arriba', center: 'al centro', bottom: 'abajo' }[this.posV];
    const h = { left: 'a la izquierda', center: 'centrado', right: 'a la derecha' }[this.posH];
    const edge = this.posV !== 'center' ? `, ${this.posOffset}% desde el borde` : '';
    return `Texto ${v}, ${h}${edge}`;
  }

  // ── Colores (helpers para p-colorPicker que trabaja sin #) ───────────────

  /** Convierte '#RRGGBB' → 'RRGGBB' para p-colorPicker */
  hexNoHash(hex: string | undefined): string {
    if (!hex) return 'ffffff';
    return hex.replace('#', '');
  }

  /** Recibe 'RRGGBB' de p-colorPicker y lo guarda como '#RRGGBB' */
  setColor(field: string, val: string): void {
    this.local[field] = '#' + val.replace('#', '');
    this.emit();
  }
}
