import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';

interface AboutStat {
  value: string;
  label: string;
}

@Component({
  selector: 'app-nosotros-admin',
  standalone: false,
  templateUrl: './nosotros-admin.component.html',
  styleUrl: './nosotros-admin.component.css',
})
export class NosotrosAdminComponent implements OnInit {

  stats: AboutStat[] = [
    { value: '15 años',  label: 'Cumpliendo sueños'       },
    { value: '+ 8,600',  label: 'Unidades entregadas'      },
    { value: '+ 25',     label: 'Proyectos desarrollados'  },
  ];

  tagline        = 'Creamos espacios para disfrutar la vida';
  respaldoTitle  = 'Nuestro respaldo';
  respaldoText   = 'En el 2008, 2 de los más importantes grupos inmobiliarios del Perú (Grupo Centenario) y Chile (Paz Corp.) se unieron para crear una empresa que desarrolle proyectos inmobiliarios que trasciendan en el país.\n\nEse año marcó un antes y un después para miles de familias que hoy ven realizado sus sueños a través del trabajo de nuestro gran equipo de colaboradores.\n\nEl respaldo que nos dan estas 2 grandes empresas, nos permiten desarrollar proyectos de una gran calidad que van acorde a la exigencia de nuestros clientes y que nos impulsan a seguir innovando día a día en el mundo inmobiliario.';

  saving: Record<string, boolean> = { stats: false, respaldo: false };
  saved:  Record<string, boolean> = { stats: false, respaldo: false };

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void { this.load(); }

  load(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        if (s['about_stats']) {
          try { this.stats = JSON.parse(s['about_stats']); } catch { /* keep defaults */ }
        }
        if (s['about_tagline'])        this.tagline       = s['about_tagline'];
        if (s['about_respaldo_title']) this.respaldoTitle  = s['about_respaldo_title'];
        if (s['about_respaldo_text'])  this.respaldoText   = s['about_respaldo_text'];
      },
    });
  }

  saveStats(): void {
    this.doSave('stats', [
      { key: 'about_stats',   value: JSON.stringify(this.stats) },
      { key: 'about_tagline', value: this.tagline               },
    ]);
  }

  saveRespaldo(): void {
    this.doSave('respaldo', [
      { key: 'about_respaldo_title', value: this.respaldoTitle },
      { key: 'about_respaldo_text',  value: this.respaldoText  },
    ]);
  }

  private doSave(section: string, items: { key: string; value: string }[]): void {
    this.saving[section] = true;
    this.api.updateSettings(items).subscribe({
      next: () => {
        this.saving[section] = false;
        this.saved[section]  = true;
        setTimeout(() => { this.saved[section] = false; }, 3000);
      },
      error: () => { this.saving[section] = false; },
    });
  }

  trackByIndex(i: number): number { return i; }
}
