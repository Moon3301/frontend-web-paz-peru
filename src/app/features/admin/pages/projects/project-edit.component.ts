import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';

export type SectionTab = 'hero' | 'promo_banner' | 'specs' | 'amenities' | 'gallery' | 'video' | 'virtual_tour' | 'ubication' | 'executives' | 'quoter';

const SECTION_TABS: { key: SectionTab; label: string }[] = [
  { key: 'hero',         label: 'Hero'            },
  { key: 'promo_banner', label: 'Banner Promo'    },
  { key: 'specs',        label: 'Specs'           },
  { key: 'amenities',    label: 'Amenidades'      },
  { key: 'gallery',      label: 'Galería'         },
  { key: 'video',        label: 'Video'           },
  { key: 'virtual_tour', label: 'Tour Virtual'    },
  { key: 'ubication',    label: 'Ubicación'       },
  { key: 'executives',   label: 'Ejecutivos'      },
  { key: 'quoter',       label: 'Cotizador'       },
];

@Component({
  selector: 'app-project-edit',
  standalone: false,
  templateUrl: './project-edit.component.html',
  styleUrl: './project-edit.component.css',
})
export class ProjectEditComponent implements OnInit {
  readonly tabs = SECTION_TABS;
  activeTab: SectionTab = 'hero';
  isNew = false;
  loading = true;
  saving = false;
  saveSuccess = false;

  projectId: number | null = null;
  projectForm: FormGroup;
  sections: Record<string, any> = {};

  districts: { slug: string; label: string }[] = [];

  statusOptions = ['LANZAMIENTO', 'EN CONSTRUCCIÓN', 'ENTREGA', 'AGOTADO'];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly fb: FormBuilder,
    private readonly api: AdminApiService,
  ) {
    this.projectForm = this.fb.group({
      name:             ['', Validators.required],
      district:         ['', Validators.required],
      status:           ['LANZAMIENTO', Validators.required],
      slug:             ['', Validators.required],
      thumbnailUrl:     [''],
      logoUrl:          [''],
      sperantProjectId: [null],
      sortOrder:        [0],
    });
  }

  ngOnInit(): void {
    // Load districts from backend
    this.api.getDistricts().subscribe({
      next: (ds) => { this.districts = ds.map((d: any) => ({ slug: d.slug, label: d.label })); },
    });

    const idParam = this.route.snapshot.paramMap.get('id');
    this.isNew = idParam === 'new';

    if (this.isNew) {
      this.loading = false;
      return;
    }

    this.projectId = parseInt(idParam!, 10);
    this.api.getProject(this.projectId).subscribe({
      next: (p) => {
        this.projectForm.patchValue(p);
        this.api.getSections(this.projectId!).subscribe({
          next: (sects) => {
            sects.forEach(s => {
              try { this.sections[s.sectionKey] = JSON.parse(s.config); }
              catch { this.sections[s.sectionKey] = s.config; }
            });
            this.loading = false;
          },
          error: () => { this.loading = false; },
        });
      },
      error: () => { this.loading = false; },
    });
  }

  setTab(tab: SectionTab): void {
    this.activeTab = tab;
  }

  getSectionConfig(key: SectionTab): any {
    return this.sections[key] || {};
  }

  updateSection(key: SectionTab, config: any): void {
    this.sections[key] = config;
  }

  saveProject(): void {
    if (this.projectForm.invalid) return;
    this.saving = true;

    const data = this.projectForm.value;

    const save$ = this.isNew
      ? this.api.createProject(data)
      : this.api.updateProject(this.projectId!, data);

    save$.subscribe({
      next: (project) => {
        const id = project.id;
        const sectionKeys = Object.keys(this.sections) as SectionTab[];
        if (sectionKeys.length === 0) {
          this.finishSave(id);
          return;
        }
        let remaining = sectionKeys.length;
        sectionKeys.forEach(key => {
          this.api.upsertSection(id, key, this.sections[key]).subscribe({
            next: () => { if (--remaining === 0) this.finishSave(id); },
            error: () => { if (--remaining === 0) this.finishSave(id); },
          });
        });
      },
      error: () => { this.saving = false; },
    });
  }

  private finishSave(id: number): void {
    this.saving = false;
    this.saveSuccess = true;
    if (this.isNew) {
      this.router.navigate(['/admin/projects', id]);
    }
    setTimeout(() => this.saveSuccess = false, 3000);
  }

  saveSection(key: SectionTab): void {
    if (!this.projectId) return;
    this.saving = true;
    this.api.upsertSection(this.projectId, key, this.sections[key]).subscribe({
      next: () => {
        this.saving = false;
        this.saveSuccess = true;
        setTimeout(() => this.saveSuccess = false, 3000);
      },
      error: () => { this.saving = false; },
    });
  }

  goBack(): void {
    this.router.navigate(['/admin/projects']);
  }

  autoSlug(): void {
    const name = this.projectForm.get('name')?.value || '';
    const slug = name.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/\s+/g, '-')
      .replace(/[^a-z0-9-]/g, '');
    this.projectForm.patchValue({ slug });
  }
}
