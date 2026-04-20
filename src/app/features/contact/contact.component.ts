import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

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
  submitted = false;

  constructor(private fb: FormBuilder) {
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

  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) return;
    // Form submission logic will be implemented later
  }
}
