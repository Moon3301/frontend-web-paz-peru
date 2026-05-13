import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { Inject } from '@angular/core';
import { filter } from 'rxjs/operators';
import { ProjectDetail } from '../models/content.models';

export interface SeoPageConfig {
  title: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  noIndex?: boolean;
}

/** Valores por defecto — se sobreescriben desde cms_settings vía setDefaults() */
const FALLBACK_SITE_NAME    = 'Paz Inmobiliaria';
const FALLBACK_TITLE_TPL    = '%s | Paz Inmobiliaria';
const FALLBACK_DESCRIPTION  = 'Paz Inmobiliaria: más de 16 años construyendo departamentos en Lima. Proyectos en Miraflores, San Miguel, Pueblo Libre y La Victoria.';
const FALLBACK_OG_IMAGE     = '/images/hero/preview-video-home.jpg';
const FALLBACK_SITE_URL     = 'https://paz.pe';

@Injectable({ providedIn: 'root' })
export class SeoService {

  private titleTemplate       = FALLBACK_TITLE_TPL;
  private defaultDesc         = FALLBACK_DESCRIPTION;
  private defaultOgImage      = FALLBACK_OG_IMAGE;
  private siteUrl             = FALLBACK_SITE_URL;
  private siteName            = FALLBACK_SITE_NAME;
  private defaultRobots       = 'index, follow';
  private defaultKeywords     = '';
  private googleVerification  = '';

  constructor(
    private readonly titleSvc: Title,
    private readonly metaSvc:  Meta,
    private readonly router:   Router,
    @Inject(DOCUMENT) private readonly doc: Document,
  ) {
    // Actualiza el canonical en cada navegación exitosa
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: NavigationEnd) => {
        this.updateCanonical(this.siteUrl + e.urlAfterRedirects.split('?')[0]);
      });
  }

  // ── Configuración global desde cms_settings ──────────────────────────────

  setDefaults(settings: Record<string, string>): void {
    if (settings['seo_title_template'])    this.titleTemplate      = settings['seo_title_template'];
    if (settings['seo_default_desc'])      this.defaultDesc        = settings['seo_default_desc'];
    if (settings['seo_default_og_image'])  this.defaultOgImage     = settings['seo_default_og_image'];
    if (settings['seo_site_url'])          this.siteUrl            = settings['seo_site_url'];
    if (settings['seo_site_name'])         this.siteName           = settings['seo_site_name'];
    if (settings['seo_robots'])            this.defaultRobots      = settings['seo_robots'];
    if (settings['seo_default_keywords'])  this.defaultKeywords    = settings['seo_default_keywords'];
    if (settings['seo_google_verification']) {
      this.googleVerification = settings['seo_google_verification'];
      this.applyGoogleVerification();
    }
  }

  /** Inyecta o actualiza <meta name="google-site-verification"> en el <head>. */
  private applyGoogleVerification(): void {
    if (!this.googleVerification) return;
    this.setTag('name', 'google-site-verification', this.googleVerification);
  }

  // ── Setters públicos ──────────────────────────────────────────────────────

  /** Aplica SEO para páginas estáticas (home, contact, blog, etc.) */
  setPage(config: SeoPageConfig): void {
    const fullTitle = this.buildTitle(config.title);
    const desc      = config.description || this.defaultDesc;
    const ogImage   = config.ogImage     || this.defaultOgImage;
    const ogType    = config.ogType      || 'website';
    const canonical = this.siteUrl + this.router.url.split('?')[0];

    this.titleSvc.setTitle(fullTitle);
    this.updateCanonical(canonical);

    // Basic
    this.setTag('name', 'description',    desc);
    this.setTag('name', 'keywords',        config.keywords || this.defaultKeywords);
    this.setTag('name', 'robots',          config.noIndex ? 'noindex, nofollow' : this.defaultRobots);

    // Open Graph
    this.setTag('property', 'og:title',       fullTitle);
    this.setTag('property', 'og:description', desc);
    this.setTag('property', 'og:image',       ogImage);
    this.setTag('property', 'og:type',        ogType);
    this.setTag('property', 'og:url',         canonical);
    this.setTag('property', 'og:site_name',   this.siteName);

    // Twitter Card
    this.setTag('name', 'twitter:card',        'summary_large_image');
    this.setTag('name', 'twitter:title',       fullTitle);
    this.setTag('name', 'twitter:description', desc);
    this.setTag('name', 'twitter:image',       ogImage);
  }

  /** Aplica SEO para páginas de proyecto usando sus metadatos del backend */
  setProject(project: ProjectDetail): void {
    const name    = project.name;
    const title   = project.metaTitle   || `${name} | Departamentos en venta en Lima`;
    const desc    = project.metaDescription
                  || `Descubre ${name}, un proyecto inmobiliario de Paz Inmobiliaria en ${project.district}. Departamentos modernos en Lima.`;
    const keywords = project.metaKeywords
                  || `${name}, departamentos ${project.district}, inmobiliaria Peru, Paz Inmobiliaria`;
    const ogImage  = project.ogImageUrl  || project.thumbnailUrl || this.defaultOgImage;
    const canonical = this.siteUrl + this.router.url.split('?')[0];

    const fullTitle = this.buildTitle(title);

    this.titleSvc.setTitle(fullTitle);
    this.updateCanonical(canonical);

    this.setTag('name', 'description', desc);
    this.setTag('name', 'keywords',    keywords);
    this.setTag('name', 'robots',      this.defaultRobots);

    this.setTag('property', 'og:title',       fullTitle);
    this.setTag('property', 'og:description', desc);
    this.setTag('property', 'og:image',       ogImage);
    this.setTag('property', 'og:type',        'website');
    this.setTag('property', 'og:url',         canonical);
    this.setTag('property', 'og:site_name',   this.siteName);

    this.setTag('name', 'twitter:card',        'summary_large_image');
    this.setTag('name', 'twitter:title',       fullTitle);
    this.setTag('name', 'twitter:description', desc);
    this.setTag('name', 'twitter:image',       ogImage);
  }

  // ── Privados ──────────────────────────────────────────────────────────────

  private buildTitle(pageTitle: string): string {
    return this.titleTemplate.includes('%s')
      ? this.titleTemplate.replace('%s', pageTitle)
      : `${pageTitle} | ${this.siteName}`;
  }

  private setTag(attr: 'name' | 'property', key: string, content: string): void {
    const selector = `${attr}="${key}"`;
    if (this.metaSvc.getTag(selector)) {
      this.metaSvc.updateTag({ [attr]: key, content });
    } else {
      this.metaSvc.addTag({ [attr]: key, content });
    }
  }

  private updateCanonical(url: string): void {
    let link: HTMLLinkElement | null = this.doc.querySelector('link[rel="canonical"]');
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', url);
  }
}
