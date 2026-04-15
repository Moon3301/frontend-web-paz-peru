import {
  Component,
  Input,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { HeroConfig } from '../../models/project-config.interface';

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
    if (pos.top    !== undefined) style['top']    = pos.top;
    if (pos.bottom !== undefined) style['bottom'] = pos.bottom;
    if (pos.left   !== undefined) style['left']   = pos.left;
    if (pos.right  !== undefined) style['right']  = pos.right;
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
}
