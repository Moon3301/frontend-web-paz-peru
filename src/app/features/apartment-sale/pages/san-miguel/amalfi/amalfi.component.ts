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
      logo: 'images/logos/projects/logo-amalfi.svg',
      projectName: 'Amalfi',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      description: 'TODO: Descripción del proyecto Amalfi',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(150, 90, 30, 0.75)',
      slides: [
        { image: 'images/projects/amalfi/hero-1.jpg', alt: 'Amalfi - Fachada' },
        { image: 'images/projects/amalfi/hero-2.jpg', alt: 'Amalfi - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#3e6d81',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/amalfi/icons/2.svg',
        label: '17 pisos'
      },
      location: {
        icon: 'images/projects/amalfi/icons/3.svg',
        label: 'Desde: 36.98m2 Hasta: 135.46m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/amalfi/icons/1.svg',
        label: '1, 2 y 3 Dormitorios'
      }
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
      backgroundColor: '#dcd0c9',
      textColor: '#2d5066',
      items: [
        { icon: 'images/projects/amalfi/icons/icono-salakids-amalfi.svg', label: 'KIDS ROOM' },
        { icon: 'images/projects/amalfi/icons/icono-parrilla-amalfi.svg', label: 'BBQ ZONE' },
        { icon: 'images/projects/amalfi/icons/icono-coworking-amalfi.svg', label: 'COWORKING' },
        { icon: 'images/projects/amalfi/icons/icono-piscina-amalfi.svg', label: 'PISCINA' },
        { icon: 'images/projects/amalfi/icons/icono-gimnasio-amalfi.svg', label: 'GYM' },
        { icon: 'images/projects/amalfi/icons/icono-salabar-amalfi.svg', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/amalfi/gallery/comunes/1.png' },
            { src: 'images/projects/amalfi/gallery/comunes/2.png' },
            { src: 'images/projects/amalfi/gallery/comunes/3.png' },
            { src: 'images/projects/amalfi/gallery/comunes/4.png' },
            { src: 'images/projects/amalfi/gallery/comunes/5.png' },
            { src: 'images/projects/amalfi/gallery/comunes/6.png' },
            { src: 'images/projects/amalfi/gallery/comunes/7.png' },
            { src: 'images/projects/amalfi/gallery/comunes/8.png' },
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
            { src: 'images/projects/amalfi/gallery/interiores/1.png' },
            { src: 'images/projects/amalfi/gallery/interiores/2.png' },
            { src: 'images/projects/amalfi/gallery/interiores/3.png' },
            { src: 'images/projects/amalfi/gallery/interiores/4.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#2d5066',
      textColor: '#dcd0c9',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO AMALFI',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/amalfi/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#2d5066',
      textColor: '#dcd0c9',
    },
    quoter: {
      projectId: 1,
      projectName: 'Amalfi',
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_AMALFI_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Amalfi, San Miguel, Lima'
    }
  };
}
