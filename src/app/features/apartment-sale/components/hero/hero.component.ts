import {
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HeroConfig, HeroElementStyle, HeroLogoSize, HeroTextPosition } from '../../models/project-config.interface';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input() config!: HeroConfig;

  activeIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  ngOnInit() {
    if (this.config.slides.length > 1) {
      this.timer = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.config.slides.length;
      }, 5000);
    }
  }

  ngOnDestroy() {
    if (this.timer) clearInterval(this.timer);
  }

  goTo(index: number) { this.activeIndex = index; }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.config.slides.length) %
      this.config.slides.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.config.slides.length;
  }

  /**
   * Toda la posición del texto se gestiona ahora mediante CSS custom properties
   * inyectadas en .hero__logo-wrapper vía getLogoCssVars().
   * Este método solo define el --hero-text-tf (transform) para el estándar
   * y devuelve vacío para el resto — evita conflictos inline vs @media.
   *
   * @deprecated Mantener la firma para no romper el template binding.
   */
  getTextPositionStyle(): Record<string, string> {
    // Vacío: toda la lógica se trasladó a getLogoCssVars()
    return {};
  }

  /** Color de texto efectivo (textColor del config o blanco por defecto). */
  get textColor(): string {
    return this.config.textColor ?? '#ffffff';
  }

  /** Color de badge efectivo (badgeColor, luego textColor, luego blanco). */
  get badgeColor(): string {
    return this.config.badgeColor ?? this.textColor;
  }

  /** Color de descripción efectivo (descriptionColor, luego textColor, luego blanco). */
  get descriptionColor(): string {
    return this.config.descriptionColor ?? this.textColor;
  }

  /** Color de etiqueta de precio efectivo (priceLabelColor, luego textColor, luego blanco). */
  get priceLabelColor(): string {
    return this.config.priceLabelColor ?? this.textColor;
  }

  /** Color del precio principal efectivo (priceFromColor, luego textColor, luego blanco). */
  get priceFromColor(): string {
    return this.config.priceFromColor ?? this.textColor;
  }

  /**
   * Inyecta TODAS las CSS custom properties en .hero__logo-wrapper:
   *   — Tamaño de logo por breakpoint (--logo-w, --logo-w-xl, --logo-w-xxl, ...)
   *   — Posición del texto por breakpoint (--hero-text-*, --tab-text-*, --xl-text-*, --xxl-text-*)
   *   — Relleno horizontal por breakpoint (--text-ph, --tab-text-ph, --xl-text-ph, --xxl-text-ph)
   *   — Variables legacy de móvil (--mob-text-*)
   */
  getLogoCssVars(): Record<string, string> {
    const v: Record<string, string> = {};

    // ── 1. Tamaño del logo por breakpoint ────────────────────────────────────
    const s: HeroLogoSize | undefined = this.config.logoSize;
    if (s) {
      if (s.desktopXxl?.width)  v['--logo-w-xxl']     = s.desktopXxl.width;
      if (s.desktopXxl?.height) v['--logo-h-xxl']     = s.desktopXxl.height;
      if (s.desktop?.width)     v['--logo-w-xl']      = s.desktop.width;
      if (s.desktop?.height)    v['--logo-h-xl']      = s.desktop.height;
      if (s.standard?.width)    v['--logo-w']         = s.standard.width;
      if (s.standard?.height)   v['--logo-h']         = s.standard.height;
      if (s.tablet?.width)      v['--logo-w-tablet']  = s.tablet.width;
      if (s.tablet?.height)     v['--logo-h-tablet']  = s.tablet.height;
      if (s.mobile?.width)      v['--logo-w-mobile']  = s.mobile.width;
      if (s.mobile?.height)     v['--logo-h-mobile']  = s.mobile.height;
      if (s.mobileSm?.width)    v['--logo-w-sm']      = s.mobileSm.width;
      if (s.mobileSm?.height)   v['--logo-h-sm']      = s.mobileSm.height;
    }

    // ── 2. Posición de texto — ESTÁNDAR (1025–1439 px, base) ─────────────────
    this.injectTextPosition(v, this.config.textPosition, 'hero',
      this.config.textOffsetX,  this.config.textOffsetY,
      this.config.textPaddingH, '--text-ph');

    // ── 3. Posición de texto — TABLET (769–1024 px) ───────────────────────────
    if (this.config.textPositionTablet) {
      this.injectTextPosition(v, this.config.textPositionTablet, 'tab',
        this.config.textOffsetXTablet,  this.config.textOffsetYTablet,
        this.config.textPaddingHTablet, '--tab-text-ph');
    } else if (this.config.textPaddingHTablet !== undefined) {
      v['--tab-text-ph'] = this.config.textPaddingHTablet + '%';
    }

    // ── 4. Posición de texto — 1440–1919px ────────────────────────────────────
    if (this.config.textPositionXl) {
      this.injectTextPosition(v, this.config.textPositionXl, 'xl',
        this.config.textOffsetXXl,  this.config.textOffsetYXl,
        this.config.textPaddingHXl, '--xl-text-ph');
    } else if (this.config.textPaddingHXl !== undefined) {
      v['--xl-text-ph'] = this.config.textPaddingHXl + '%';
    }

    // ── 5. Posición de texto — ≥1920px ────────────────────────────────────────
    if (this.config.textPositionXxl) {
      this.injectTextPosition(v, this.config.textPositionXxl, 'xxl',
        this.config.textOffsetXXxl,  this.config.textOffsetYXxl,
        this.config.textPaddingHXxl, '--xxl-text-ph');
    } else if (this.config.textPaddingHXxl !== undefined) {
      v['--xxl-text-ph'] = this.config.textPaddingHXxl + '%';
    }

    // ── 6. Posición y relleno del texto en MÓVIL (≤768px) — legacy ───────────
    const mpos = this.config.textPositionMobile;
    if (mpos && Object.keys(mpos).some(k => mpos[k as keyof typeof mpos] && mpos[k as keyof typeof mpos] !== 'auto')) {
      v['--mob-text-pos']      = 'absolute';
      v['--mob-logo-overflow'] = 'hidden';
      v['--mob-text-maxh']     = '88%';
      if (mpos.top    !== undefined) v['--mob-text-top']    = mpos.top;
      if (mpos.bottom !== undefined) v['--mob-text-bottom'] = mpos.bottom;
      if (mpos.left   !== undefined) v['--mob-text-left']   = mpos.left;
      if (mpos.right  !== undefined) v['--mob-text-right']  = mpos.right;
      if (mpos.top === '50%')        v['--mob-text-tf']     = 'translateY(-50%)';
    }
    if (this.config.textPaddingHMobile !== undefined) {
      v['--mob-text-ph'] = this.config.textPaddingHMobile + '%';
    }
    const mox = this.config.textOffsetXMobile ?? 0;
    const moy = this.config.textOffsetYMobile ?? 0;
    if (mox !== 0 || moy !== 0) {
      const tp = `translate(${mox}px, ${moy}px)`;
      const ex = v['--mob-text-tf'];
      v['--mob-text-tf'] = ex && ex !== 'none' ? `${ex} ${tp}` : tp;
    }

    return v;
  }

  /**
   * Helper: inyecta las CSS vars de posición de texto para un prefijo dado.
   * Prefijos soportados: 'hero' (estándar), 'tab' (tablet), 'xl', 'xxl'.
   */
  private injectTextPosition(
    v: Record<string, string>,
    pos: HeroTextPosition | undefined,
    prefix: string,
    offsetX: number | undefined,
    offsetY: number | undefined,
    paddingH: number | undefined,
    paddingVar: string,
  ): void {
    const pfx = prefix === 'hero' ? '--hero-text' : `--${prefix}-text`;

    // Defaults
    v[`${pfx}-bottom`] = '8%';
    v[`${pfx}-top`]    = 'auto';
    v[`${pfx}-left`]   = '0';
    v[`${pfx}-right`]  = '0';
    v[prefix === 'hero' ? '--hero-text-tf' : `${pfx}-tf`] = 'none';

    if (pos) {
      if (pos.top !== undefined && pos.top !== 'auto') {
        v[`${pfx}-top`]    = pos.top;
        v[`${pfx}-bottom`] = 'auto';
        if (pos.top === '50%') {
          v[prefix === 'hero' ? '--hero-text-tf' : `${pfx}-tf`] = 'translateY(-50%)';
        }
      } else if (pos.bottom !== undefined && pos.bottom !== 'auto') {
        v[`${pfx}-bottom`] = pos.bottom;
        v[`${pfx}-top`]    = 'auto';
      }
      if (pos.left  !== undefined) v[`${pfx}-left`]  = pos.left;
      if (pos.right !== undefined) v[`${pfx}-right`] = pos.right;
    }

    // Ajuste fino (píxeles)
    const ox = offsetX ?? 0;
    const oy = offsetY ?? 0;
    if (ox !== 0 || oy !== 0) {
      const tfKey = prefix === 'hero' ? '--hero-text-tf' : `${pfx}-tf`;
      const base = v[tfKey] !== 'none' ? v[tfKey] + ' ' : '';
      v[tfKey] = `${base}translate(${ox}px, ${oy}px)`;
    }

    // Relleno horizontal
    if (paddingH !== undefined) {
      v[paddingVar] = paddingH + '%';
    }
  }

  /**
   * Construye el objeto ngStyle para un elemento de texto individual.
   * Parte del color heredado (legacyColor) y sobreescribe con los campos
   * definidos en elementStyle. Solo incluye las propiedades explícitamente
   * definidas para no pisar los valores del CSS.
   */
  getElementStyle(legacyColor: string, elementStyle?: HeroElementStyle): Record<string, string> {
    const style: Record<string, string> = { color: legacyColor };
    if (!elementStyle) return style;
    if (elementStyle.color) style['color'] = elementStyle.color;
    if (elementStyle.fontFamily) style['fontFamily'] = elementStyle.fontFamily;
    if (elementStyle.fontSize) style['fontSize'] = elementStyle.fontSize;
    if (elementStyle.fontWeight) style['fontWeight'] = elementStyle.fontWeight;
    if (elementStyle.letterSpacing) style['letterSpacing'] = elementStyle.letterSpacing;
    if (elementStyle.textAlign) style['textAlign'] = elementStyle.textAlign;
    if (elementStyle.marginTop) style['marginTop'] = elementStyle.marginTop;
    if (elementStyle.marginBottom) style['marginBottom'] = elementStyle.marginBottom;
    return style;
  }
}
