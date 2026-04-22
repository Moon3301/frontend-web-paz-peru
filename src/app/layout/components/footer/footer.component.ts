import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'layout-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  currentYear = new Date().getFullYear();

  constructor( private router: Router ) {}

  goToPromotions() {
    this.router.navigate(['/promotions']);
    setTimeout(() => {
      document.getElementById('promotions')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  goToContact() {
    this.router.navigate(['/contact']);
    setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
    
}
