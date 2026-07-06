import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

/** Las 9 posiciones del selector visual */
export type PosV = 'top' | 'center' | 'bottom';
export type PosH = 'left' | 'center' | 'right';
export type PosDevice = 'mobile' | 'tablet' | 'desktop' | 'xl' | 'xxl';

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

  // ── Estándar / Escritorio base (1025–1439px) ──────────────────────────────
  posV: PosV = 'bottom';
  posH: PosH = 'center';
  posOffset = 8;
  textOffsetX = 0;
  textOffsetY = 0;

  // ── Tablet (769–1024px) ───────────────────────────────────────────────────
  posTabV: PosV = 'bottom';
  posTabH: PosH = 'center';
  posTabOffset = 8;
  tabTextEnabled = false;
  textOffsetXTablet = 0;
  textOffsetYTablet = 0;

  // ── 1440–1919px ───────────────────────────────────────────────────────────
  posXlV: PosV = 'bottom';
  posXlH: PosH = 'center';
  posXlOffset = 8;
  xlTextEnabled = false;
  textOffsetXXl = 0;
  textOffsetYXl = 0;

  // ── ≥1920px ───────────────────────────────────────────────────────────────
  posXxlV: PosV = 'bottom';
  posXxlH: PosH = 'center';
  posXxlOffset = 8;
  xxlTextEnabled = false;
  textOffsetXXxl = 0;
  textOffsetYXxl = 0;

  // ── Móvil (≤768px) ────────────────────────────────────────────────────────
  posMV: PosV = 'bottom';
  posMH: PosH = 'center';
  posMOffset = 8;
  mobileTextEnabled = false;
  textOffsetXMobile = 0;
  textOffsetYMobile = 0;

  /** Pestaña activa en el panel de posición */
  posDevice: PosDevice = 'desktop';
  readonly deviceOptions = [
    { label: '📱 Móvil',      value: 'mobile'  },
    { label: 'Tablet',        value: 'tablet'  },
    { label: '🖥 Estándar',   value: 'desktop' },
    { label: '🖥 1440px',     value: 'xl'      },
    { label: '🖥 1920px',     value: 'xxl'     },
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

    // Asegurar que todos los breakpoints de logo tengan un objeto
    ['desktopXxl','desktop','standard','tablet','mobile','mobileSm'].forEach(bp => {
      if (!this.local.logoSize[bp]) this.local.logoSize[bp] = {};
    });

    ['badgeStyle','descriptionStyle','priceLabelStyle','priceFromStyle'].forEach(k => {
      if (!this.local[k]) this.local[k] = {};
    });

    // Padding por defecto si no está definido
    if (this.local.textPaddingH       === undefined) this.local.textPaddingH       = 10;
    if (this.local.textPaddingHMobile === undefined) this.local.textPaddingHMobile = 8;
    if (this.local.textPaddingHTablet === undefined) this.local.textPaddingHTablet = 10;
    if (this.local.textPaddingHXl     === undefined) this.local.textPaddingHXl     = 10;
    if (this.local.textPaddingHXxl    === undefined) this.local.textPaddingHXxl    = 10;

    // Estado de los toggles
    this.mobileTextEnabled  = this.hasCustomPos(this.local.textPositionMobile);
    this.tabTextEnabled     = this.hasCustomPos(this.local.textPositionTablet);
    this.xlTextEnabled      = this.hasCustomPos(this.local.textPositionXl);
    this.xxlTextEnabled     = this.hasCustomPos(this.local.textPositionXxl);

    // Leer posiciones guardadas
    this.readPositionFromConfig();
    this.readMobilePositionFromConfig();
    this.readBreakpointPosition('tablet', this.local.textPositionTablet);
    this.readBreakpointPosition('xl',     this.local.textPositionXl);
    this.readBreakpointPosition('xxl',    this.local.textPositionXxl);

    // Ajustes finos
    this.textOffsetX     = this.local.textOffsetX     ?? 0;
    this.textOffsetY     = this.local.textOffsetY     ?? 0;
    this.textOffsetXMobile = this.local.textOffsetXMobile ?? 0;
    this.textOffsetYMobile = this.local.textOffsetYMobile ?? 0;
    this.textOffsetXTablet = this.local.textOffsetXTablet ?? 0;
    this.textOffsetYTablet = this.local.textOffsetYTablet ?? 0;
    this.textOffsetXXl   = this.local.textOffsetXXl   ?? 0;
    this.textOffsetYXl   = this.local.textOffsetYXl   ?? 0;
    this.textOffsetXXxl  = this.local.textOffsetXXxl  ?? 0;
    this.textOffsetYXxl  = this.local.textOffsetYXxl  ?? 0;
  }

  private hasCustomPos(pos: any): boolean {
    return !!(pos && Object.values(pos).some((v: any) => v && v !== 'auto'));
  }

  emit(): void { this.configChange.emit(this.local); }

  // ── Lectura genérica de posición por breakpoint ───────────────────────────

  private readBreakpointPosition(bp: 'tablet' | 'xl' | 'xxl', pos: any): void {
    if (!pos) return;
    const readV = (p: any): PosV =>
      p?.top !== undefined && p.top !== 'auto'
        ? (p.top === '50%' ? 'center' : 'top')
        : p?.bottom !== undefined && p.bottom !== 'auto' ? 'bottom' : 'bottom';
    const readOffset = (p: any, v: PosV): number => {
      const raw = v === 'bottom' ? p?.bottom : v === 'top' ? p?.top : null;
      if (!raw || raw === '50%' || raw === 'auto') return 8;
      const n = parseFloat(raw); return isNaN(n) ? 8 : n;
    };
    const readH = (p: any): PosH => {
      const hasL = p?.left  !== undefined && p.left  !== 'auto';
      const hasR = p?.right !== undefined && p.right !== 'auto';
      if (hasL && hasR) return 'center';
      if (hasR) return 'right';
      if (hasL) return 'left';
      return 'center';
    };
    if (bp === 'tablet') {
      this.posTabV = readV(pos); this.posTabOffset = readOffset(pos, this.posTabV); this.posTabH = readH(pos);
    } else if (bp === 'xl') {
      this.posXlV  = readV(pos); this.posXlOffset  = readOffset(pos, this.posXlV);  this.posXlH  = readH(pos);
    } else {
      this.posXxlV = readV(pos); this.posXxlOffset = readOffset(pos, this.posXxlV); this.posXxlH = readH(pos);
    }
  }

  // ── Apply genérico ────────────────────────────────────────────────────────

  private buildPos(v: PosV, h: PosH, offset: number): Record<string, string> {
    const pos: Record<string, string> = {};
    const off = offset + '%';
    if (v === 'top')    { pos['top'] = off;    pos['bottom'] = 'auto'; }
    else if (v === 'center') { pos['top'] = '50%'; pos['bottom'] = 'auto'; }
    else                { pos['bottom'] = off;  pos['top']    = 'auto'; }
    if (h === 'left')   { pos['left']  = '5%'; pos['right'] = 'auto'; }
    else if (h === 'right') { pos['right'] = '5%'; pos['left']  = 'auto'; }
    else                { pos['left'] = '0'; pos['right'] = '0'; }
    return pos;
  }

  applyTabletPosition(): void {
    if (!this.tabTextEnabled) return;
    this.local.textPositionTablet = this.buildPos(this.posTabV, this.posTabH, this.posTabOffset);
    this.emit();
  }

  applyXlPosition(): void {
    if (!this.xlTextEnabled) return;
    this.local.textPositionXl = this.buildPos(this.posXlV, this.posXlH, this.posXlOffset);
    this.emit();
  }

  applyXxlPosition(): void {
    if (!this.xxlTextEnabled) return;
    this.local.textPositionXxl = this.buildPos(this.posXxlV, this.posXxlH, this.posXxlOffset);
    this.emit();
  }

  toggleTabletText(enabled: boolean): void {
    this.tabTextEnabled = enabled;
    if (!enabled) { delete this.local.textPositionTablet; this.emit(); }
    else { this.local.textPositionTablet = {}; this.applyTabletPosition(); }
  }

  toggleXlText(enabled: boolean): void {
    this.xlTextEnabled = enabled;
    if (!enabled) { delete this.local.textPositionXl; this.emit(); }
    else { this.local.textPositionXl = {}; this.applyXlPosition(); }
  }

  toggleXxlText(enabled: boolean): void {
    this.xxlTextEnabled = enabled;
    if (!enabled) { delete this.local.textPositionXxl; this.emit(); }
    else { this.local.textPositionXxl = {}; this.applyXxlPosition(); }
  }

  selectTabletCell(v: string, h: string): void {
    this.posTabV = v as PosV; this.posTabH = h as PosH; this.applyTabletPosition();
  }
  selectXlCell(v: string, h: string): void {
    this.posXlV = v as PosV; this.posXlH = h as PosH; this.applyXlPosition();
  }
  selectXxlCell(v: string, h: string): void {
    this.posXxlV = v as PosV; this.posXxlH = h as PosH; this.applyXxlPosition();
  }

  isActiveTabletCell(v: string, h: string): boolean { return this.posTabV === v && this.posTabH === h; }
  isActiveXlCell   (v: string, h: string): boolean { return this.posXlV  === v && this.posXlH  === h; }
  isActiveXxlCell  (v: string, h: string): boolean { return this.posXxlV === v && this.posXxlH === h; }

  // Ajuste fino tablet
  applyTabletOffset(): void {
    this.local.textOffsetXTablet = this.textOffsetXTablet || undefined;
    this.local.textOffsetYTablet = this.textOffsetYTablet || undefined;
    this.emit();
  }
  resetTabletOffset(): void {
    this.textOffsetXTablet = 0; this.textOffsetYTablet = 0;
    delete this.local.textOffsetXTablet; delete this.local.textOffsetYTablet; this.emit();
  }

  // Ajuste fino xl
  applyXlOffset(): void {
    this.local.textOffsetXXl = this.textOffsetXXl || undefined;
    this.local.textOffsetYXl = this.textOffsetYXl || undefined;
    this.emit();
  }
  resetXlOffset(): void {
    this.textOffsetXXl = 0; this.textOffsetYXl = 0;
    delete this.local.textOffsetXXl; delete this.local.textOffsetYXl; this.emit();
  }

  // Ajuste fino xxl
  applyXxlOffset(): void {
    this.local.textOffsetXXxl = this.textOffsetXXxl || undefined;
    this.local.textOffsetYXxl = this.textOffsetYXxl || undefined;
    this.emit();
  }
  resetXxlOffset(): void {
    this.textOffsetXXxl = 0; this.textOffsetYXxl = 0;
    delete this.local.textOffsetXXxl; delete this.local.textOffsetYXxl; this.emit();
  }

  get positionTabletLabel(): string {
    const v = { top: 'arriba', center: 'al centro', bottom: 'abajo' }[this.posTabV];
    const h = { left: 'a la izquierda', center: 'centrado', right: 'a la derecha' }[this.posTabH];
    const e = this.posTabV !== 'center' ? `, ${this.posTabOffset}%` : '';
    return `Texto ${v}, ${h}${e}`;
  }

  get positionXlLabel(): string {
    const v = { top: 'arriba', center: 'al centro', bottom: 'abajo' }[this.posXlV];
    const h = { left: 'a la izquierda', center: 'centrado', right: 'a la derecha' }[this.posXlH];
    const e = this.posXlV !== 'center' ? `, ${this.posXlOffset}%` : '';
    return `Texto ${v}, ${h}${e}`;
  }

  get positionXxlLabel(): string {
    const v = { top: 'arriba', center: 'al centro', bottom: 'abajo' }[this.posXxlV];
    const h = { left: 'a la izquierda', center: 'centrado', right: 'a la derecha' }[this.posXxlH];
    const e = this.posXxlV !== 'center' ? `, ${this.posXxlOffset}%` : '';
    return `Texto ${v}, ${h}${e}`;
  }

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
