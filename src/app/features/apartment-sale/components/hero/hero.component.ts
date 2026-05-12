import {
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HeroConfig, HeroElementStyle, HeroLogoSize } from '../../models/project-config.interface';

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
   * Convierte textPosition del config en un objeto ngStyle para el bloque de texto.
   * Solo sobreescribe las propiedades definidas; el resto usa el default del CSS.
   */
  getTextPositionStyle(): Record<string, string> {
    const pos = this.config.textPosition;
    if (!pos) return {};
    const style: Record<string, string> = {};
    if (pos.top !== undefined) style['top'] = pos.top;
    if (pos.bottom !== undefined) style['bottom'] = pos.bottom;
    if (pos.left !== undefined) style['left'] = pos.left;
    if (pos.right !== undefined) style['right'] = pos.right;
    return style;
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
   * Convierte logoSize del config en CSS custom properties para controlar el tamaño
   * del logo por breakpoint. Se aplica vía [ngStyle] al .hero__logo-wrapper.
   * Las propiedades solo se emiten si están definidas; el resto usa el default del CSS.
   *
   * Variables generadas:
   *   --logo-w, --logo-h          → breakpoint standard (1025–1439 px)
   *   --logo-w-xl, --logo-h-xl    → breakpoint desktop (≥1440 px)
   *   --logo-w-tablet, --logo-h-tablet → tablet (768–1024 px)
   *   --logo-w-mobile, --logo-h-mobile → mobile (≤767 px)
   *   --logo-w-sm, --logo-h-sm    → mobile pequeño (≤480 px)
   */
  getLogoCssVars(): Record<string, string> {
    const s: HeroLogoSize | undefined = this.config.logoSize;
    if (!s) return {};
    const v: Record<string, string> = {};
    if (s.standard?.width) v['--logo-w'] = s.standard.width;
    if (s.standard?.height) v['--logo-h'] = s.standard.height;
    if (s.desktop?.width) v['--logo-w-xl'] = s.desktop.width;
    if (s.desktop?.height) v['--logo-h-xl'] = s.desktop.height;
    if (s.tablet?.width) v['--logo-w-tablet'] = s.tablet.width;
    if (s.tablet?.height) v['--logo-h-tablet'] = s.tablet.height;
    if (s.mobile?.width) v['--logo-w-mobile'] = s.mobile.width;
    if (s.mobile?.height) v['--logo-h-mobile'] = s.mobile.height;
    if (s.mobileSm?.width) v['--logo-w-sm'] = s.mobileSm.width;
    if (s.mobileSm?.height) v['--logo-h-sm'] = s.mobileSm.height;
    return v;
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
