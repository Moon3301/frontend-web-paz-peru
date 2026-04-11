import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-marena',
  standalone: false,
  templateUrl: './marena.component.html',
  styleUrl: './marena.component.css'
})
export class MarenaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Marena',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      overlayColor: 'rgba(30, 80, 120, 0.75)',
      slides: [
        { image: 'images/projects/marena/hero-1.jpg', alt: 'Marena - Fachada' },
        { image: 'images/projects/marena/hero-2.jpg', alt: 'Marena - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, San Miguel',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/marena/specs/interior.jpg',
      projectName: 'Marena',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: 'TODO: Número de pisos',
      unitTypes: 'TODO: Tipos de unidades',
      areaRange: 'TODO: Rango de metrajes'
    },
    amenities: {
      backgroundColor: '#3D7DA6',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
        { icon: 'svg/icons/grill.svg', label: 'ZONA DE PARRILLA' },
        { icon: 'svg/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'svg/icons/meeting-room.svg', label: 'SALA DE REUNIONES' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/marena/gallery/comunes/1.jpg' },
            { src: 'images/projects/marena/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/marena/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/marena/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_MARENA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Marena, San Miguel, Lima'
    }
  };
}
