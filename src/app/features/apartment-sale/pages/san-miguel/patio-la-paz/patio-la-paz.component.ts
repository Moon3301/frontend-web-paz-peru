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
      logo: 'images/logos/projects/logo-patio-la-paz.webp',
      projectName: 'Patio La Paz',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      description: 'TODO: Descripción del proyecto Patio La Paz',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(80, 70, 50, 0.75)',
      slides: [
        { image: 'images/projects/patio-la-paz/1.jpg', alt: 'Patio La Paz - Fachada' },
      ]
    },
    stats: {
      backgroundColor: '#231f20',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/patio-la-paz/icons/cuadrado.png',
        label: 'De 1, 2 y 3 dormitorios desde 40 m2'
      },
      location: {
        icon: 'images/projects/patio-la-paz/icons/map.png',
        label: 'Avenida La Paz 2551 San Miguel'
      },
      commonAreasLabel: {
        icon: 'images/projects/patio-la-paz/icons/casita.png',
        label: 'Para toda la familia'
      }
    },
    specs: {
      backgroundColor: '#fab605',
      textColor: '#FFFFFF',
      logo: 'images/logos/projects/logo-patio-la-paz-1.png',
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
      backgroundColor: '#ffffff',
      textColor: '#231f20',
      items: [
        { icon: 'images/projects/patio-la-paz/icons/lobbdy.png', label: 'LOBBY' },
        { icon: 'images/projects/patio-la-paz/icons/sala.png', label: 'SALA DE NIÑOS' },
        { icon: 'images/projects/patio-la-paz/icons/arbol.png', label: 'PATIO CENTRAL' },
        { icon: 'images/projects/patio-la-paz/icons/piscina.png', label: 'PISCINA' },
        { icon: 'images/projects/patio-la-paz/icons/zona.png', label: 'ZONA DE PARRILLAS' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/patio-la-paz/gallery/comunes/1.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/2.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/3.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/4.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/5.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/6.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/7.png' },
            { src: 'images/projects/patio-la-paz/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/patio-la-paz/gallery/exteriores/1.png' },
            { src: 'images/projects/patio-la-paz/gallery/exteriores/2.png' },
            { src: 'images/projects/patio-la-paz/gallery/exteriores/3.png' },
            { src: 'images/projects/patio-la-paz/gallery/exteriores/4.png' },
            { src: 'images/projects/patio-la-paz/gallery/exteriores/5.png' },
            { src: 'images/projects/patio-la-paz/gallery/exteriores/6.png' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/patio-la-paz/gallery/interiores/1.png' },
            { src: 'images/projects/patio-la-paz/gallery/interiores/2.png' },
            { src: 'images/projects/patio-la-paz/gallery/interiores/3.png' },
            { src: 'images/projects/patio-la-paz/gallery/interiores/4.png' },
            { src: 'images/projects/patio-la-paz/gallery/interiores/5.png' },
            { src: 'images/projects/patio-la-paz/gallery/interiores/6.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#231f20',
      textColor: '#fab605',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO PATIO LA PAZ',
      fallbackImage: 'images/projects/patio-la-paz/video-patio.jpg',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/patio/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#231f20',
      textColor: '#fab605',
    },
    quoter: {
      projectId: 8,
      projectName: 'Patio La Paz'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_PATIO_LA_PAZ_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Patio La Paz, San Miguel, Lima'
    }
  };
}
