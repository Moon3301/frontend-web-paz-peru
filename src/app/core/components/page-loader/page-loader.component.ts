import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-loader',
  standalone: false,
  template: `
    <div class="loader-overlay" [class.visible]="visible">
      <div class="loader-box">
        <img src="images/logos/pazpe.png" alt="Paz Inmobiliaria" class="loader-logo" />
        <div class="loader-spinner">
          <div class="spinner-ring"></div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .loader-overlay {
      position: fixed;
      inset: 0;
      background: #ffffff;
      z-index: 9999;
      display: none;
      align-items: center;
      justify-content: center;
    }

    .loader-overlay.visible {
      display: flex;
    }

    .loader-box {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 28px;
    }

    .loader-logo {
      width: clamp(120px, 20vw, 180px);
      object-fit: contain;
      filter: brightness(0) saturate(100%) invert(14%) sepia(20%) saturate(1500%) hue-rotate(290deg) brightness(60%);
      animation: pulse 1.8s ease-in-out infinite;
    }

    .loader-spinner {
      width: 52px;
      height: 52px;
      position: relative;
    }

    .spinner-ring {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: 3px solid rgba(202, 153, 94, 0.2);
      border-top-color: #CA995E;
      animation: spin 0.9s linear infinite;
    }

    @keyframes spin {
      to { transform: rotate(360deg); }
    }

    @keyframes pulse {
      0%, 100% { opacity: 0.6; }
      50%       { opacity: 1; }
    }
  `]
})
export class PageLoaderComponent {
  @Input() visible = false;
}
