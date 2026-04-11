import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-savia',
  standalone: false,
  templateUrl: './savia.component.html',
  styleUrl: './savia.component.css'
})
export class SaviaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Savia',
      district: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      badge: 'En venta',
      overlayColor: 'rgba(50, 100, 50, 0.75)',
      slides: [
        { image: 'images/projects/savia/hero-1.jpg', alt: 'Savia - Fachada' },
        { image: 'images/projects/savia/hero-2.jpg', alt: 'Savia - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, Pueblo Libre',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/savia/specs/interior.jpg',
      projectName: 'Savia',
      projectSubtitle: 'DEPARTAMENTOS EN PUEBLO LIBRE',
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
      backgroundColor: '#5C8A5C',
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
            { src: 'images/projects/savia/gallery/comunes/1.jpg' },
            { src: 'images/projects/savia/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/savia/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/savia/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_SAVIA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Savia, Pueblo Libre, Lima'
    }
  };
}
