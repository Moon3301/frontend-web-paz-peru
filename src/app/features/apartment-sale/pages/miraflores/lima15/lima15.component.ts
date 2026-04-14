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
      logo: 'images/logos/projects/logo-lima.webp',
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
        label: 'Desde 81 m2 hasta 149 m2'
      },
      location: {
        icon: 'images/projects/lima15/icons/ubicacion.svg',
        label: 'Ca. Gral. Borgoño 240, Miraflores'
      },
      commonAreasLabel: {
        icon: 'images/projects/lima15/icons/zona-de-parrilla.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      interiorImage: 'images/projects/lima15/specs/interior.png',
      projectName: 'Lima 15',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: '11 pisos + Azotea',
      unitTypes: '1, 2 y 3 ambientes',
      areaRange: 'Desde 81 m2 hasta 149 m2',
      logo: 'images/logos/projects/logo-lima-morado.svg',
      brochureUrl: 'docs/brochures/lima15.pdf',
      videoUrl: 'https://www.youtube.com/embed/lvL6jsWh79s',
    },
    amenities: {
      backgroundColor: '#52273b',
      items: [
        { icon: 'images/projects/lima15/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'images/projects/lima15/icons/gimnasio.svg', label: 'GIMNASIO' },
        { icon: 'images/projects/lima15/icons/sala-bar.svg', label: 'SALA DE REUNIONES' },
        { icon: 'images/projects/lima15/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'images/projects/lima15/icons/zona-de-parrilla.svg', label: 'ZONA DE PARRILLA' },
         { icon: 'images/projects/lima15/icons/piscina.svg', label: 'PISCINA' },
          { icon: 'images/projects/lima15/icons/patio-interno.svg', label: 'PATIO INTERNO' },

      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/lima15/gallery/comunes/1.png' },
            { src: 'images/projects/lima15/gallery/comunes/2.png' },
            { src: 'images/projects/lima15/gallery/comunes/3.png' },
            { src: 'images/projects/lima15/gallery/comunes/4.png' },
            { src: 'images/projects/lima15/gallery/comunes/5.png' },
            { src: 'images/projects/lima15/gallery/comunes/6.png' },
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
            { src: 'images/projects/lima15/gallery/interiores/1.png' },
            { src: 'images/projects/lima15/gallery/interiores/2.png' },
            { src: 'images/projects/lima15/gallery/interiores/3.png' },
            { src: 'images/projects/lima15/gallery/interiores/4.png' },
            { src: 'images/projects/lima15/gallery/interiores/5.png' },
            { src: 'images/projects/lima15/gallery/interiores/6.png' },
          ]
        }
      ]
    },
    quoter: {
      projectId: 27,
      projectName: 'LIMA 15'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_LIMA15_GOOGLE_MAPS_EMBED',
      address: 'Ca. Gral. Borgoño 240, Miraflores',
      backgroundColor: '#52273b',
    },
    video: {
      backgroundColor: '#8da096',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO LIMA 15',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/lima15/ac/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#52273b',
      textColor: '#FFFFFF',
    },
  };
}
