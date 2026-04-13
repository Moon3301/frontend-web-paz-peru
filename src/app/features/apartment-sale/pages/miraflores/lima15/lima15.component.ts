import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-lima15',
  standalone: false,
  templateUrl: './lima15.component.html',
  styleUrl: './lima15.component.css'
})
export class Lima15Component {
  config: ProjectConfig = {
    hero: {
      logo: 'images/projects/lima15/icons/logo-lima15-white.png',
      projectName: 'Lima 15',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: 'LANZAMIENTO',
      description: 'Tu depa de 2 ambientes con precio desde:',
      priceFrom: '678,000*',
      overlayColor: 'rgba(98, 62, 75, 0.75)',
      slides: [
        { image: 'images/projects/lima15/hero-1.png', alt: 'Lima 15 - Fachada' },
      ]
    },
    stats: {
      backgroundColor: '#CA995E',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/lima15/icons/departamento.svg',
        label: 'TODO: Rango de m2'
      },
      location: {
        icon: 'images/projects/lima15/icons/ubicacion.svg',
        label: 'TODO: Dirección del proyecto, Miraflores'
      },
      commonAreasLabel: {
        icon: 'images/projects/lima15/icons/zona-de-parrilla.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      
      interiorImage: 'images/projects/lima15/specs/interior.jpg',
      projectName: 'Lima 15',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: 'TODO: Número de pisos',
      unitTypes: 'TODO: Tipos de unidades',
      areaRange: 'TODO: Rango de metrajes'
    },
    amenities: {
      backgroundColor: '#8B4513',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
        { icon: 'svg/icons/meeting-room.svg', label: 'SALA DE REUNIONES' },
        { icon: 'svg/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'svg/icons/grill.svg', label: 'ZONA DE PARRILLA' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/lima15/gallery/comunes/1.jpg' },
            { src: 'images/projects/lima15/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/lima15/gallery/exteriores/1.jpg' },
            { src: 'images/projects/lima15/gallery/exteriores/2.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/lima15/gallery/interiores/1.jpg' },
            { src: 'images/projects/lima15/gallery/interiores/2.jpg' },
          ]
        }
      ]
    },
    quoter: {
      iframeUrl: '/apicotizador/lima15/',
      projectId: 27,
      projectName: 'LIMA 15'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_LIMA15_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Lima 15, Miraflores, Lima'
    }
  };
}
