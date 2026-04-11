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

  goTo(index: number) {
    this.activeIndex = index;
  }

  prev() {
    this.activeIndex =
      (this.activeIndex - 1 + this.config.slides.length) %
      this.config.slides.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.config.slides.length;
  }
}
