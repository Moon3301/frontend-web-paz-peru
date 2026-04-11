import { Component } from '@angular/core';

export interface MapPin {
  name: string;
  logo: string | null;  // ruta SVG, null = usar texto
  top: string;          // porcentaje desde arriba del mapa
  left: string;         // porcentaje desde la izquierda del mapa
  link: string;
}

@Component({
  selector: 'home-ubication',
  standalone: false,
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css'
})
export class UbicationComponent {

  pins: MapPin[] = [
    // Pueblo Libre
    { name: 'Savia',     logo: '/images/logos/projects/logo-savia.svg',    top: '22%', left: '28%', link: '/apartment-sale/pueblo-libre/savia' },
    { name: 'Magnolia',  logo: '/images/logos/projects/logo-magnolia.svg', top: '30%', left: '24%', link: '/apartment-sale/pueblo-libre/savia' },
    { name: 'Florencia', logo: null,                                        top: '14%', left: '37%', link: '/apartment-sale/pueblo-libre/savia' },

    // San Miguel
    { name: 'Amalfi',   logo: '/images/logos/projects/logo-amalfi.svg',   top: '48%', left: '13%', link: '/apartment-sale/san-miguel/amalfi' },
    { name: 'Serena',   logo: null,                                         top: '53%', left: '34%', link: '/apartment-sale/san-miguel/serena' },

    // La Victoria
    { name: 'Real',     logo: '/images/logos/projects/logo-real.svg',     top: '40%', left: '65%', link: '/apartment-sale/la-victoria/real' },
    { name: 'Escala',   logo: null,                                         top: '52%', left: '68%', link: '/apartment-sale/la-victoria/escala' },

    // Miraflores
    { name: 'Central',  logo: null, top: '65%', left: '45%', link: '/apartment-sale/miraflores/central' },
    { name: 'Taller',   logo: null, top: '72%', left: '50%', link: '/apartment-sale/miraflores/taller' },
    { name: 'Galia',    logo: null, top: '70%', left: '58%', link: '/apartment-sale/miraflores/central' },
  ];
}
