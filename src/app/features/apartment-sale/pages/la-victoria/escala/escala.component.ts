import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-escala',
  standalone: false,
  templateUrl: './escala.component.html',
  styleUrl: './escala.component.css'
})
export class EscalaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Escala',
      district: 'DEPARTAMENTOS EN LA VICTORIA',
      badge: 'En venta',
      overlayColor: 'rgba(50, 70, 90, 0.75)',
      slides: [
        { image: 'images/projects/escala/hero-1.jpg', alt: 'Escala - Fachada' },
        { image: 'images/projects/escala/hero-2.jpg', alt: 'Escala - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, La Victoria',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/escala/specs/interior.jpg',
      projectName: 'Escala',
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
      backgroundColor: '#4A5D6B',
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
            { src: 'images/projects/escala/gallery/comunes/1.jpg' },
            { src: 'images/projects/escala/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/escala/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/escala/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_ESCALA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Escala, La Victoria, Lima'
    }
  };
}
