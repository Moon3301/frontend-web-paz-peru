import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-amalfi',
  standalone: false,
  templateUrl: './amalfi.component.html',
  styleUrl: './amalfi.component.css'
})
export class AmalfiComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Amalfi',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      overlayColor: 'rgba(150, 90, 30, 0.75)',
      slides: [
        { image: 'images/projects/amalfi/hero-1.jpg', alt: 'Amalfi - Fachada' },
        { image: 'images/projects/amalfi/hero-2.jpg', alt: 'Amalfi - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, San Miguel',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/amalfi/specs/interior.jpg',
      projectName: 'Amalfi',
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
      backgroundColor: '#D4903A',
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
            { src: 'images/projects/amalfi/gallery/comunes/1.jpg' },
            { src: 'images/projects/amalfi/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/amalfi/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/amalfi/gallery/interiores/1.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_AMALFI_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Amalfi, San Miguel, Lima'
    }
  };
}
