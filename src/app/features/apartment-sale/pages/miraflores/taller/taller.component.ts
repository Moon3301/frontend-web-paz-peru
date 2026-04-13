import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-taller',
  standalone: false,
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css'
})
export class TallerComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Taller',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: 'En venta',
      overlayColor: 'rgba(60, 40, 30, 0.75)',
      slides: [
        { image: 'images/projects/taller/hero-1.jpg', alt: 'Taller - Fachada' },
        { image: 'images/projects/taller/hero-2.jpg', alt: 'Taller - Vista exterior' },
      ]
    },
    stats: {
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'TODO: Rango de m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'TODO: Dirección del proyecto, Miraflores'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      interiorImage: 'images/projects/taller/specs/interior.jpg',
      projectName: 'Taller',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
      ],
      floors: 'TODO: Número de pisos',
      unitTypes: 'TODO: Tipos de unidades',
      areaRange: 'TODO: Rango de metrajes'
    },
    amenities: {
      backgroundColor: '#5C4A3A',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
        { icon: 'svg/icons/meeting-room.svg', label: 'SALA DE REUNIONES' },
        { icon: 'svg/icons/grill.svg', label: 'ZONA DE PARRILLA' },
        { icon: 'svg/icons/coworking.svg', label: 'COWORKING' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/taller/gallery/comunes/1.jpg' },
            { src: 'images/projects/taller/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/taller/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/taller/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_TALLER_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Taller, Miraflores, Lima'
    }
  };
}
