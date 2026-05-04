import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../services/admin-api.service';

@Component({
  selector: 'app-privacy-policy-admin',
  standalone: false,
  templateUrl: './privacy-policy-admin.component.html',
  styleUrl: './privacy-policy-admin.component.css',
})
export class PrivacyPolicyAdminComponent implements OnInit {
  content = '';
  loading = true;
  saving = false;
  saved = false;

  constructor(private readonly api: AdminApiService) {}

  ngOnInit(): void {
    this.api.getSettings().subscribe({
      next: (s) => {
        this.content = s['privacy_policy'] ?? '';
        this.loading = false;
      },
      error: () => { this.loading = false; },
    });
  }

  save(): void {
    this.saving = true;
    this.api.updateSettings([{ key: 'privacy_policy', value: this.content }]).subscribe({
      next: () => {
        this.saving = false;
        this.saved = true;
        setTimeout(() => { this.saved = false; }, 3000);
      },
      error: () => { this.saving = false; },
    });
  }
}
