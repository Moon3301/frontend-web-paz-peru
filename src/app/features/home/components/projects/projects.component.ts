import { Component } from '@angular/core';

export interface HomeProject {
  name: string;
  district: string;
  status: string;
  image: string;
  logo: string;
  link: string;
}

@Component({
  selector: 'home-projects',
  standalone: false,
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  projects: HomeProject[] = [
    {
      name: 'Marena',
      district: 'San Miguel',
      status: 'LANZAMIENTO',
      image: '/images/projects/thumb-marena-home.png',
      logo: '/images/logos/projects/logo-marena-1.svg',
      link: '/apartment-sale/san-miguel/marena'
    },
    {
      name: 'Lima 15',
      district: 'Miraflores',
      status: 'LANZAMIENTO',
      image: '/images/projects/thumb-lima15-home.png',
      logo: '/images/logos/projects/logo-lima-morado.svg',
      link: '/apartment-sale/miraflores/lima-15'
    },
    {
      name: 'Matiz',
      district: 'San Isidro',
      status: 'LANZAMIENTO',
      image: '/images/projects/thumb-matiz-home.png',
      logo: '/images/logos/projects/logo-matiz-transparent.png',
      link: '/apartment-sale/san-isidro/matiz'
    },
    {
      name: 'Riva',
      district: 'Miraflores',
      status: 'LANZAMIENTO',
      image: '/images/projects/thumb-riva-home.jpg',
      logo: '/images/logos/projects/logo-riva-1.png',
      link: '/apartment-sale/miraflores/riva'
    },
    {
      name: 'Taller',
      district: 'Miraflores',
      status: 'PREVENTA',
      image: '/images/projects/thumb-taller.jpg',
      logo: '/images/logos/projects/logo-taller.png',
      link: '/apartment-sale/miraflores/taller'
    },
    {
      name: 'Serena',
      district: 'San Miguel',
      status: 'EN CONSTRUCCIÓN',
      image: '/images/projects/thumb-serena.jpg',
      logo: '/images/logos/projects/logo-serena.png',
      link: '/apartment-sale/san-miguel/serena'
    },
    {
      name: 'Florencia',
      district: 'Pueblo Libre',
      status: 'EN CONSTRUCCIÓN',
      image: '/images/projects/thumb-florencia-home.jpg',
      logo: '/images/logos/projects/logo-florencia.png',
      link: '/apartment-sale/pueblo-libre/florencia'
    },
    {
      name: 'Real',
      district: 'La Victoria',
      status: 'ENTREGA INMEDIATA',
      image: '/images/projects/thumb-real-home.jpg',
      logo: '/images/logos/projects/logo-real.svg',
      link: '/apartment-sale/la-victoria/real'
    },
    {
      name: 'Central',
      district: 'Miraflores',
      status: 'EN CONSTRUCCIÓN',
      image: '/images/projects/thumb-central-home.jpg',
      logo: '/images/logos/projects/logo-central.png',
      link: '/apartment-sale/miraflores/central'
    },
    {
      name: 'Patio La Paz',
      district: 'San Miguel',
      status: '¡INICIAMOS CONSTRUCCIÓN!',
      image: '/images/projects/thumb-patio-home.jpg',
      logo: '/images/logos/projects/logo-patio.png',
      link: '/apartment-sale/san-miguel/patio-la-paz'
    },
    {
      name: 'Amalfi',
      district: 'San Miguel',
      status: 'ENTREGA INMEDIATA',
      image: '/images/projects/thumb-amalfi-home.jpg',
      logo: '/images/logos/projects/logo-amalfi.svg',
      link: '/apartment-sale/san-miguel/amalfi'
    },
    {
      name: 'Escala',
      district: 'Santa Catalina',
      status: 'ENTREGA INMEDIATA',
      image: '/images/projects/thumb-escala-home.jpg',
      logo: '/images/logos/projects/logo-escala.png',
      link: '/apartment-sale/la-victoria/escala'
    },
    {
      name: 'Savia',
      district: 'Pueblo Libre',
      status: 'ENTREGA INMEDIATA',
      image: '/images/projects/thumb-savia-home.jpg',
      logo: '/images/logos/projects/logo-savia.svg',
      link: '/apartment-sale/pueblo-libre/savia'
    }
  ];
}
