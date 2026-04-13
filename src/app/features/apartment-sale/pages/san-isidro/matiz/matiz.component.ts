import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-matiz',
  standalone: false,
  templateUrl: './matiz.component.html',
  styleUrl: './matiz.component.css'
})
export class MatizComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Matiz',
      district: 'DEPARTAMENTOS EN SAN ISIDRO',
      badge: 'En venta',
      overlayColor: 'rgba(50, 80, 50, 0.75)',
      slides: [
        { image: 'images/projects/matiz/hero-1.jpg', alt: 'Matiz - Fachada' },
        { image: 'images/projects/matiz/hero-2.jpg', alt: 'Matiz - Vista exterior' },
        { image: 'images/projects/matiz/hero-3.jpg', alt: 'Matiz - Detalle' },
      ]
    },
    stats: {
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'TODO: Rango de m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'TODO: Dirección del proyecto, San Isidro'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      interiorImage: 'images/projects/matiz/specs/interior.jpg',
      projectName: 'Matiz',
      projectSubtitle: 'DEPARTAMENTOS EN SAN ISIDRO',
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
      backgroundColor: '#4A6741',
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
            { src: 'images/projects/matiz/gallery/comunes/1.jpg' },
            { src: 'images/projects/matiz/gallery/comunes/2.jpg' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/matiz/gallery/exteriores/1.jpg' },
            { src: 'images/projects/matiz/gallery/exteriores/2.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/matiz/gallery/interiores/1.jpg' },
            { src: 'images/projects/matiz/gallery/interiores/2.jpg' },
          ]
        }
      ]
    },
    quoter: {
      iframeUrl: '/apicotizador/matiz/',
      projectId: 26,
      projectName: 'MATIZ'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_MATIZ_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Matiz, San Isidro, Lima'
    }
  };
}
