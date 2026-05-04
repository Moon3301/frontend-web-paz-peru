import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-delivered-projects',
  standalone: false,
  templateUrl: './delivered-projects-admin.component.html',
  styleUrl: './delivered-projects-admin.component.css',
})
export class DeliveredProjectsAdminComponent implements OnInit {
  items: any[] = [];
  loading = true;
  saving = false;
  editingId: number | null = null;
  showForm = false;
  confirmDeleteId: number | null = null;
  form: FormGroup;

  constructor(
    private readonly api: AdminApiService,
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      name:      ['', Validators.required],
      district:  [''],
      address:   [''],
      rooms:     [''],
      imageUrl:  [''],
      isActive:  [true],
      sortOrder: [0],
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.api.getDeliveredProjects().subscribe({
      next: (d) => { this.items = d; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  openNew(): void {
    this.editingId = null;
    this.form.reset({ isActive: true, sortOrder: 0 });
    this.showForm = true;
  }

  openEdit(item: any): void {
    this.editingId = item.id;
    this.form.patchValue(item);
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; this.editingId = null; }

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;
    const op$ = this.editingId
      ? this.api.updateDeliveredProject(this.editingId, this.form.value)
      : this.api.createDeliveredProject(this.form.value);
    op$.subscribe({
      next: () => { this.saving = false; this.closeForm(); this.load(); },
      error: () => { this.saving = false; },
    });
  }

  confirmDelete(id: number): void { this.confirmDeleteId = id; }
  cancelDelete(): void { this.confirmDeleteId = null; }
  doDelete(id: number): void {
    this.api.deleteDeliveredProject(id).subscribe(() => {
      this.confirmDeleteId = null;
      this.load();
    });
  }
}
