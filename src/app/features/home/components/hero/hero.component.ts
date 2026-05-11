import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  OnChanges,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface HeroSlide {
  /** 'video' muestra un <video> en bucle; 'image' muestra una imagen fija */
  type: 'video' | 'image';
  /** URL del vídeo (.mp4) o de la imagen */
  mediaSrc: string;
  /** Imagen de portada/poster (solo para type='video') */
  poster?: string;
  title: string;
  titleBold: string;
  projectName: string;
  projectLabel: string;
  link: string;
}

/** Slides por defecto mientras no haya datos del CMS.
 *  Exportado para que HomeComponent pueda usarlo como valor inicial. */
export const DEFAULT_SLIDES: HeroSlide[] = [
  {
    type:         'video',
    mediaSrc:     '/videos/video-home-pazcentenario-nuevo.mp4',
    poster:       '/images/hero/preview-video-home.jpg',
    title:        'Bienvenido a tu',
    titleBold:    'nueva vida',
    projectName:  'PROYECTO ESCALA',
    projectLabel: 'SANTA CATALINA',
    link:         '/departamentos-en-venta/la-victoria/escala',
  },
  {
    type:         'video',
    mediaSrc:     '/videos/video-home-pazcentenario-nuevo.mp4',
    poster:       '/images/hero/preview-video-home.jpg',
    title:        'Tu hogar ideal',
    titleBold:    'te espera',
    projectName:  'PROYECTO TALLER',
    projectLabel: 'MIRAFLORES',
    link:         '/departamentos-en-venta/miraflores/taller',
  },
  {
    type:         'video',
    mediaSrc:     '/videos/video-home-pazcentenario-nuevo.mp4',
    poster:       '/images/hero/preview-video-home.jpg',
    title:        'Espacios para',
    titleBold:    'disfrutar la vida',
    projectName:  'PROYECTO SAVIA',
    projectLabel: 'PUEBLO LIBRE',
    link:         '/departamentos-en-venta/pueblo-libre/savia',
  },
];

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy {

  /** Slides inyectados desde HomeComponent (cargados del CMS).
   *  Si no se reciben, se usan los DEFAULT_SLIDES. */
  @Input() slides: HeroSlide[] = DEFAULT_SLIDES;

  @ViewChildren('videoRef') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  currentSlide = 0;
  private autoplayInterval: any;
  private readonly AUTOPLAY_MS = 6000;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngOnChanges(): void {
    // Cuando cambia el input (datos CMS cargados), reiniciar el slider
    this.currentSlide = 0;
    if (isPlatformBrowser(this.platformId)) {
      this.resetAutoplay();
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
      setTimeout(() => this.playActiveVideo(), 150);
    }
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  goTo(index: number): void {
    this.currentSlide = (index + this.slides.length) % this.slides.length;
    if (isPlatformBrowser(this.platformId)) {
      this.playActiveVideo();
    }
  }

  prev(): void { this.goTo(this.currentSlide - 1); this.resetAutoplay(); }
  next(): void { this.goTo(this.currentSlide + 1); this.resetAutoplay(); }

  private playActiveVideo(): void {
    const refs = this.videoRefs?.toArray();
    if (!refs?.length) return;
    refs.forEach((ref, i) => {
      const video = ref.nativeElement;
      video.muted = true;
      if (i === this.currentSlide) {
        const p = video.play();
        if (p !== undefined) {
          p.catch(() => setTimeout(() => video.play().catch(() => {}), 400));
        }
      } else {
        video.pause();
      }
    });
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => this.goTo(this.currentSlide + 1), this.AUTOPLAY_MS);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) clearInterval(this.autoplayInterval);
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
