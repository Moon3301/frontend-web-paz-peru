import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-real',
  standalone: false,
  templateUrl: './real.component.html',
  styleUrl: './real.component.css'
})
export class RealComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Real',
      district: 'DEPARTAMENTOS EN LA VICTORIA',
      badge: 'En venta',
      overlayColor: 'rgba(90, 30, 30, 0.75)',
      slides: [
        { image: 'images/projects/real/hero-1.jpg', alt: 'Real - Fachada' },
        { image: 'images/projects/real/hero-2.jpg', alt: 'Real - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, La Victoria',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/real/specs/interior.jpg',
      projectName: 'Real',
      projectSubtitle: 'DEPARTAMENTOS EN LA VICTORIA',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: 'TODO: Número de pisos',
      unitTypes: 'TODO: Tipos de unidades',
      areaRange: 'TODO: Rango de metrajes'
    },
    amenities: {
      backgroundColor: '#6B3A3A',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
        { icon: 'svg/icons/grill.svg', label: 'ZONA DE PARRILLA' },
        { icon: 'svg/icons/meeting-room.svg', label: 'SALA DE REUNIONES' },
        { icon: 'svg/icons/coworking.svg', label: 'COWORKING' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/real/gallery/comunes/1.jpg' },
            { src: 'images/projects/real/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/real/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/real/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_REAL_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Real, La Victoria, Lima'
    }
  };
}
