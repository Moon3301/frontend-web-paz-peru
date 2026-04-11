import { Component } from '@angular/core';

export interface DeliveredProject {
  name: string;
  district: string;
  address: string;
  rooms?: string;
  image: string;
}

@Component({
  selector: 'app-projects-delivered',
  standalone: false,
  templateUrl: './projects-delivered.component.html',
  styleUrl: './projects-delivered.component.css'
})
export class ProjectsDeliveredComponent {

  projects: DeliveredProject[] = [
    {
      name: 'Piazza',
      district: 'Pueblo Libre',
      address: 'Av. del Río 111',
      image: '/images/delivered-projects/piazza.jpg'
    },
    {
      name: 'Pérgola',
      district: 'Jesús María',
      address: 'Av. Mello Franco 652',
      image: '/images/delivered-projects/pergola.jpg'
    },
    {
      name: 'Lima Uno',
      district: 'Cercado de Lima',
      address: 'Jr. Larrabure y Unanue 150',
      image: '/images/delivered-projects/lima-uno.jpg'
    },
    {
      name: 'Panoramic',
      district: 'San Miguel',
      address: 'Av. Costanera 2200',
      rooms: '3 dormitorios',
      image: '/images/delivered-projects/panoramic.jpg'
    },
    {
      name: 'Atelier',
      district: '',
      address: '',
      image: '/images/delivered-projects/atelier.jpg'
    },
    {
      name: 'Bello Horizonte',
      district: '',
      address: '',
      image: '/images/delivered-projects/bello-horizonte.jpg'
    },
    {
      name: 'City',
      district: 'Santa Beatriz',
      address: 'Av. Arequipa 1480',
      rooms: '255 dptos. entregados',
      image: '/images/delivered-projects/city.jpg'
    },
    {
      name: 'Ciudad Nueva',
      district: '',
      address: '',
      image: '/images/delivered-projects/ciudad-nueva.jpg'
    },
    {
      name: 'Ciudad Verde',
      district: '',
      address: '',
      image: '/images/delivered-projects/ciudad-verde.jpg'
    },
    {
      name: 'Ícono',
      district: 'Breña',
      address: 'Av. Arica 600',
      rooms: '3 dormitorios',
      image: '/images/delivered-projects/icono.jpg'
    },
    {
      name: 'Jardines Santa Clara',
      district: '',
      address: '',
      image: '/images/delivered-projects/jardines-santa-clara.jpg'
    },
    {
      name: 'Parque Los Olivos',
      district: '',
      address: '',
      image: '/images/delivered-projects/parque-los-olivos.jpg'
    },
    {
      name: 'Parque Rímac',
      district: '',
      address: '',
      image: '/images/delivered-projects/parque-rimac.jpg'
    },
    {
      name: 'Prados del Sol',
      district: '',
      address: '',
      image: '/images/delivered-projects/prados-del-sol.jpg'
    },
    {
      name: 'Único',
      district: '',
      address: '',
      image: '/images/delivered-projects/unico.jpg'
    }
  ];
}
