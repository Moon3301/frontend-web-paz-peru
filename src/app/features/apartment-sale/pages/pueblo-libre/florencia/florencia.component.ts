import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-florencia',
  standalone: false,
  templateUrl: './florencia.component.html',
  styleUrl: './florencia.component.css'
})
export class FlorenciaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Florencia',
      district: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      badge: 'En venta',
      overlayColor: 'rgba(120, 60, 20, 0.75)',
      slides: [
        { image: 'images/projects/florencia/hero-1.jpg', alt: 'Florencia - Fachada' },
        { image: 'images/projects/florencia/hero-2.jpg', alt: 'Florencia - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, Pueblo Libre',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/florencia/specs/interior.jpg',
      projectName: 'Florencia',
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
      backgroundColor: '#A0522D',
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
            { src: 'images/projects/florencia/gallery/comunes/1.jpg' },
            { src: 'images/projects/florencia/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/florencia/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/florencia/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_FLORENCIA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Florencia, Pueblo Libre, Lima'
    }
  };
}
