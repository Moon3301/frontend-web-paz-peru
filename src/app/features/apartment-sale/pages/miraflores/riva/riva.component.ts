import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-riva',
  standalone: false,
  templateUrl: './riva.component.html',
  styleUrl: './riva.component.css'
})
export class RivaComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Riva',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: 'En venta',
      overlayColor: 'rgba(60, 90, 100, 0.75)',
      slides: [
        { image: 'images/projects/riva/hero-1.jpg', alt: 'Riva - Fachada' },
        { image: 'images/projects/riva/hero-2.jpg', alt: 'Riva - Vista exterior' },
        { image: 'images/projects/riva/hero-3.jpg', alt: 'Riva - Detalle' },
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
      interiorImage: 'images/projects/riva/specs/interior.jpg',
      projectName: 'Riva',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/pool.svg', label: 'Piscina' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: 'TODO: Número de pisos',
      unitTypes: 'TODO: Tipos de unidades',
      areaRange: 'TODO: Rango de metrajes'
    },
    amenities: {
      backgroundColor: '#6B8E7F',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
        { icon: 'svg/icons/pool.svg', label: 'PISCINA' },
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
            { src: 'images/projects/riva/gallery/comunes/1.jpg' },
            { src: 'images/projects/riva/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/riva/gallery/exteriores/1.jpg' },
            { src: 'images/projects/riva/gallery/exteriores/2.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/riva/gallery/interiores/1.jpg' },
            { src: 'images/projects/riva/gallery/interiores/2.jpg' },
          ]
        }
      ]
    },
    quoter: {
      iframeUrl: '/apicotizador/riva/',
      projectId: 14,
      projectName: 'RIVA'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_RIVA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Riva, Miraflores, Lima'
    }
  };
}
