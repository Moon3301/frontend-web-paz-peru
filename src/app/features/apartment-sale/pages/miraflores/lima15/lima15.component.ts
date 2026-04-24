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
      // badge: 'LANZAMIENTO',
      description: 'TU DEPA DE 2 AMBIENTES CON PRECIO DESDE:',
      priceFrom: 'S/ 678,000*',
      overlayColor: 'rgba(98, 62, 75, 0.75)',
      textColor: '#ffffff',
      descriptionStyle: {
        fontSize: '1.2rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      priceLabelStyle: { fontSize: '1rem' },
      priceFromStyle: {
        fontSize: '2.5rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      badgeColor: '#CA995E',
      descriptionColor: '#f0dfc0',
      priceLabelColor: '#f0dfc0',
      priceFromColor: '#CA995E',
      textPosition: { bottom: '20%' },
      slides: [
        { image: 'images/projects/lima15/hero-1.png', alt: 'Lima 15 - Fachada' },
      ]
    },
    stats: {
      backgroundColor: '#CA995E',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/lima15/icons/departamento.svg',
        label: 'Desde 81 m2 hasta 199 m2'
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
      unitTypes: 'Flats y duplex de 2 y 3 ambientes',
      areaRange: 'Desde 81 m2 hasta 199 m2',
      logo: 'images/logos/projects/logo-lima-morado.svg',
      brochureUrl: 'docs/brochures/lima-15.pdf',
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
            { src: 'images/projects/lima15/gallery/exteriores/1.webp' }
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
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9221261625453!2d-77.03591522408877!3d-12.11748068812482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c817df310d77%3A0xffa929a1e359ca0f!2sCa.%20Gral.%20Borgo%C3%B1o%20240%2C%20Miraflores%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776206396575!5m2!1ses!2scl',
      address: 'Ca. Gral. Borgoño 240, Miraflores',
      backgroundColor: '#52273b',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Ca.+Gral.+Borgo%C3%B1o+240,+Miraflores,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Ca+Gral+Borgo%C3%B1o+240+Miraflores+Lima&navigate=yes',
    },
    video: {
      backgroundColor: '#8da096',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/WzLVR52J6xw',
      type: 'youtube',
      title: 'CONOCE PROYECTO LIMA 15',
      fallbackImage: 'images/projects/lima15/video-lima.jpg',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/lima15/ac/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#52273b',
      textColor: '#FFFFFF',
    },
    executives: [
      {
        name: 'Mireia Gutierrez',
        role: 'Ejecutiva de Ventas',
        phone: '908930387',
        photo: 'images/executives/mireia-gutierrez.jpg',
      },
      {
        name: 'Joel Pezo',
        role: 'Ejecutivo de Ventas',
        phone: '981495711',
        photo: 'images/executives/joel-pezo.jpg',
      },
    ],
  };
}
