import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';
import { BlogPost } from '../../core/models/content.models';

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent implements OnInit {
  readonly searchControl = new FormControl('');
  selectedCategory: string | null = null;

  allPosts: BlogPost[] = [];
  filteredPosts: BlogPost[] = [];
  loading = true;

  /** Categorías derivadas dinámicamente de los posts cargados. */
  get categories(): string[] {
    const cats = new Set(
      this.allPosts.map(p => p.category).filter((c): c is string => !!c)
    );
    return Array.from(cats).sort();
  }

  readonly sidebarProjects = [
    { name: 'Central Apartments', district: 'Miraflores',     link: '/departamentos-en-venta/miraflores/central' },
    { name: 'Patio la Paz',       district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/patio-la-paz' },
    { name: 'Amalfi',             district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/amalfi' },
    { name: 'Escala',             district: 'Santa Catalina', link: '/departamentos-en-venta/la-victoria/escala' },
    { name: 'Savia',              district: 'Pueblo Libre',   link: '/departamentos-en-venta/pueblo-libre/savia' },
    { name: 'Real',               district: 'La Victoria',    link: '/departamentos-en-venta/la-victoria/real' },
    { name: 'Serena',             district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/serena' },
    { name: 'Taller',             district: 'Miraflores',     link: '/departamentos-en-venta/miraflores/taller' },
    { name: 'Florencia',          district: 'Pueblo Libre',   link: '/departamentos-en-venta/pueblo-libre/florencia' },
  ];

  readonly pageSize = 6;
  currentPage = 1;

  constructor(
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => this.seo.setPage({
        title:       s['seo_page_blog_title']       || 'Blog',
        description: s['seo_page_blog_description'] || 'Artículos, consejos e información sobre compra de departamentos, financiamiento y estilo de vida en Lima.',
        keywords:    s['seo_page_blog_keywords']    || 'blog inmobiliario, consejos departamentos, financiamiento vivienda, Lima',
      }),
    });

    this.content.getBlogPosts().subscribe({
      next: (posts) => {
        this.allPosts = posts;
        this.loading = false;
        this.applyFilters();
      },
      error: () => {
        this.loading = false;
      },
    });

    this.searchControl.valueChanges.subscribe(() => {
      this.currentPage = 1;
      this.applyFilters();
    });
  }

  private applyFilters(): void {
    const q = (this.searchControl.value ?? '').toLowerCase().trim();
    this.filteredPosts = this.allPosts.filter((p) => {
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        (p.excerpt ?? '').toLowerCase().includes(q);
      // Filtra por category (campo principal) o tags como fallback
      const matchesCat =
        !this.selectedCategory ||
        p.category === this.selectedCategory ||
        p.tags.includes(this.selectedCategory);
      return matchesSearch && matchesCat;
    });
  }

  toggleCategory(cat: string): void {
    this.selectedCategory = this.selectedCategory === cat ? null : cat;
    this.currentPage = 1;
    this.applyFilters();
  }

  get pagedPosts(): BlogPost[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.filteredPosts.slice(start, start + this.pageSize);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPosts.length / this.pageSize);
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  formatDate(iso: string | null): string {
    if (!iso) return '';
    const d = new Date(iso);
    if (isNaN(d.getTime())) return '';
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }
}
