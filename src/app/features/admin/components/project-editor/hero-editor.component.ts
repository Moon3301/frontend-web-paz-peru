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

  // ── Selector de posición — ESCRITORIO ────────────────────────────────────
  posV: PosV = 'bottom';
  posH: PosH = 'center';
  posOffset = 8;   // % desde el borde (top o bottom según posV)

  // ── Ajuste fino (píxeles) — escritorio ───────────────────────────────────
  textOffsetX = 0;
  textOffsetY = 0;

  // ── Ajuste fino (píxeles) — móvil ────────────────────────────────────────
  textOffsetXMobile = 0;
  textOffsetYMobile = 0;

  // ── Selector de posición — MÓVIL ─────────────────────────────────────────
  posMV: PosV = 'bottom';
  posMH: PosH = 'center';
  posMOffset = 8;
  mobileTextEnabled = false;

  /** Pestaña activa en el panel de posición: 'desktop' | 'mobile' */
  posDevice: 'desktop' | 'mobile' = 'desktop';
  readonly deviceOptions = [
    { label: '🖥  Escritorio', value: 'desktop' },
    { label: '📱  Móvil',      value: 'mobile'  },
  ];

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

    // Padding por defecto si no está definido
    if (this.local.textPaddingH        === undefined) this.local.textPaddingH        = 10;
    if (this.local.textPaddingHMobile  === undefined) this.local.textPaddingHMobile  = 8;

    // Estado móvil
    this.mobileTextEnabled = !!(this.local.textPositionMobile &&
      Object.values(this.local.textPositionMobile).some(v => v && v !== 'auto'));

    this.readPositionFromConfig();
    this.readMobilePositionFromConfig();

    // Ajuste fino — escritorio
    this.textOffsetX = this.local.textOffsetX ?? 0;
    this.textOffsetY = this.local.textOffsetY ?? 0;

    // Ajuste fino — móvil
    this.textOffsetXMobile = this.local.textOffsetXMobile ?? 0;
    this.textOffsetYMobile = this.local.textOffsetYMobile ?? 0;
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

  /**
   * Lee el textPosition guardado en el config y lo convierte a posV/posH/posOffset.
   * Maneja valores 'auto' que se guardan para forzar el eje contrario.
   */
  private readPositionFromConfig(): void {
    const pos = this.local.textPosition || {};

    // Eje vertical — ignorar 'auto'
    if (pos.top !== undefined && pos.top !== 'auto') {
      this.posV = (pos.top === '50%') ? 'center' : 'top';
    } else if (pos.bottom !== undefined && pos.bottom !== 'auto') {
      this.posV = 'bottom';
    } else {
      this.posV = 'bottom';
    }

    // Offset numérico
    const rawVal = this.posV === 'bottom'
      ? pos.bottom
      : (this.posV === 'top' ? pos.top : null);
    if (rawVal && rawVal !== '50%' && rawVal !== 'auto') {
      const parsed = parseFloat(rawVal);
      this.posOffset = isNaN(parsed) ? 8 : parsed;
    } else {
      this.posOffset = 8;
    }

    // Eje horizontal — center cuando ambos están explícitamente definidos o son '0'
    const hasLeft  = pos.left  !== undefined && pos.left  !== 'auto';
    const hasRight = pos.right !== undefined && pos.right !== 'auto';
    if (hasLeft && hasRight) {
      this.posH = 'center';
    } else if (hasRight && !hasLeft) {
      this.posH = 'right';
    } else if (hasLeft && !hasRight) {
      this.posH = 'left';
    } else {
      this.posH = 'center';
    }
  }

  /**
   * Aplica posV/posH/posOffset al textPosition del config y emite.
   *
   * CRÍTICO: guarda siempre AMBOS ejes con 'auto' en el inactivo.
   * Esto evita que el CSS class (bottom: 8%) interfiera con el inline style
   * cuando el usuario elige posición 'top'.
   */
  applyPosition(): void {
    const pos: Record<string, string> = {};
    const offset = this.posOffset + '%';

    if (this.posV === 'top') {
      pos['top']    = offset;
      pos['bottom'] = 'auto';
    } else if (this.posV === 'center') {
      pos['top']    = '50%';
      pos['bottom'] = 'auto';
    } else {
      pos['bottom'] = offset;
      pos['top']    = 'auto';
    }

    if (this.posH === 'left') {
      pos['left']  = '5%';
      pos['right'] = 'auto';
    } else if (this.posH === 'right') {
      pos['right'] = '5%';
      pos['left']  = 'auto';
    } else {
      pos['left']  = '0';
      pos['right'] = '0';
    }

    this.local.textPosition = pos;
    this.emit();
  }

  // ── Ajuste fino (offset px) ───────────────────────────────────────────────

  applyOffset(): void {
    this.local.textOffsetX = this.textOffsetX !== 0 ? this.textOffsetX : undefined;
    this.local.textOffsetY = this.textOffsetY !== 0 ? this.textOffsetY : undefined;
    this.emit();
  }

  resetOffset(): void {
    this.textOffsetX = 0;
    this.textOffsetY = 0;
    delete this.local.textOffsetX;
    delete this.local.textOffsetY;
    this.emit();
  }

  applyMobileOffset(): void {
    this.local.textOffsetXMobile = this.textOffsetXMobile !== 0 ? this.textOffsetXMobile : undefined;
    this.local.textOffsetYMobile = this.textOffsetYMobile !== 0 ? this.textOffsetYMobile : undefined;
    this.emit();
  }

  resetMobileOffset(): void {
    this.textOffsetXMobile = 0;
    this.textOffsetYMobile = 0;
    delete this.local.textOffsetXMobile;
    delete this.local.textOffsetYMobile;
    this.emit();
  }

  // ── Posición Móvil ────────────────────────────────────────────────────────

  private readMobilePositionFromConfig(): void {
    const pos = this.local.textPositionMobile || {};

    if (pos.top !== undefined && pos.top !== 'auto') {
      this.posMV = (pos.top === '50%') ? 'center' : 'top';
    } else if (pos.bottom !== undefined && pos.bottom !== 'auto') {
      this.posMV = 'bottom';
    } else {
      this.posMV = 'bottom';
    }

    const rawVal = this.posMV === 'bottom'
      ? pos.bottom
      : (this.posMV === 'top' ? pos.top : null);
    if (rawVal && rawVal !== '50%' && rawVal !== 'auto') {
      const parsed = parseFloat(rawVal);
      this.posMOffset = isNaN(parsed) ? 8 : parsed;
    } else {
      this.posMOffset = 8;
    }

    const hasLeft  = pos.left  !== undefined && pos.left  !== 'auto';
    const hasRight = pos.right !== undefined && pos.right !== 'auto';
    if (hasLeft && hasRight) {
      this.posMH = 'center';
    } else if (hasRight && !hasLeft) {
      this.posMH = 'right';
    } else if (hasLeft && !hasRight) {
      this.posMH = 'left';
    } else {
      this.posMH = 'center';
    }
  }

  applyMobilePosition(): void {
    if (!this.mobileTextEnabled) return;
    const pos: Record<string, string> = {};
    const offset = this.posMOffset + '%';

    if (this.posMV === 'top') {
      pos['top']    = offset;
      pos['bottom'] = 'auto';
    } else if (this.posMV === 'center') {
      pos['top']    = '50%';
      pos['bottom'] = 'auto';
    } else {
      pos['bottom'] = offset;
      pos['top']    = 'auto';
    }

    if (this.posMH === 'left') {
      pos['left']  = '5%';
      pos['right'] = 'auto';
    } else if (this.posMH === 'right') {
      pos['right'] = '5%';
      pos['left']  = 'auto';
    } else {
      pos['left']  = '0';
      pos['right'] = '0';
    }

    this.local.textPositionMobile = pos;
    this.emit();
  }

  toggleMobileText(enabled: boolean): void {
    this.mobileTextEnabled = enabled;
    if (!enabled) {
      delete this.local.textPositionMobile;
      this.emit();
    } else {
      this.local.textPositionMobile = {};
      this.applyMobilePosition();
    }
  }

  selectMobileCell(v: string, h: string): void {
    this.posMV = v as PosV;
    this.posMH = h as PosH;
    this.applyMobilePosition();
  }

  isActiveMobileCell(v: string, h: string): boolean {
    return this.posMV === v && this.posMH === h;
  }

  get positionMobileLabel(): string {
    const v = { top: 'arriba', center: 'al centro', bottom: 'abajo' }[this.posMV];
    const h = { left: 'a la izquierda', center: 'centrado', right: 'a la derecha' }[this.posMH];
    const edge = this.posMV !== 'center' ? `, ${this.posMOffset}% desde el borde` : '';
    return `Texto ${v}, ${h}${edge}`;
  }

  /**
   * Estilo del bloque de texto en el mini-preview del editor (versión MÓVIL).
   * Usa color azul para diferenciarlo del preview de escritorio.
   */
  get previewMobileStyle(): Record<string, string> {
    const offset = this.posMOffset + '%';
    const style: Record<string, string> = {
      position:     'absolute',
      bottom:       '8%',
      top:          'auto',
      left:         '0',
      right:        '0',
      transform:    'none',
      padding:      '4px 8%',
      background:   'rgba(30,100,210,0.18)',
      border:       '1.5px dashed rgba(30,100,210,0.7)',
      borderRadius: '4px',
      boxSizing:    'border-box',
      textAlign:    'center',
      color:        '#fff',
      fontSize:     '0.6rem',
      lineHeight:   '1.4',
    };

    if (this.posMV === 'top') {
      style['top']    = offset;
      style['bottom'] = 'auto';
    } else if (this.posMV === 'center') {
      style['top']       = '50%';
      style['bottom']    = 'auto';
      style['transform'] = 'translateY(-50%)';
    } else {
      style['bottom'] = offset;
      style['top']    = 'auto';
    }

    if (this.posMH === 'left') {
      style['left']      = '5%';
      style['right']     = 'auto';
      style['textAlign'] = 'left';
    } else if (this.posMH === 'right') {
      style['right']     = '5%';
      style['left']      = 'auto';
      style['textAlign'] = 'right';
    }

    // Ajuste fino móvil escalado al preview (~25%)
    const mox = this.textOffsetXMobile ?? 0;
    const moy = this.textOffsetYMobile ?? 0;
    if (mox !== 0 || moy !== 0) {
      const scale = 0.25;
      const tx = Math.round(mox * scale);
      const ty = Math.round(moy * scale);
      const base = style['transform'] && style['transform'] !== 'none' ? style['transform'] + ' ' : '';
      style['transform'] = `${base}translate(${tx}px, ${ty}px)`;
    }

    return style;
  }

  /**
   * Estilo del bloque de texto en el mini-preview del editor.
   * Refleja exactamente la misma lógica que getTextPositionStyle() del HeroComponent
   * pero dentro del contenedor de preview (que es position:relative).
   */
  get previewStyle(): Record<string, string> {
    const offset = this.posOffset + '%';
    const style: Record<string, string> = {
      position:   'absolute',
      bottom:     '8%',
      top:        'auto',
      left:       '0',
      right:      '0',
      transform:  'none',
      padding:    '4px 8%',
      background: 'rgba(178,34,31,0.18)',
      border:     '1.5px dashed rgba(178,34,31,0.7)',
      borderRadius: '4px',
      boxSizing:  'border-box',
      textAlign:  'center',
      color:      '#fff',
      fontSize:   '0.6rem',
      lineHeight: '1.4',
    };

    if (this.posV === 'top') {
      style['top']    = offset;
      style['bottom'] = 'auto';
    } else if (this.posV === 'center') {
      style['top']       = '50%';
      style['bottom']    = 'auto';
      style['transform'] = 'translateY(-50%)';
    } else {
      style['bottom'] = offset;
      style['top']    = 'auto';
    }

    if (this.posH === 'left') {
      style['left']      = '5%';
      style['right']     = 'auto';
      style['textAlign'] = 'left';
    } else if (this.posH === 'right') {
      style['right']     = '5%';
      style['left']      = 'auto';
      style['textAlign'] = 'right';
    }

    // Ajuste fino escalado al preview (~25% del tamaño real)
    const ox = this.textOffsetX ?? 0;
    const oy = this.textOffsetY ?? 0;
    if (ox !== 0 || oy !== 0) {
      const scale = 0.25;
      const tx = Math.round(ox * scale);
      const ty = Math.round(oy * scale);
      const base = style['transform'] && style['transform'] !== 'none' ? style['transform'] + ' ' : '';
      style['transform'] = `${base}translate(${tx}px, ${ty}px)`;
    }

    return style;
  }

  /** URL normalizada del logo para el preview (añade / si no es absoluta) */
  get previewLogoSrc(): string {
    const url = this.local.logo || '';
    if (!url) return '';
    return url.startsWith('http') || url.startsWith('/') ? url : '/' + url;
  }

  /** ¿Hay algún texto que mostrar en el preview? */
  get hasPreviewText(): boolean {
    return !!(this.local.badge || this.local.description || this.local.priceLine1 || this.local.priceFrom);
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
