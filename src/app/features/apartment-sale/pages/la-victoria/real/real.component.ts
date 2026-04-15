import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-real',
  standalone: false,
  templateUrl: './real.component.html',
  styleUrl: './real.component.css'
})
export class RealComponent {
  config: ProjectConfig = {
    hero: {
      // logo: 'images/logos/projects/logo-real.webp',
      projectName: 'Real',
      district: 'DEPARTAMENTOS EN LA VICTORIA',
      badge: 'En venta',
      description: 'TODO: Descripción del proyecto Real',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(90, 30, 30, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#778b5c',
      descriptionColor: '#d8e0cc',
      priceLabelColor: '#d8e0cc',
      priceFromColor: '#778b5c',
      textPosition: { bottom: '10%' },
      slides: [
        { image: 'images/projects/real/logo-hero-1.jpg', alt: 'Real - Fachada' },
        { image: 'images/projects/real/logo-hero-2.jpg', alt: 'Real - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#778b5c',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/real/icons/icono-depto.svg',
        label: '1-2-3 Dormitorios'
      },
      location: {
        icon: 'images/projects/real/icons/icono-metraje.svg',
        label: 'Desde: 33m2 Hasta: 72.3m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/real/icons/icono-pisos.png',
        label: '20 + 22 Pisos'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-real-1.png',
      description: 'Paz Inmobiliaria presenta Residencial Real, 2 modernas torres con todo lo que necesitas; la comodidad de una ubicación inmejorable con las mejores áreas comunes y acabados de primera. Todo esto, al precio correcto. Residencial Real se ubica frente al Circuito mágico del agua con fácil acceso a avenidas principales que conectan distritos como Jesús María; Lince; San Isidro y La Victoria. Su diseño práctico y moderno te permitirá volver Real todo los momentos que siempre soñaste.',
      backgroundColor: '#778b5c',
      videoUrl: 'https://www.youtube.com/embed/lvL6jsWh79s',
      brochureUrl: 'docs/brochures/real.pdf',
      textColor: '#FFFFFF',
      interiorImage: 'images/projects/real/specs/interior.png',
      projectName: 'Real',
      projectSubtitle: 'DEPARTAMENTOS EN LA VICTORIA',
      amenityIcons: [
        // { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        // { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: '20 + 22 Pisos',
      unitTypes: '1-2-3 Dormitorios',
      areaRange: 'Desde: 33m2 Hasta: 72.3m2'
    },
    amenities: {
      backgroundColor: '#7a6c62',
      items: [
        { icon: 'images/projects/real/icons/icono-salakids.svg', label: 'KIDS ROOM' },
        { icon: 'images/projects/real/icons/icono-parrilla.svg', label: 'BBQ ZONE' },
        { icon: 'images/projects/real/icons/icono-coworking.svg', label: 'COWORKING' },
        { icon: 'images/projects/real/icons/icono-piscina.svg', label: 'PISCINA' },
        { icon: 'images/projects/real/icons/icono-gimnasio.svg', label: 'GIMNASIO' },
        { icon: 'images/projects/real/icons/icono-salabar.svg', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/real/gallery/comunes/1.png' },
            { src: 'images/projects/real/gallery/comunes/2.png' },
            { src: 'images/projects/real/gallery/comunes/3.png' },
            { src: 'images/projects/real/gallery/comunes/4.png' },
            { src: 'images/projects/real/gallery/comunes/5.png' },
            { src: 'images/projects/real/gallery/comunes/6.png' },
            { src: 'images/projects/real/gallery/comunes/7.png' },
            { src: 'images/projects/real/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/real/gallery/exteriores/1.png' },
            { src: 'images/projects/real/gallery/exteriores/2.png' },
            { src: 'images/projects/real/gallery/exteriores/3.png' },
            { src: 'images/projects/real/gallery/exteriores/4.png' },
            { src: 'images/projects/real/gallery/exteriores/5.png' },
            { src: 'images/projects/real/gallery/exteriores/6.png' },
            { src: 'images/projects/real/gallery/exteriores/7.png' },
            { src: 'images/projects/real/gallery/exteriores/8.png' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/real/gallery/interiores/1.png' },
            { src: 'images/projects/real/gallery/interiores/2.png' },
            { src: 'images/projects/real/gallery/interiores/3.png' },
            { src: 'images/projects/real/gallery/interiores/4.png' },

          ]
        }
      ]
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/real/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#778b5c',
      textColor: '#FFFFFF',
    },
    video: {
      url: 'https://www.youtube.com/embed/lY6fxsGDaw4',
      type: 'youtube',
      title: 'CONOCE PROYECTO REAL',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    quoter: {
      projectId: 9,
      projectName: 'REAL',
    },
    ubication: {
      backgroundColor: '#778b5c',
      textColor: '#FFFFFF',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.576519865062!2d-77.03280412408937!3d-12.072631588166155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8925c6a03ef%3A0x5a0e4809f222373d!2sJr.%20Francia%20130%2C%20Lima%2015033%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776206266980!5m2!1ses!2scl',
      address: 'Jr. Francia 130, La Victoria, Lima'
    }
  };
}
