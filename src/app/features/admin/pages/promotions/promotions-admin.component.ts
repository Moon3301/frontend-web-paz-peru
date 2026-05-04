import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-promotions',
  standalone: false,
  templateUrl: './promotions-admin.component.html',
  styleUrl: './promotions-admin.component.css',
})
export class PromotionsAdminComponent implements OnInit {
  promos: any[] = [];
  loading = true;
  saving = false;
  editingId: number | null = null;
  showForm = false;
  form: FormGroup;
  confirmDeleteId: number | null = null;

  // ── Banners del sitio ────────────────────────────────────────────────────
  banners = {
    home_promo_banner:   '',
    promos_hero_desktop: '',
    promos_hero_mobile:  '',
  };
  savingBanners = false;
  bannersSaved = false;

  constructor(private readonly api: AdminApiService, private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      title:       ['', Validators.required],
      district:    [''],
      description: [''],
      imageUrl:    [''],
      badgeText:   [''],
      projectLink: [''],
      disclaimer:  [''],
      isFeatured:  [false],
      isActive:    [true],
      sortOrder:   [0],
    });
  }

  ngOnInit(): void {
    this.load();
    this.loadBanners();
  }

  // ── Banners ──────────────────────────────────────────────────────────────

  loadBanners(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        this.banners.home_promo_banner   = s['home_promo_banner']   ?? '';
        this.banners.promos_hero_desktop = s['promos_hero_desktop'] ?? '';
        this.banners.promos_hero_mobile  = s['promos_hero_mobile']  ?? '';
      },
    });
  }

  saveBanners(): void {
    this.savingBanners = true;
    const items = [
      { key: 'home_promo_banner',   value: this.banners.home_promo_banner   },
      { key: 'promos_hero_desktop', value: this.banners.promos_hero_desktop },
      { key: 'promos_hero_mobile',  value: this.banners.promos_hero_mobile  },
    ];
    this.api.updateSettings(items).subscribe({
      next: () => {
        this.savingBanners = false;
        this.bannersSaved = true;
        setTimeout(() => { this.bannersSaved = false; }, 3000);
      },
      error: () => { this.savingBanners = false; },
    });
  }

  // ── Promociones ──────────────────────────────────────────────────────────

  load(): void {
    this.loading = true;
    this.api.getPromotions().subscribe({
      next: (d) => { this.promos = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  openNew(): void { this.editingId = null; this.form.reset({ isFeatured: false, isActive: true, sortOrder: 0 }); this.showForm = true; }
  openEdit(p: any): void { this.editingId = p.id; this.form.patchValue(p); this.showForm = true; }
  closeForm(): void { this.showForm = false; this.editingId = null; }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const op$ = this.editingId
      ? this.api.updatePromotion(this.editingId, this.form.value)
      : this.api.createPromotion(this.form.value);
    op$.subscribe({ next: () => { this.saving = false; this.closeForm(); this.load(); }, error: () => { this.saving = false; } });
  }

  confirmDelete(id: number): void { this.confirmDeleteId = id; }
  cancelDelete(): void { this.confirmDeleteId = null; }
  doDelete(id: number): void {
    this.api.deletePromotion(id).subscribe(() => { this.confirmDeleteId = null; this.load(); });
  }
}
