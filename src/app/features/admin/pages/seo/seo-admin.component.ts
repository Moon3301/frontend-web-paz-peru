import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';

interface PageSeoEntry {
  key:         string;
  label:       string;
  icon:        string;
  title:       string;
  description: string;
  keywords:    string;
  saving?:     boolean;
  saved?:      boolean;
}

interface ProjectSeoEntry {
  id:              number;
  name:            string;
  slug:            string;
  metaTitle:       string;
  metaDescription: string;
  metaKeywords:    string;
  ogImageUrl:      string;
  saving:          boolean;
  saved:           boolean;
}

type Tab = 'global' | 'pages' | 'projects';
type CharStatus = 'ok' | 'warn' | 'over';

@Component({
  selector: 'app-seo-admin',
  standalone: false,
  templateUrl: './seo-admin.component.html',
  styleUrl:    './seo-admin.component.css',
})
export class SeoAdminComponent implements OnInit {

  // ── Estado de tabs ────────────────────────────────────────────────────────
  activeTab: Tab = 'global';

  // ── SEO Global ────────────────────────────────────────────────────────────
  titleTemplate      = '%s | Paz Inmobiliaria';
  defaultDesc        = '';
  defaultKeywords    = '';
  defaultOgImage     = '';
  siteUrl            = 'https://paz.pe';
  siteName           = 'Paz Inmobiliaria';
  googleVerification = '';
  robots             = 'index, follow';

  savingGlobal = false;
  savedGlobal  = false;

  // ── SEO por página ────────────────────────────────────────────────────────
  pages: PageSeoEntry[] = [
    { key: 'home',         label: 'Home',                   icon: '🏠', title: '', description: '', keywords: '' },
    { key: 'projects',     label: 'Departamentos en Venta', icon: '🏗️', title: '', description: '', keywords: '' },
    { key: 'about',        label: 'Nosotros',               icon: '🏢', title: '', description: '', keywords: '' },
    { key: 'promotions',   label: 'Promociones',            icon: '🎯', title: '', description: '', keywords: '' },
    { key: 'blog',         label: 'Blog',                   icon: '📝', title: '', description: '', keywords: '' },
    { key: 'events',       label: 'Eventos y Ferias',       icon: '📅', title: '', description: '', keywords: '' },
    { key: 'contact',      label: 'Contacto',               icon: '📞', title: '', description: '', keywords: '' },
    { key: 'reclamaciones',label: 'Libro de Reclamaciones', icon: '📋', title: '', description: '', keywords: '' },
  ];

  activePage: PageSeoEntry = this.pages[0];

  // ── SEO por proyecto ──────────────────────────────────────────────────────
  projects: ProjectSeoEntry[] = [];
  activeProject: ProjectSeoEntry | null = null;
  loadingProjects = true;

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void {
    this.loadAll();
  }

  // ── Navegación ────────────────────────────────────────────────────────────

  setTab(tab: Tab): void {
    this.activeTab = tab;
  }

  selectPage(page: PageSeoEntry): void {
    this.activePage = page;
  }

  selectProject(p: ProjectSeoEntry): void {
    this.activeProject = p;
  }

  // ── Carga ─────────────────────────────────────────────────────────────────

  private loadAll(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        this.titleTemplate      = s['seo_title_template']     || '%s | Paz Inmobiliaria';
        this.defaultDesc        = s['seo_default_desc']        || '';
        this.defaultKeywords    = s['seo_default_keywords']    || '';
        this.defaultOgImage     = s['seo_default_og_image']    || '';
        this.siteUrl            = s['seo_site_url']            || 'https://paz.pe';
        this.siteName           = s['seo_site_name']           || 'Paz Inmobiliaria';
        this.googleVerification = s['seo_google_verification'] || '';
        this.robots             = s['seo_robots']              || 'index, follow';

        this.pages.forEach(p => {
          p.title       = s[`seo_page_${p.key}_title`]       || '';
          p.description = s[`seo_page_${p.key}_description`] || '';
          p.keywords    = s[`seo_page_${p.key}_keywords`]    || '';
        });
      },
    });

    this.api.getProjects().subscribe({
      next: (list) => {
        this.projects = list.map(p => ({
          id:              p.id,
          name:            p.name,
          slug:            p.slug,
          metaTitle:       p.metaTitle       ?? '',
          metaDescription: p.metaDescription ?? '',
          metaKeywords:    p.metaKeywords    ?? '',
          ogImageUrl:      p.ogImageUrl      ?? '',
          saving: false,
          saved:  false,
        }));
        if (this.projects.length) this.activeProject = this.projects[0];
        this.loadingProjects = false;
      },
      error: () => { this.loadingProjects = false; },
    });
  }

  // ── Guardar ───────────────────────────────────────────────────────────────

  saveGlobal(): void {
    this.savingGlobal = true;
    this.api.updateSettings([
      { key: 'seo_title_template',     value: this.titleTemplate      },
      { key: 'seo_default_desc',       value: this.defaultDesc        },
      { key: 'seo_default_keywords',   value: this.defaultKeywords    },
      { key: 'seo_default_og_image',   value: this.defaultOgImage     },
      { key: 'seo_site_url',           value: this.siteUrl            },
      { key: 'seo_site_name',          value: this.siteName           },
      { key: 'seo_google_verification',value: this.googleVerification },
      { key: 'seo_robots',             value: this.robots             },
    ]).subscribe({
      next:  () => { this.savingGlobal = false; this.savedGlobal = true; setTimeout(() => this.savedGlobal = false, 3000); },
      error: () => { this.savingGlobal = false; },
    });
  }

  savePage(page: PageSeoEntry): void {
    page.saving = true;
    this.api.updateSettings([
      { key: `seo_page_${page.key}_title`,       value: page.title       },
      { key: `seo_page_${page.key}_description`, value: page.description },
      { key: `seo_page_${page.key}_keywords`,    value: page.keywords    },
    ]).subscribe({
      next:  () => { page.saving = false; page.saved = true; setTimeout(() => page.saved = false, 3000); },
      error: () => { page.saving = false; },
    });
  }

  saveProject(p: ProjectSeoEntry): void {
    p.saving = true;
    this.api.updateProject(p.id, {
      metaTitle:       p.metaTitle       || null,
      metaDescription: p.metaDescription || null,
      metaKeywords:    p.metaKeywords    || null,
      ogImageUrl:      p.ogImageUrl      || null,
    }).subscribe({
      next:  () => { p.saving = false; p.saved = true; setTimeout(() => p.saved = false, 3000); },
      error: () => { p.saving = false; },
    });
  }

  // ── Helpers de caracteres ─────────────────────────────────────────────────

  charStatus(value: string, max: number): CharStatus {
    const len = value?.length ?? 0;
    if (len === 0)       return 'ok';
    if (len > max)       return 'over';
    if (len > max * 0.9) return 'warn';
    return 'ok';
  }

  charPercent(value: string, max: number): number {
    return Math.min(((value?.length ?? 0) / max) * 100, 100);
  }

  // ── Helpers de completitud ────────────────────────────────────────────────

  pageStatus(page: PageSeoEntry): 'empty' | 'partial' | 'full' {
    const hasTitle = !!page.title;
    const hasDesc  = !!page.description;
    if (!hasTitle && !hasDesc) return 'empty';
    if (!hasTitle || !hasDesc) return 'partial';
    return 'full';
  }

  projectStatus(p: ProjectSeoEntry): 'empty' | 'partial' | 'full' {
    const hasTitle = !!p.metaTitle;
    const hasDesc  = !!p.metaDescription;
    if (!hasTitle && !hasDesc) return 'empty';
    if (!hasTitle || !hasDesc) return 'partial';
    return 'full';
  }

  get pagesConfigured(): number {
    return this.pages.filter(p => this.pageStatus(p) === 'full').length;
  }

  get projectsConfigured(): number {
    return this.projects.filter(p => this.projectStatus(p) === 'full').length;
  }

  trackById(_: number, item: { id: number }): number { return item.id; }
  trackByKey(_: number, item: { key: string }): string { return item.key; }
}
