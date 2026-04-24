import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Executive } from '../../models/project-config.interface';

@Component({
  selector: 'app-executive-banner',
  standalone: false,
  templateUrl: './executive-banner.component.html',
  styleUrl: './executive-banner.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExecutiveBannerComponent implements OnInit, OnDestroy {
  @Input() executives: Executive[] = [];

  activeIndex = 0;
  private timer: ReturnType<typeof setInterval> | null = null;

  /** Intervalo de rotación en ms */
  private readonly INTERVAL = 6000;

  constructor(private readonly cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    if (this.executives.length > 1) {
      this.timer = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.executives.length;
        this.cdr.markForCheck();
      }, this.INTERVAL);
    }
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  get current(): Executive {
    return this.executives[this.activeIndex];
  }

  goTo(index: number): void {
    this.activeIndex = index;
    // Reiniciar el timer para que no salte justo después de una selección manual
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = setInterval(() => {
        this.activeIndex = (this.activeIndex + 1) % this.executives.length;
        this.cdr.markForCheck();
      }, this.INTERVAL);
    }
    this.cdr.markForCheck();
  }

  /** Genera el enlace de WhatsApp con el número del ejecutivo actual */
  get whatsappUrl(): string {
    const number = this.current.phone.replace(/\D/g, '');
    return `https://wa.me/51${number}`;
  }

  /** Determina el rol mostrado según el nombre (femenino/masculino) */
  getRole(exec: Executive): string {
    if (exec.role) return exec.role;
    // Nombres que terminan en -a son típicamente femeninos
    const firstName = exec.name.trim().split(' ')[0];
    const isFemale = firstName.toLowerCase().endsWith('a') ||
                     firstName.toLowerCase().endsWith('ia') ||
                     firstName.toLowerCase().endsWith('ea');
    return isFemale ? 'Ejecutiva de Ventas' : 'Ejecutivo de Ventas';
  }
}
