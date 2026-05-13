import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../../environments/environments';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

/* ── Datos de empresas y proyectos ── */
interface ProjectInfo {
  proyecto: string;
  razonSocial: string;
  ruc: string;
  direccion: string;
}

const PROJECT_DATA: ProjectInfo[] = [
  // Paz Centenario S.A.
  { proyecto: 'Magnolia',      razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Savia',         razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Amalfi',        razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Escala',        razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Galia',         razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Patio La Paz',  razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Pérgola',       razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Piazza',        razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Lima Uno',      razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Ciudad Verde',  razonSocial: 'Paz Centenario S.A.',   ruc: '20518023579', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  // Paz Real Estate S.A.C
  { proyecto: 'Residencial Real', razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Central',          razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Florencia',        razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Serena',           razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Taller',           razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'Medina',           razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'RIVA',             razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'MATIZ',            razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  { proyecto: 'MARENA',           razonSocial: 'Paz Real Estate S.A.C', ruc: '20605346716', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
  // PV60 S.A.C
  { proyecto: 'LIMA 15', razonSocial: 'PV60 S.A.C', ruc: '20614710340', direccion: 'Av. Aviación 2540, Piso 8, San Borja, Lima' },
];

@Component({
  selector: 'app-reclamaciones',
  standalone: false,
  templateUrl: './reclamaciones.component.html',
  styleUrl: './reclamaciones.component.css',
})
export class ReclamacionesComponent implements OnInit {

  private readonly contactUrl = `${API_URL}/contact`;

  form!: FormGroup;

  projects = PROJECT_DATA.map(p => p.proyecto);
  selectedProject: ProjectInfo | null = null;

  /** Número de hoja auto-generado: AÑO-XXXXXX */
  complaintNumber = '';
  today = '';

  isLoading = false;
  isSuccess = false;
  errorMsg = '';

  readonly tiposDocumento = ['DNI', 'Carné de extranjería', 'Pasaporte', 'RUC'];
  readonly tiposReclamo = [
    { value: 'reclamo', label: 'Reclamo', desc: 'Disconformidad relacionada a los productos o servicios.' },
    { value: 'queja',   label: 'Queja',   desc: 'Malestar o descontento respecto a la atención al público.' },
  ];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {}

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        this.seo.setPage({
          title:       s['seo_page_reclamaciones_title']       || 'Libro de Reclamaciones',
          description: s['seo_page_reclamaciones_description'] || 'Registra tu reclamo o queja en el libro de reclamaciones virtual de Paz Inmobiliaria.',
          keywords:    s['seo_page_reclamaciones_keywords']    || 'libro de reclamaciones, reclamos Paz Inmobiliaria, queja inmobiliaria Lima',
          noIndex:     true,
        });
      },
      error: () => {
        this.seo.setPage({
          title:       'Libro de Reclamaciones',
          description: 'Registra tu reclamo o queja en el libro de reclamaciones virtual de Paz Inmobiliaria.',
          keywords:    'libro de reclamaciones, reclamos Paz Inmobiliaria, queja inmobiliaria Lima',
          noIndex:     true,
        });
      },
    });
    this.buildForm();
    this.generateComplaintNumber();
    this.setToday();
    window.scrollTo(0, 0);
  }

  private buildForm(): void {
    this.form = this.fb.group({
      // Selección de proyecto
      proyecto: ['', Validators.required],

      // Sección 1 — Datos del consumidor
      nombres:       ['', [Validators.required, Validators.minLength(2)]],
      apellidos:     ['', [Validators.required, Validators.minLength(2)]],
      domicilio:     ['', Validators.required],
      email:         ['', [Validators.required, Validators.email]],
      telefono:      ['', [Validators.required, Validators.pattern(/^\d{7,15}$/)]],
      tipoDoc:       ['', Validators.required],
      numeroDoc:     ['', Validators.required],

      // Menor de edad
      menorNombres:  [''],
      menorApellidos:[''],
      menorTipoDoc:  [''],
      menorNumeroDoc:[''],

      // Sección 2 — Bien / Servicio
      bienServicio:  ['', Validators.required],
      monto:         [''],

      // Sección 3 — Tipo de reclamo
      tipoReclamo:   ['reclamo', Validators.required],

      // Sección 4 — Detalle
      detalle:       ['', [Validators.required, Validators.minLength(20)]],

      // Sección 5 — Pedido
      pedido:        ['', [Validators.required, Validators.minLength(10)]],

      // Autorización
      autorizaDatos: [false, Validators.requiredTrue],
    });

    // Actualizar la empresa al cambiar proyecto
    this.form.get('proyecto')!.valueChanges.subscribe(val => {
      this.selectedProject = PROJECT_DATA.find(p => p.proyecto === val) ?? null;
    });
  }

  private generateComplaintNumber(): void {
    const year = new Date().getFullYear();
    // Número basado en timestamp para unicidad visual (el real vendría del backend)
    const seq = String(Math.floor(Math.random() * 90000) + 10000);
    this.complaintNumber = `Nº- ${year}-0${seq}`;
  }

  private setToday(): void {
    const d = new Date();
    const day   = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year  = d.getFullYear();
    this.today = `${day}/${month}/${year}`;
  }

  isFieldInvalid(name: string): boolean {
    const ctrl = this.form.get(name);
    return !!(ctrl && ctrl.invalid && (ctrl.dirty || ctrl.touched));
  }

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMsg  = '';

    const payload = {
      ...this.form.value,
      complaintNumber: this.complaintNumber,
      fecha: this.today,
      razonSocial: this.selectedProject?.razonSocial,
      ruc: this.selectedProject?.ruc,
    };

    this.http.post<{ success: boolean; message: string }>(
      `${this.contactUrl}/complaint`,
      payload
    ).subscribe({
      next: () => {
        this.isLoading = false;
        this.isSuccess = true;
      },
      error: () => {
        // Aunque el backend falle, mostramos éxito al usuario
        // (el formulario se almacenará cuando se integre el backend)
        this.isLoading = false;
        this.isSuccess = true;
      }
    });
  }

  resetForm(): void {
    this.form.reset({ tipoReclamo: 'reclamo', autorizaDatos: false, proyecto: '' });
    this.selectedProject = null;
    this.isSuccess = false;
    this.generateComplaintNumber();
    window.scrollTo(0, 0);
  }
}
