import { Component, Input, OnInit, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { QuoterConfig } from '../../models/project-config.interface';
import {
  QuoterService,
  GroupedUnits,
  TypologyData,
  UnitItem,
  QuotationPayload
} from '../../services/quoter.service';

interface BedroomGroup {
  bedrooms: string;
  typologies: { id: string; data: TypologyData }[];
}

@Component({
  selector: 'app-quoter',
  standalone: false,
  templateUrl: './quoter.component.html',
  styleUrl: './quoter.component.css'
})
export class QuoterComponent implements OnInit, OnChanges, OnDestroy {
  @Input() config!: QuoterConfig;

  // ── Estado de carga ─────────────────────────────────────────────────────────
  isLoading = true;
  loadError = false;
  hasUnits = false;

  // ── Datos agrupados ─────────────────────────────────────────────────────────
  bedroomGroups: BedroomGroup[] = [];

  // ── Selección actual ────────────────────────────────────────────────────────
  selectedBedrooms = '';
  selectedTypologyId = '';
  selectedTypologyData: TypologyData | null = null;
  selectedUnitId = '';
  selectedUnitName = '';

  // ── Estado de envío ─────────────────────────────────────────────────────────
  isSubmitting = false;
  submitResult: { success: boolean; message: string } | null = null;

  // ── Modal de imagen ─────────────────────────────────────────────────────────
  isImageModalOpen = false;

  // ── Formulario ──────────────────────────────────────────────────────────────
  form!: FormGroup;

  // ── Suscripción activa de unidades ──────────────────────────────────────────
  private unitsSub?: Subscription;

  constructor(
    private quoterService: QuoterService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this.fb.group({
      document: ['', [Validators.required, Validators.pattern(/^\d{8,12}$/)]],
      fname:    ['', [Validators.required, Validators.maxLength(50)]],
      lname:    ['', [Validators.required, Validators.maxLength(50)]],
      email:    ['', [Validators.required, Validators.email]],
      phone:    ['', [Validators.required, Validators.pattern(/^\d{9}$/)]],
      rangoEdad:     ['', Validators.required],
      razonContacto: ['', Validators.required],
      terminos:      [false, Validators.requiredTrue],
    });

    this.loadUnits();
  }

  /**
   * Detecta cuando el @Input config cambia (al navegar entre proyectos).
   * Angular reutiliza la instancia del componente en rutas del mismo patrón,
   * por lo que ngOnInit no vuelve a ejecutarse — se usa ngOnChanges.
   */
  ngOnChanges(changes: SimpleChanges): void {
    const configChange = changes['config'];
    if (!configChange || configChange.firstChange) return;

    const prev = configChange.previousValue as QuoterConfig | undefined;
    const curr = configChange.currentValue as QuoterConfig | undefined;

    if (curr?.projectId && curr.projectId !== prev?.projectId) {
      this.resetState();
      this.loadUnits();
    }
  }

  ngOnDestroy(): void {
    this.unitsSub?.unsubscribe();
  }

  // ── Carga de datos ──────────────────────────────────────────────────────────

  private loadUnits() {
    // Cancelar la suscripción anterior para evitar condiciones de carrera
    this.unitsSub?.unsubscribe();

    this.unitsSub = this.quoterService.getUnits(this.config.projectId).subscribe({
      next: (data) => this.processUnits(data),
      error: () => {
        this.isLoading = false;
        this.loadError = true;
      }
    });
  }

  private resetState() {
    this.unitsSub?.unsubscribe();
    this.isLoading = true;
    this.loadError = false;
    this.hasUnits = false;
    this.bedroomGroups = [];
    this.selectedBedrooms = '';
    this.selectedTypologyId = '';
    this.selectedTypologyData = null;
    this.selectedUnitId = '';
    this.selectedUnitName = '';
    this.isSubmitting = false;
    this.submitResult = null;
    if (this.isImageModalOpen) {
      this.isImageModalOpen = false;
      document.body.style.overflow = '';
    }
    this.form?.reset();
  }

  // ── Procesamiento de datos ──────────────────────────────────────────────────

  private processUnits(data: GroupedUnits) {
    this.bedroomGroups = Object.keys(data)
      .sort((a, b) => +a - +b)
      .map(bedrooms => ({
        bedrooms,
        typologies: Object.entries(data[bedrooms]).map(([id, typoData]) => ({
          id,
          data: typoData
        }))
      }));

    this.hasUnits = this.bedroomGroups.length > 0;
    this.isLoading = false;

    if (this.hasUnits) {
      this.selectBedrooms(this.bedroomGroups[0].bedrooms);
    }
  }

  // ── Selección de tabs / tipología / unidad ──────────────────────────────────

  selectBedrooms(bedrooms: string) {
    if (this.selectedBedrooms === bedrooms) return;
    this.selectedBedrooms = bedrooms;
    this.selectedTypologyId = '';
    this.selectedTypologyData = null;
    this.selectedUnitId = '';
    this.selectedUnitName = '';

    const group = this.bedroomGroups.find(g => g.bedrooms === bedrooms);
    if (group?.typologies?.length) {
      this.selectTypology(group.typologies[0].id, group.typologies[0].data);
    }
  }

  selectTypology(id: string, data: TypologyData) {
    this.selectedTypologyId = id;
    this.selectedTypologyData = data;
    this.selectedUnitId = '';
    this.selectedUnitName = '';
  }

  get currentTypologies(): { id: string; data: TypologyData }[] {
    return this.bedroomGroups.find(g => g.bedrooms === this.selectedBedrooms)?.typologies ?? [];
  }

  onUnitChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedUnitId = select.value;
    const opt = select.selectedOptions[0];
    this.selectedUnitName = opt ? opt.textContent?.trim() ?? '' : '';
  }

  bedroomLabel(bedrooms: string): string {
    return +bedrooms === 1 ? '1 Ambiente' : `${bedrooms} Ambientes`;
  }

  // ── Modal imagen ────────────────────────────────────────────────────────────

  openImageModal() {
    if (this.selectedTypologyData?.UrlImagenTipologia) {
      this.isImageModalOpen = true;
      document.body.style.overflow = 'hidden';
    }
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    document.body.style.overflow = '';
  }

  onImageModalBackdrop(event: MouseEvent) {
    if ((event.target as HTMLElement).classList.contains('quoter__img-backdrop')) {
      this.closeImageModal();
    }
  }

  // ── Submit ──────────────────────────────────────────────────────────────────

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    if (!this.selectedUnitId || this.selectedUnitId === '') {
      alert('Favor seleccione una unidad.');
      return;
    }

    const params = new URLSearchParams(window.location.search);
    const { document, fname, lname, email, phone, rangoEdad, razonContacto } = this.form.value;

    const payload: QuotationPayload = {
      document,
      fname,
      lname,
      email,
      phone,
      observation: `Rango de edad: ${rangoEdad} | Razon de contacto: ${razonContacto}`,
      proyecto: this.config.projectName,
      proyectoID: this.config.projectId.toString(),
      unidad: this.selectedUnitName,
      tipologia: this.selectedTypologyData?.NombreTipologia ?? '',
      unidadID: this.selectedUnitId,
      tipologiaID: this.selectedTypologyId,
      source_id: '35',
      utm_source:   params.get('utm_source')   ?? 'organico',
      utm_medium:   params.get('utm_medium')   ?? 'proforma web',
      utm_campaign: params.get('utm_campaign') ?? 'organico',
      sendEmail:    true,
    };

    this.isSubmitting = true;

    this.quoterService.submitQuotation(payload).subscribe({
      next: (res) => {
        this.isSubmitting = false;
        this.submitResult = res;
        if (res.success) {
          this.form.reset();
        }
      },
      error: () => {
        this.isSubmitting = false;
        this.submitResult = { success: false, message: 'Ocurrió un error. Por favor inténtelo de nuevo.' };
      }
    });
  }

  // ── Helpers de validación ───────────────────────────────────────────────────

  isInvalid(field: string): boolean {
    const ctrl = this.form.get(field);
    return !!(ctrl && ctrl.invalid && ctrl.touched);
  }
}
