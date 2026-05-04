import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-districts',
  standalone: false,
  templateUrl: './districts.component.html',
  styleUrl: './districts.component.css',
})
export class DistrictsComponent implements OnInit {
  districts: any[] = [];
  loading = true;
  saving = false;
  editingId: number | null = null;
  showForm = false;
  form: FormGroup;

  constructor(private readonly api: AdminApiService, private readonly fb: FormBuilder) {
    this.form = this.fb.group({
      label:    ['', Validators.required],
      slug:     ['', Validators.required],
      mapImage: [''],
      sortOrder:[0],
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.api.getDistricts().subscribe({
      next: (d) => { this.districts = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form.reset({ sortOrder: 0 });
    this.showForm = true;
  }

  openEdit(d: any): void {
    this.editingId = d.id;
    this.form.patchValue(d);
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; this.editingId = null; }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const op$ = this.editingId
      ? this.api.updateDistrict(this.editingId, this.form.value)
      : this.api.createDistrict(this.form.value);
    op$.subscribe({ next: () => { this.saving = false; this.closeForm(); this.load(); }, error: () => { this.saving = false; } });
  }

  toggle(d: any): void {
    this.api.toggleDistrict(d.id).subscribe({
      next: (updated: any) => { d.isActive = updated.isActive; },
    });
  }

  autoSlug(): void {
    const label = this.form.get('label')?.value || '';
    const slug = label.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/\s+/g,'-').replace(/[^a-z0-9-]/g,'');
    this.form.patchValue({ slug });
  }
}
