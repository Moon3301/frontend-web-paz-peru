import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-taller',
  standalone: false,
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css'
})
export class TallerComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-taller.webp',
      projectName: 'Taller',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: 'En venta',
      description: 'TODO: Descripción del proyecto Taller',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(60, 40, 30, 0.75)',
      slides: [
        { image: 'images/projects/taller/banner-1.jpg', alt: 'Taller - Fachada' },
        { image: 'images/projects/taller/banner-2.jpg', alt: 'Taller - Vista exterior' },
        { image: 'images/projects/taller/banner-3.jpg', alt: 'Taller - Vista exterior' },
      ]
    },
    stats: {
      sectionTitle: 'TU HOGAR EN EL CORAZÓN DE LA CIUDAD',
      backgroundColor: '#800133',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'Desde 44 m2 hasta 154 m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'Toribio Polo 450, Miraflores'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-taller-text.png',
      interiorImage: 'images/projects/taller/specs/interior.jpg',
      projectName: 'Taller',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
      ],
      floors: '13 pisos + azotea',
      unitTypes: '1, 2 y 3 ambientes',
      areaRange: 'Desde 44 m2 hasta 154 m2',
      backgroundColor: '#afcdc1',
      textColor: '#161129',
    },
    amenities: {
      backgroundColor: '#ece8dc',
      textColor: '#161129',
      items: [
        { icon: 'images/projects/taller/icons/ico-lobby.png', label: 'LOBBY' },
        { icon: 'images/projects/taller/icons/ico-parrillas.png', label: 'AREA DE PARRILLAS' },
        { icon: 'images/projects/taller/icons/ico-piscina.png', label: 'PISCINA' },
        { icon: 'images/projects/taller/icons/ico-gimnasio.png', label: 'GIMNASIO' },
        { icon: 'images/projects/taller/icons/ico-pet-zone.png', label: 'PET ZONE' },
        { icon: 'images/projects/taller/icons/ico-coworking.png', label: 'COWORKING' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/taller/gallery/comunes/1.png' },
            { src: 'images/projects/taller/gallery/comunes/2.png' },
            { src: 'images/projects/taller/gallery/comunes/3.png' },
            { src: 'images/projects/taller/gallery/comunes/4.png' },
            { src: 'images/projects/taller/gallery/comunes/5.png' },
            { src: 'images/projects/taller/gallery/comunes/6.png' },
            { src: 'images/projects/taller/gallery/comunes/7.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/taller/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/taller/gallery/interiores/1.png' },
            { src: 'images/projects/taller/gallery/interiores/2.png' },
            { src: 'images/projects/taller/gallery/interiores/3.png' },
            { src: 'images/projects/taller/gallery/interiores/4.png' },
            { src: 'images/projects/taller/gallery/interiores/5.png' },
            { src: 'images/projects/taller/gallery/interiores/6.png' },
            { src: 'images/projects/taller/gallery/interiores/7.png' },
            { src: 'images/projects/taller/gallery/interiores/8.png' },
          ]
        }
      ]
    },
    quoter: {
      projectId: 28,
      projectName: 'TALLER'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_TALLER_GOOGLE_MAPS_EMBED',
      address: 'Toribio Polo 450, Miraflores',
      backgroundColor: '#ece8dc',
    },
    video: {
      backgroundColor: '#ece8dc',
      textColor: '#161129',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO TALLER',
      fallbackImage: 'images/projects/taller/img-video.jpg',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/taller/index.htm',
      projectTitle: 'CONOCE PROYECTO TALLER',
      backgroundColor: '#ece8dc',
      textColor: '#161129',
    },
  };
}
