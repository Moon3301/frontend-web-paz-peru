import {
  Component,
  OnInit,
  OnDestroy,
  ViewChildren,
  QueryList,
  ElementRef,
  AfterViewInit,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export interface HeroSlide {
  videoSrc: string;
  poster: string;
  title: string;
  titleBold: string;
  projectName: string;
  projectLabel: string;
  link: string;
}

@Component({
  selector: 'home-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChildren('videoRef') videoRefs!: QueryList<ElementRef<HTMLVideoElement>>;

  slides: HeroSlide[] = [
    {
      videoSrc: '/videos/video-home-pazcentenario-nuevo.mp4',
      poster: '/images/hero/preview-video-home.jpg',
      title: 'Bienvenido a tu',
      titleBold: 'nueva vida',
      projectName: 'PROYECTO ESCALA',
      projectLabel: 'SANTA CATALINA',
      link: '/departamentos-en-venta/la-victoria/escala'
    },
    {
      videoSrc: '/videos/video-home-pazcentenario-nuevo.mp4',
      poster: '/images/hero/preview-video-home.jpg',
      title: 'Tu hogar ideal',
      titleBold: 'te espera',
      projectName: 'PROYECTO TALLER',
      projectLabel: 'MIRAFLORES',
      link: '/departamentos-en-venta/miraflores/taller'
    },
    {
      videoSrc: '/videos/video-home-pazcentenario-nuevo.mp4',
      poster: '/images/hero/preview-video-home.jpg',
      title: 'Espacios para',
      titleBold: 'disfrutar la vida',
      projectName: 'PROYECTO SAVIA',
      projectLabel: 'PUEBLO LIBRE',
      link: '/departamentos-en-venta/pueblo-libre/savia'
    }
  ];

  currentSlide = 0;
  private autoplayInterval: any;
  private readonly AUTOPLAY_MS = 6000;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startAutoplay();
      // Slight delay to ensure DOM + media are ready before forcing play
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

  prev(): void {
    this.goTo(this.currentSlide - 1);
    this.resetAutoplay();
  }

  next(): void {
    this.goTo(this.currentSlide + 1);
    this.resetAutoplay();
  }

  private playActiveVideo(): void {
    const refs = this.videoRefs?.toArray();
    if (!refs?.length) return;

    refs.forEach((ref, i) => {
      const video = ref.nativeElement;
      // Ensure muted is set as a property (not just attribute) — required by some browsers
      video.muted = true;

      if (i === this.currentSlide) {
        const promise = video.play();
        if (promise !== undefined) {
          promise.catch(() => {
            // Retry once after a short delay if autoplay was blocked
            setTimeout(() => video.play().catch(() => {}), 400);
          });
        }
      } else {
        video.pause();
      }
    });
  }

  private startAutoplay(): void {
    this.autoplayInterval = setInterval(() => {
      this.goTo(this.currentSlide + 1);
    }, this.AUTOPLAY_MS);
  }

  private stopAutoplay(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private resetAutoplay(): void {
    this.stopAutoplay();
    this.startAutoplay();
  }
}
