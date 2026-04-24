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
    { name: 'Savia',     logo: '/images/logos/projects/logo-savia.svg',    top: '22%', left: '28%', link: '/departamentos-en-venta/pueblo-libre/savia' },
    { name: 'Magnolia',  logo: '/images/logos/projects/logo-magnolia.svg', top: '30%', left: '24%', link: '/departamentos-en-venta/pueblo-libre/savia' },
    { name: 'Florencia', logo: null,                                        top: '14%', left: '37%', link: '/departamentos-en-venta/pueblo-libre/savia' },

    // San Miguel
    { name: 'Amalfi',   logo: '/images/logos/projects/logo-amalfi.svg',   top: '48%', left: '13%', link: '/departamentos-en-venta/san-miguel/amalfi' },
    { name: 'Serena',   logo: null,                                         top: '53%', left: '34%', link: '/departamentos-en-venta/san-miguel/serena' },

    // La Victoria
    { name: 'Real',     logo: '/images/logos/projects/logo-real.svg',     top: '40%', left: '65%', link: '/departamentos-en-venta/la-victoria/real' },
    { name: 'Escala',   logo: null,                                         top: '52%', left: '68%', link: '/departamentos-en-venta/la-victoria/escala' },

    // Miraflores
    { name: 'Central',  logo: null, top: '65%', left: '45%', link: '/departamentos-en-venta/miraflores/central' },
    { name: 'Taller',   logo: null, top: '72%', left: '50%', link: '/departamentos-en-venta/miraflores/taller' },
    { name: 'Galia',    logo: null, top: '70%', left: '58%', link: '/departamentos-en-venta/miraflores/central' },
  ];
}
