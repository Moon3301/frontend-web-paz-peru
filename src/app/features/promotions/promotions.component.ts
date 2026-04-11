import { Component } from '@angular/core';

export interface PromoProject {
  name: string;
  district: string;
  image: string;
  description: string;
  price: string;
  projectLink: string;
}

@Component({
  selector: 'app-promotions',
  standalone: false,
  templateUrl: './promotions.component.html',
  styleUrl: './promotions.component.css'
})
export class PromotionsComponent {

  readonly disclaimer = '(*)Válido hasta agotar stock o hasta el 30 de abril de 2026. ' +
    'Precio con financiamiento por 20 años con Banco Pichincha, cuota inicial del 10%. ' +
    'No acumulable con otras promociones. Sujeto a previa evaluación crediticia.';

  /** Proyectos destacados — 3 columnas */
  featuredPromos: PromoProject[] = [
    {
      name: 'Serena',
      district: 'San Miguel',
      image: '/images/projects/thumb-serena.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/439,000*',
      projectLink: '/apartment-sale/san-miguel/serena'
    },
    {
      name: 'Florencia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-florencia-home.jpg',
      description: 'Tu depa de 2 ambientes con precio desde',
      price: 'S/405,000*',
      projectLink: '/apartment-sale/pueblo-libre/florencia'
    },
    {
      name: 'Central',
      district: 'Miraflores',
      image: '/images/projects/thumb-central-home.jpg',
      description: 'Tu depa de 3 ambientes con precio desde',
      price: 'S/764,000*',
      projectLink: '/apartment-sale/miraflores/central'
    }
  ];

  /** Más proyectos — 4 columnas */
  otherPromos: PromoProject[] = [
    {
      name: 'Taller',
      district: 'Miraflores',
      image: '/images/projects/thumb-taller.jpg',
      description: 'Tu depa de 1 ambiente con precio desde',
      price: 'S/554,000*',
      projectLink: '/apartment-sale/miraflores/taller'
    },
    {
      name: 'Patio La Paz',
      district: 'San Miguel',
      image: '/images/projects/thumb-patio-home.jpg',
      description: 'Tu depa de 3 ambientes con cuotas desde',
      price: 'S/2,696*',
      projectLink: '/apartment-sale/san-miguel/patio-la-paz'
    },
    {
      name: 'Magnolia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-magnolia-home.jpg',
      description: 'Tu depa de 3 ambientes con cuotas desde',
      price: 'S/3,360*',
      projectLink: '/apartment-sale'
    },
    {
      name: 'Real',
      district: 'La Victoria',
      image: '/images/projects/thumb-real-home.jpg',
      description: 'Tu depa de 2 ambientes con cuotas desde',
      price: 'S/2,428*',
      projectLink: '/apartment-sale/la-victoria/real'
    },
    {
      name: 'Savia',
      district: 'Pueblo Libre',
      image: '/images/projects/thumb-savia-home.jpg',
      description: 'Tu depa de 3 ambientes con cuotas desde',
      price: 'S/2,452*',
      projectLink: '/apartment-sale/pueblo-libre/savia'
    },
    {
      name: 'Amalfi',
      district: 'San Miguel',
      image: '/images/projects/thumb-amalfi-home.jpg',
      description: 'Precio desde',
      price: 'S/377,000*',
      projectLink: '/apartment-sale/san-miguel/amalfi'
    },
    {
      name: 'Galia',
      district: 'Miraflores',
      image: '/images/projects/thumb-galia-home.jpg',
      description: 'Precio desde',
      price: 'S/796,000*',
      projectLink: '/apartment-sale'
    },
    {
      name: 'Escala',
      district: 'Santa Catalina',
      image: '/images/projects/thumb-escala-home.jpg',
      description: 'Tu depa de 3 ambientes con cuotas desde',
      price: 'S/1,507*',
      projectLink: '/apartment-sale/la-victoria/escala'
    }
  ];
}
