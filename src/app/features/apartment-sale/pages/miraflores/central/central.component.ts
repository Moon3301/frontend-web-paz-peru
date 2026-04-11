import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-central',
  standalone: false,
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-central.png',
      projectName: 'Central',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: '¡ÚLTIMOS DEPAS!',
      description: 'TU DEPA DE 3 AMBIENTES CON PRECIO DESDE S/ 764,000*',
      overlayColor: 'rgba(178, 140, 173, 0.5)',
      slides: [
        { image: 'images/projects/central/hero-1.jpg', alt: 'Central - Fachada' },
        { image: 'images/projects/central/hero-2.jpg', alt: 'Central - Vista exterior' },
      ]
    },
    stats: {
      areaRange: 'TODO: Rango de m2',
      location: 'TODO: Dirección del proyecto, Miraflores',
      commonAreasLabel: 'Para disfrutar todos los días'
    },
    specs: {
      interiorImage: 'images/projects/central/specs/interior.jpg',
      projectName: 'Central',
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
      backgroundColor: '#3A3A5C',
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
            { src: 'images/projects/central/gallery/comunes/1.jpg' },
            { src: 'images/projects/central/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/central/gallery/exteriores/1.jpg' },
            { src: 'images/projects/central/gallery/exteriores/2.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/central/gallery/interiores/1.jpg' },
            { src: 'images/projects/central/gallery/interiores/2.jpg' },
          ]
        }
      ]
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_CENTRAL_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Central, Miraflores, Lima'
    }
  };
}
