import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-patio-la-paz',
  standalone: false,
  templateUrl: './patio-la-paz.component.html',
  styleUrl: './patio-la-paz.component.css'
})
export class PatioLaPazComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Patio La Paz',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      overlayColor: 'rgba(80, 70, 50, 0.75)',
      slides: [
        { image: 'images/projects/patio-la-paz/hero-1.jpg', alt: 'Patio La Paz - Fachada' },
        { image: 'images/projects/patio-la-paz/hero-2.jpg', alt: 'Patio La Paz - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, San Miguel',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/patio-la-paz/specs/interior.jpg',
      projectName: 'Patio La Paz',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
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
      backgroundColor: '#8B6F57',
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
            { src: 'images/projects/patio-la-paz/gallery/comunes/1.jpg' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/patio-la-paz/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/patio-la-paz/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_PATIO_LA_PAZ_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Patio La Paz, San Miguel, Lima'
    }
  };
}
