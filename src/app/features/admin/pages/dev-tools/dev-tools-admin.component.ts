import { Component } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  standalone: false,
  selector: 'app-dev-tools-admin',
  templateUrl: './dev-tools-admin.component.html',
  styleUrls: ['./dev-tools-admin.component.css'],
})
export class DevToolsAdminComponent {
  loading = false;
  lastExportedAt: string | null = null;
  error: string | null = null;

  constructor(private readonly api: AdminApiService) {}

  downloadSeed(): void {
    this.loading = true;
    this.error = null;

    this.api.getSeedExport().subscribe({
      next: (data) => {
        this.lastExportedAt = data.exportedAt;
        const json = JSON.stringify(data, null, 2);
        const blob = new Blob([json], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `seed-export-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Error al exportar: ' + (err.message ?? 'Error desconocido');
        this.loading = false;
      },
    });
  }
}
