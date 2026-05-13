import { Component, HostListener, OnInit } from '@angular/core';
import { ContentService } from '../../../core/services/content.service';
import { DistrictSummary, ProjectSummary } from '../../../core/models/content.models';
import { forkJoin } from 'rxjs';

export interface NavDistrict extends DistrictSummary {
  projects: ProjectSummary[];
}

@Component({
  selector: 'layout-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  isMobileOpen = false;

  /** Posición del scroll guardada al abrir el menú (para iOS) */
  private savedScrollY = 0;

  isDropdownOpen = false;
  isMobileDropdownOpen = false;

  isAboutDropdownOpen = false;
  isMobileAboutDropdownOpen = false;

  /** Distritos activos con sus proyectos agrupados */
  navDistricts: NavDistrict[] = [];

  constructor(private readonly content: ContentService) {}

  ngOnInit(): void {
    forkJoin({
      districts: this.content.getDistricts(),
      projects:  this.content.getProjects(),
    }).subscribe({
      next: ({ districts, projects }) => {
        this.navDistricts = districts
          .filter(d => d.isActive)
          .map(d => ({
            ...d,
            projects: projects
              .filter(p => p.district === d.slug)
              .sort((a, b) => a.sortOrder - b.sortOrder),
          }))
          // Solo mostrar distritos que tienen al menos un proyecto activo
          .filter(d => d.projects.length > 0);
      },
      error: () => { /* fallback: navbar vacío */ },
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.isScrolled = window.scrollY > 60;
    if (this.isScrolled) {
      this.isDropdownOpen = false;
      this.isAboutDropdownOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    if (this.isDropdownOpen) this.isAboutDropdownOpen = false;
  }
  closeDropdown(): void { this.isDropdownOpen = false; }

  toggleAboutDropdown(): void {
    this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
    if (this.isAboutDropdownOpen) this.isDropdownOpen = false;
  }
  closeAboutDropdown(): void { this.isAboutDropdownOpen = false; }

  closeAllDropdowns(): void {
    this.isDropdownOpen = false;
    this.isAboutDropdownOpen = false;
  }

  toggleMobile(): void {
    this.isMobileOpen = !this.isMobileOpen;
    if (this.isMobileOpen) {
      this.lockBodyScroll();
    } else {
      this.isMobileDropdownOpen = false;
      this.isMobileAboutDropdownOpen = false;
      this.unlockBodyScroll();
    }
  }

  closeMobile(): void {
    this.isMobileOpen = false;
    this.isMobileDropdownOpen = false;
    this.isMobileAboutDropdownOpen = false;
    this.unlockBodyScroll();
  }

  /**
   * Bloquea el scroll del body sin que el fondo salte.
   * Técnica compatible con iOS Safari: position fixed + top negativo
   * preserva la posición del scroll al restaurar.
   */
  private lockBodyScroll(): void {
    this.savedScrollY = window.scrollY;
    document.body.style.overflow  = 'hidden';
    document.body.style.position  = 'fixed';
    document.body.style.top       = `-${this.savedScrollY}px`;
    document.body.style.left      = '0';
    document.body.style.right     = '0';
  }

  private unlockBodyScroll(): void {
    document.body.style.overflow  = '';
    document.body.style.position  = '';
    document.body.style.top       = '';
    document.body.style.left      = '';
    document.body.style.right     = '';
    window.scrollTo({ top: this.savedScrollY, behavior: 'instant' as ScrollBehavior });
  }

  toggleMobileDropdown(): void {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
    if (this.isMobileDropdownOpen) this.isMobileAboutDropdownOpen = false;
  }

  toggleMobileAboutDropdown(): void {
    this.isMobileAboutDropdownOpen = !this.isMobileAboutDropdownOpen;
    if (this.isMobileAboutDropdownOpen) this.isMobileDropdownOpen = false;
  }
}
