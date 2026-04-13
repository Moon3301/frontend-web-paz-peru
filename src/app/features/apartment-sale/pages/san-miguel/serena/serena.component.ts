import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-serena',
  standalone: false,
  templateUrl: './serena.component.html',
  styleUrl: './serena.component.css'
})
export class SerenaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Serena',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      overlayColor: 'rgba(90, 110, 90, 0.75)',
      slides: [
        { image: 'images/projects/serena/hero-1.jpg', alt: 'Serena - Fachada' },
        { image: 'images/projects/serena/hero-2.jpg', alt: 'Serena - Vista exterior' },
      ]
    },
    stats: {
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'TODO: Rango de m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'TODO: Dirección del proyecto, San Miguel'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      interiorImage: 'images/projects/serena/specs/interior.jpg',
      projectName: 'Serena',
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
      backgroundColor: '#7A9E7E',
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
            { src: 'images/projects/serena/gallery/comunes/1.jpg' },
            { src: 'images/projects/serena/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/serena/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/serena/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_SERENA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Serena, San Miguel, Lima'
    }
  };
}
