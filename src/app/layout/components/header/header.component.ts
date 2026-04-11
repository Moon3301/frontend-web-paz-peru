import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'layout-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  isScrolled = false;
  isMobileOpen = false;

  // Dropdown: Departamentos en Venta
  isDropdownOpen = false;
  isMobileDropdownOpen = false;

  // Dropdown: Quiénes Somos
  isAboutDropdownOpen = false;
  isMobileAboutDropdownOpen = false;

  ngOnInit(): void {}

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

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  toggleAboutDropdown(): void {
    this.isAboutDropdownOpen = !this.isAboutDropdownOpen;
    if (this.isAboutDropdownOpen) this.isDropdownOpen = false;
  }

  closeAboutDropdown(): void {
    this.isAboutDropdownOpen = false;
  }

  closeAllDropdowns(): void {
    this.isDropdownOpen = false;
    this.isAboutDropdownOpen = false;
  }

  toggleMobile(): void {
    this.isMobileOpen = !this.isMobileOpen;
    if (!this.isMobileOpen) {
      this.isMobileDropdownOpen = false;
      this.isMobileAboutDropdownOpen = false;
    }
    document.body.style.overflow = this.isMobileOpen ? 'hidden' : '';
  }

  closeMobile(): void {
    this.isMobileOpen = false;
    this.isMobileDropdownOpen = false;
    this.isMobileAboutDropdownOpen = false;
    document.body.style.overflow = '';
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
