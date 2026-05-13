import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService, ContactPayload } from './services/contact.service';
import { ContentService } from '../../core/services/content.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {

  readonly projects = [
    'Serena — San Miguel',
    'Florencia — Pueblo Libre',
    'Central — Miraflores',
    'Taller — Miraflores',
    'Patio La Paz — San Miguel',
    'Magnolia — Pueblo Libre',
    'Real — La Victoria',
    'Savia — Pueblo Libre',
    'Amalfi — San Miguel',
    'Galia — Miraflores',
    'Escala — Santa Catalina',
    'Medina — Jesús María',
    'Matiz — San Isidro',
    'Pergola - Jesus Maria',
    'Piazza - Pueblo Libre',
    'Riva - Miraflores',
    'Lima 15 - Miraflores',
    'Marena - San Miguel'
  ];

  readonly horarios = [
    'Lunes a viernes de 08:30 am a 1:00 pm',
    'Lunes a viernes de 2:00 pm a 6:00 pm',
  ];

  form: FormGroup;
  submitted  = false;
  isLoading  = false;
  isSuccess  = false;
  errorMsg   = '';

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private readonly content: ContentService,
    private readonly seo: SeoService,
  ) {
    this.form = this.fb.group({
      project:       ['', Validators.required],
      dni:           ['', Validators.required],
      nombre:        ['', Validators.required],
      apellido:      ['', Validators.required],
      email:         ['', [Validators.required, Validators.email]],
      telefono:      ['', Validators.required],
      horario:       ['', Validators.required],
      comentario:    [''],
      acceptTerms:   [false, Validators.requiredTrue],
      acceptPrivacy: [false, Validators.requiredTrue]
    });
  }

  ngOnInit(): void {
    this.content.getSettings().subscribe({
      next: (s) => {
        this.seo.setPage({
          title:       s['seo_page_contact_title']       || 'Contacto',
          description: s['seo_page_contact_description'] || 'Contáctate con Paz Inmobiliaria. Nuestros asesores te ayudarán a encontrar el departamento ideal en Lima.',
          keywords:    s['seo_page_contact_keywords']    || 'contacto Paz Inmobiliaria, asesores inmobiliarios Lima, consulta departamentos',
        });
      },
      error: () => {
        this.seo.setPage({
          title:       'Contacto',
          description: 'Contáctate con Paz Inmobiliaria. Nuestros asesores te ayudarán a encontrar el departamento ideal en Lima.',
          keywords:    'contacto Paz Inmobiliaria, asesores inmobiliarios Lima, consulta departamentos',
        });
      },
    });
  }

  onSubmit(): void {
    this.submitted = true;
    this.errorMsg  = '';

    if (this.form.invalid) return;

    this.isLoading = true;

    const payload: ContactPayload = this.form.value as ContactPayload;

    this.contactService.send(payload).subscribe({
      next: () => {
        this.isLoading = false;
        this.isSuccess = true;
        this.form.reset();
        this.submitted = false;
      },
      error: (err) => {
        this.isLoading = false;
        const serverMsg = err?.error?.message;
        this.errorMsg = serverMsg
          ? serverMsg
          : 'Ocurrió un error al enviar el mensaje. Por favor intenta nuevamente.';
      }
    });
  }

  resetSuccess(): void {
    this.isSuccess = false;
  }
}
