import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';
import { HeroSlide } from '../../../home/components/hero/hero.component';
import { HistoryStat } from '../../../home/components/our-history/our-history.component';

@Component({
  selector: 'app-home-admin',
  standalone: false,
  templateUrl: './home-admin.component.html',
  styleUrl:    './home-admin.component.css',
})
export class HomeAdminComponent implements OnInit {

  // ── Hero slides ──────────────────────────────────────────────────────────
  heroSlides: HeroSlide[] = [];

  // ── Nuestra Historia ─────────────────────────────────────────────────────
  historyText      = '';
  historyYoutubeId = '';
  historyStats: HistoryStat[] = [
    { value: '16 años', label: 'Cumpliendo sueños'        },
    { value: '+8,700',  label: 'Departamentos entregados' },
    { value: '+29',     label: 'Proyectos desarrollados'  },
  ];

  // ── Ubícanos ─────────────────────────────────────────────────────────────
  ubicSubtitle = '';
  ubicMap      = '';

  // ── Estado UI ────────────────────────────────────────────────────────────
  saving: Record<string, boolean> = { hero: false, history: false, ubication: false };
  saved:  Record<string, boolean> = { hero: false, history: false, ubication: false };

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void { this.load(); }

  // ─────────────────────────────────────────────────────────────────────────

  load(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        // Hero
        if (s['home_hero_slides']) {
          try { this.heroSlides = JSON.parse(s['home_hero_slides']); } catch { this.heroSlides = []; }
        }
        // Historia
        this.historyText      = s['home_history_text']       ?? '';
        this.historyYoutubeId = s['home_history_youtube_id'] ?? '8QVPyM1CRaY';
        if (s['home_history_stats']) {
          try { this.historyStats = JSON.parse(s['home_history_stats']); } catch {}
        }
        // Ubícanos
        this.ubicSubtitle = s['home_ubication_subtitle'] ?? '';
        this.ubicMap      = s['home_ubication_map']      ?? '';
      },
    });
  }

  // ── Hero ─────────────────────────────────────────────────────────────────

  addSlide(): void {
    this.heroSlides = [
      ...this.heroSlides,
      { type: 'video', mediaSrc: '', poster: '', title: '', titleBold: '', projectName: '', projectLabel: '', link: '' },
    ];
  }

  removeSlide(i: number): void {
    this.heroSlides = this.heroSlides.filter((_, idx) => idx !== i);
  }

  moveSlide(i: number, dir: -1 | 1): void {
    const j = i + dir;
    if (j < 0 || j >= this.heroSlides.length) return;
    const arr = [...this.heroSlides];
    [arr[i], arr[j]] = [arr[j], arr[i]];
    this.heroSlides = arr;
  }

  saveHero(): void {
    this.doSave('hero', [
      { key: 'home_hero_slides', value: JSON.stringify(this.heroSlides) },
    ]);
  }

  // ── Historia ─────────────────────────────────────────────────────────────

  saveHistory(): void {
    this.doSave('history', [
      { key: 'home_history_text',       value: this.historyText      },
      { key: 'home_history_youtube_id', value: this.historyYoutubeId },
      { key: 'home_history_stats',      value: JSON.stringify(this.historyStats) },
    ]);
  }

  // ── Ubícanos ─────────────────────────────────────────────────────────────

  saveUbication(): void {
    this.doSave('ubication', [
      { key: 'home_ubication_subtitle', value: this.ubicSubtitle },
      { key: 'home_ubication_map',      value: this.ubicMap      },
    ]);
  }

  // ─────────────────────────────────────────────────────────────────────────

  private doSave(section: string, items: { key: string; value: string }[]): void {
    this.saving[section] = true;
    this.api.updateSettings(items).subscribe({
      next: () => {
        this.saving[section] = false;
        this.saved[section]  = true;
        setTimeout(() => { this.saved[section] = false; }, 3000);
      },
      error: () => { this.saving[section] = false; },
    });
  }

  trackByIndex(i: number): number { return i; }
}
