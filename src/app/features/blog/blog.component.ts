import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// Interface matches the shape of the future JSON data source.
// When integrating an API/JSON, replace `allPosts` with an injected service call.
export interface BlogPost {
  title:    string;
  slug:     string;
  image:    string;
  excerpt:  string;
  date:     string;       // ISO string: "2025-03-15"
  readTime: number;       // minutes
  tags:     string[];
  category: string;
}

@Component({
  selector: 'app-blog',
  standalone: false,
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent implements OnInit {

  readonly searchControl = new FormControl('');
  selectedCategory: string | null = null;

  // ---------------------------------------------------------------------------
  // Data — swap this array for a service.getAll() when the JSON source is ready
  // ---------------------------------------------------------------------------
  readonly allPosts: BlogPost[] = [
    {
      title:    '¿Por qué es una estrategia inteligente comprar tu depa en preventa?',
      slug:     'por-que-es-una-estrategia-inteligente-comprar-tu-depa-en-preventa',
      image:    '/images/blog/thumb-preventa.jpg',
      excerpt:  'Comprar en preventa es una de las decisiones más inteligentes en el mercado inmobiliario. Descubre por qué y cómo sacarle el máximo provecho.',
      date:     '2025-03-15',
      readTime: 5,
      tags:     ['Financiamiento', 'Primer departamento'],
      category: 'Blog'
    },
    {
      title:    'Escala: Descubre las razones para vivir en Santa Catalina',
      slug:     'escala-descubre-las-razones-para-vivir-en-santa-catalina',
      image:    '/images/blog/thumb-escala-blog.jpg',
      excerpt:  'Santa Catalina es uno de los distritos con mayor proyección de Lima. Conoce todo lo que tiene para ofrecerte el proyecto Escala.',
      date:     '2025-03-02',
      readTime: 4,
      tags:     ['Proyecto inmobiliario', 'Estilo de vida'],
      category: 'Blog'
    },
    {
      title:    'Cómo los proyectos verdes aumentan el valor de tu inversión inmobiliaria',
      slug:     'como-los-proyectos-verdes-aumentan-el-valor-de-tu-inversion-inmobiliaria',
      image:    '/images/blog/thumb-proyectos-verdes.jpg',
      excerpt:  'La sostenibilidad ya no es una tendencia, es una ventaja competitiva. Aprende cómo las áreas verdes impactan positivamente el valor de tu depa.',
      date:     '2025-02-18',
      readTime: 6,
      tags:     ['Financiamiento', 'Proyecto inmobiliario'],
      category: 'Blog'
    },
    {
      title:    '¿Cómo elegir tu nuevo departamento según tu estilo de vida?',
      slug:     'como-elegir-tu-nuevo-departamento-segun-tu-estilo-de-vida',
      image:    '/images/blog/thumb-estilo-vida.jpg',
      excerpt:  'Cada persona tiene necesidades distintas. Te ayudamos a identificar qué tipo de departamento encaja mejor con tu rutina y tus prioridades.',
      date:     '2025-02-05',
      readTime: 4,
      tags:     ['Estilo de vida', 'Primer departamento'],
      category: 'Blog'
    },
    {
      title:    'Consejos para invertir en bienes raíces',
      slug:     'consejos-para-invertir-en-bienes-raices',
      image:    '/images/blog/thumb-invertir.jpg',
      excerpt:  'Invertir en inmuebles sigue siendo una de las opciones más seguras del mercado. Aquí los consejos clave para hacerlo bien desde el primer paso.',
      date:     '2025-01-22',
      readTime: 7,
      tags:     ['Financiamiento', 'Inspiracional'],
      category: 'Blog'
    },
    {
      title:    'Descubre los atractivos de Miraflores, un distrito ideal para vivir',
      slug:     'descubre-los-atractivos-de-miraflores-un-distrito-ideal-para-vivir',
      image:    '/images/blog/thumb-miraflores.jpg',
      excerpt:  'Cultura, gastronomía, malecón y conectividad: Miraflores lo tiene todo. Conoce por qué es uno de los distritos más deseados para vivir en Lima.',
      date:     '2025-01-10',
      readTime: 5,
      tags:     ['Estilo de vida', 'Inspiracional'],
      category: 'Blog'
    },
    {
      title:    'Ventajas de adquirir tu depa en entrega inmediata',
      slug:     'ventajas-de-adquirir-tu-depa-en-entrega-inmediata',
      image:    '/images/blog/thumb-entrega-inmediata.jpg',
      excerpt:  'Sin esperas, sin incertidumbre. Los departamentos en entrega inmediata ofrecen seguridad y tranquilidad que pocos productos pueden igualar.',
      date:     '2024-12-18',
      readTime: 4,
      tags:     ['Primer departamento', 'Proyecto inmobiliario'],
      category: 'Blog'
    },
    {
      title:    'Cómo aprovechar las facilidades de financiamiento para adquirir tu primer depa',
      slug:     'como-aprovechar-las-facilidades-de-financiamiento-para-adquirir-tu-primer-depa',
      image:    '/images/blog/thumb-financiamiento.jpg',
      excerpt:  'Hoy existen más opciones de financiamiento que nunca. Te explicamos cómo evaluarlas y elegir la que más se ajusta a tu situación financiera.',
      date:     '2024-12-05',
      readTime: 6,
      tags:     ['Financiamiento', 'Primer departamento'],
      category: 'Blog'
    }
  ];

  readonly categories = [
    'Financiamiento',
    'Primer departamento',
    'Estilo de vida',
    'Inspiracional',
    'Proyecto inmobiliario',
    'Tributario',
    'Arquitectura & Interiorismo'
  ];

  readonly sidebarProjects = [
    { name: 'Central Apartments', district: 'Miraflores',     link: '/departamentos-en-venta/miraflores/central' },
    { name: 'Patio la Paz',       district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/patio-la-paz' },
    { name: 'Amalfi',             district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/amalfi' },
    { name: 'Escala',             district: 'Santa Catalina', link: '/departamentos-en-venta/la-victoria/escala' },
    { name: 'Galia',              district: 'Miraflores',     link: '/departamentos-en-venta' },
    { name: 'Savia',              district: 'Pueblo Libre',   link: '/departamentos-en-venta/pueblo-libre/savia' },
    { name: 'Magnolia',           district: 'Pueblo Libre',   link: '/departamentos-en-venta' },
    { name: 'Real',               district: 'La Victoria',    link: '/departamentos-en-venta/la-victoria/real' },
    { name: 'Serena',             district: 'San Miguel',     link: '/departamentos-en-venta/san-miguel/serena' },
    { name: 'Taller',             district: 'Miraflores',     link: '/departamentos-en-venta/miraflores/taller' },
    { name: 'Florencia',          district: 'Pueblo Libre',   link: '/departamentos-en-venta/pueblo-libre/florencia' }
  ];

  readonly pageSize = 6;
  currentPage = 1;
  filteredPosts: BlogPost[] = [];

  ngOnInit(): void {
    this.applyFilters();
    this.searchControl.valueChanges.subscribe(() => {
      this.currentPage = 1;
      this.applyFilters();
    });
  }

  private applyFilters(): void {
    const q = (this.searchControl.value ?? '').toLowerCase().trim();
    this.filteredPosts = this.allPosts.filter(p => {
      const matchesSearch = !q || p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q);
      const matchesCat = !this.selectedCategory || p.tags.includes(this.selectedCategory);
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

  formatDate(iso: string): string {
    const [year, month, day] = iso.split('-');
    const months = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
    return `${Number(day)} ${months[Number(month) - 1]} ${year}`;
  }
}
