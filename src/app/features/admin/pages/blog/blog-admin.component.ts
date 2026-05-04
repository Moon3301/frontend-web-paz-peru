import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-admin-blog',
  standalone: false,
  templateUrl: './blog-admin.component.html',
  styleUrl: './blog-admin.component.css',
})
export class BlogAdminComponent implements OnInit {
  posts: any[] = [];
  loading = true;
  saving = false;
  editingId: number | null = null;
  showForm = false;
  confirmDeleteId: number | null = null;

  form: FormGroup;

  readonly categories = [
    'Financiamiento',
    'Primer departamento',
    'Estilo de vida',
    'Inspiracional',
    'Proyecto inmobiliario',
    'Tributario',
    'Arquitectura & Interiorismo',
  ];

  constructor(
    private readonly api: AdminApiService,
    private readonly fb: FormBuilder,
  ) {
    this.form = this.fb.group({
      title:         ['', Validators.required],
      slug:          ['', [Validators.required, Validators.pattern(/^[a-z0-9-]+$/)]],
      category:      [''],
      author:        [''],
      excerpt:       [''],
      coverImageUrl: [''],
      content:       [''],
      tags:          [''],   // string CSV → array al guardar
      readTime:      [5],
      isPublished:   [false],
      publishedAt:   [''],
    });
  }

  ngOnInit(): void { this.load(); }

  load(): void {
    this.loading = true;
    this.api.getBlogPosts().subscribe({
      next: (posts) => { this.posts = posts; this.loading = false; },
      error: () => { this.loading = false; },
    });
  }

  // ── Abrir formulario ───────────────────────────────────────────────────────

  openNew(): void {
    this.editingId = null;
    this.form.reset({ isPublished: false, readTime: 5 });
    this.showForm = true;
  }

  openEdit(post: any): void {
    this.editingId = post.id;
    this.form.patchValue({
      ...post,
      tags: Array.isArray(post.tags) ? post.tags.join(', ') : (post.tags ?? ''),
      publishedAt: post.publishedAt ? post.publishedAt.substring(0, 10) : '',
    });
    this.showForm = true;
  }

  closeForm(): void { this.showForm = false; this.editingId = null; }

  // ── Auto-generar slug desde el título ─────────────────────────────────────

  onTitleInput(): void {
    if (this.editingId !== null) return; // no sobreescribir al editar
    const title: string = this.form.get('title')?.value ?? '';
    const slug = title
      .toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    this.form.patchValue({ slug }, { emitEvent: false });
  }

  // ── Guardar ────────────────────────────────────────────────────────────────

  save(): void {
    if (this.form.invalid) return;
    this.saving = true;

    const raw = this.form.value;

    // Convertir tags CSV a array
    const tags: string[] = raw.tags
      ? (raw.tags as string).split(',').map((t: string) => t.trim()).filter(Boolean)
      : [];

    // Si se publica por primera vez sin fecha, usar now
    let publishedAt: string | null = raw.publishedAt || null;
    if (raw.isPublished && !publishedAt) {
      publishedAt = new Date().toISOString();
    }

    const payload = {
      ...raw,
      tags,
      readTime: raw.readTime ? +raw.readTime : null,
      publishedAt,
    };

    const op$ = this.editingId
      ? this.api.updateBlogPost(this.editingId, payload)
      : this.api.createBlogPost(payload);

    op$.subscribe({
      next: () => { this.saving = false; this.closeForm(); this.load(); },
      error: () => { this.saving = false; },
    });
  }

  // ── Publicar / despublicar rápido ─────────────────────────────────────────

  togglePublished(post: any): void {
    const isPublished = !post.isPublished;
    const publishedAt = isPublished && !post.publishedAt
      ? new Date().toISOString()
      : post.publishedAt;
    this.api.updateBlogPost(post.id, { isPublished, publishedAt }).subscribe(() => this.load());
  }

  // ── Eliminar ───────────────────────────────────────────────────────────────

  confirmDelete(id: number): void { this.confirmDeleteId = id; }
  cancelDelete(): void { this.confirmDeleteId = null; }

  doDelete(id: number): void {
    this.api.deleteBlogPost(id).subscribe(() => {
      this.confirmDeleteId = null;
      this.load();
    });
  }

  // ── Helpers ───────────────────────────────────────────────────────────────

  formatDate(iso: string | null | undefined): string {
    if (!iso) return '—';
    return iso.substring(0, 10);
  }
}
