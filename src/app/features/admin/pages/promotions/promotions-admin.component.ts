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
  districts: any[] = [];       // distritos activos para el select
  loading = true;
  saving = false;
  editingId: number | null = null;
  showForm = false;
  form: FormGroup;
  confirmDeleteId: number | null = null;

  // ── Banners del sitio ────────────────────────────────────────────────────
  banners = {
    home_promo_banner:                 '',
    promos_hero_desktop:               '',
    promos_hero_mobile:                '',
    promos_main_banner:                '',
    promo_cliente_amigo_img:           '',
    promo_cliente_amigo_note:          '',
    promo_cliente_amigo_download_link: '',
  };
  disclaimerBlocks: { title: string; text: string }[] = [];
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
    this.loadDistricts();
  }

  // ── Distritos ────────────────────────────────────────────────────────────

  loadDistricts(): void {
    this.api.getDistricts().subscribe({
      next: (data) => {
        // Solo los activos, ordenados por sortOrder
        this.districts = data
          .filter((d: any) => d.isActive)
          .sort((a: any, b: any) => a.sortOrder - b.sortOrder);
      },
    });
  }

  // ── Banners ──────────────────────────────────────────────────────────────

  loadBanners(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        this.banners.home_promo_banner                 = s['home_promo_banner']                 ?? '';
        this.banners.promos_hero_desktop               = s['promos_hero_desktop']               ?? '';
        this.banners.promos_hero_mobile                = s['promos_hero_mobile']                ?? '';
        this.banners.promos_main_banner                = s['promos_main_banner']                ?? '';
        this.banners.promo_cliente_amigo_img           = s['promo_cliente_amigo_img']           ?? '';
        this.banners.promo_cliente_amigo_note          = s['promo_cliente_amigo_note']          ?? '';
        this.banners.promo_cliente_amigo_download_link = s['promo_cliente_amigo_download_link'] ?? '';
        if (s['promo_cliente_amigo_blocks']) {
          try { this.disclaimerBlocks = JSON.parse(s['promo_cliente_amigo_blocks']); } catch { this.disclaimerBlocks = []; }
        }
      },
    });
  }

  saveBanners(): void {
    this.savingBanners = true;
    const items = [
      { key: 'home_promo_banner',                 value: this.banners.home_promo_banner                 },
      { key: 'promos_hero_desktop',               value: this.banners.promos_hero_desktop               },
      { key: 'promos_hero_mobile',                value: this.banners.promos_hero_mobile                },
      { key: 'promos_main_banner',                value: this.banners.promos_main_banner                },
      { key: 'promo_cliente_amigo_img',           value: this.banners.promo_cliente_amigo_img           },
      { key: 'promo_cliente_amigo_note',          value: this.banners.promo_cliente_amigo_note          },
      { key: 'promo_cliente_amigo_blocks',        value: JSON.stringify(this.disclaimerBlocks)          },
      { key: 'promo_cliente_amigo_download_link', value: this.banners.promo_cliente_amigo_download_link },
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

  // ── Bloques del disclaimer ───────────────────────────────────────────────

  addDisclaimerBlock(): void {
    this.disclaimerBlocks = [...this.disclaimerBlocks, { title: '', text: '' }];
  }

  removeDisclaimerBlock(i: number): void {
    this.disclaimerBlocks = this.disclaimerBlocks.filter((_, idx) => idx !== i);
  }

  trackByIndex(i: number): number { return i; }
}
