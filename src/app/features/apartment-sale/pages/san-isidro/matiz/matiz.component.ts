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
      logo: 'images/logos/projects/logo-matiz-1-2.webp',
      projectName: 'Matiz',
      district: 'DEPARTAMENTOS EN SAN ISIDRO',
      // badge: 'En venta',
      description: 'ENTREGA INMEDIATA',
      priceLine1: 'TU DEPA DE 2 AMBIENTE CON PRECIO DESDE',
      priceFrom: 'S/ 727,000*',
      overlayColor: 'rgba(50, 80, 50, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#ffffff',
      descriptionColor: '#e0e8ec',
      priceLabelColor: '#e0e8ec',
      priceFromColor: '#ffffff',
      textPosition: { bottom: '25%' },
      slides: [
        { image: 'images/projects/matiz/1.jpeg', alt: 'Matiz - Fachada' },
      ]
    },
    stats: {
      areaRange: {
        icon: 'images/projects/matiz/icons/ico_departamento.png',
        label: 'Departamentos Desde 80 m2 hasta 255 m2'
      },
      location: {
        icon: 'images/projects/matiz/icons/ico_ubicacion.png',
        label: 'Ubicación del proyecto Calle Machaypuito 163, San Isidro'
      },
      commonAreasLabel: {
        icon: 'images/projects/matiz/icons/ico_areaComunes.png',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      backgroundColor: '#7f9097',
      textColor: '#FFFFFF',
      logo: 'images/logos/projects/logo-matiz-1.png',
      interiorImage: 'images/projects/matiz/specs/interior.png',
      projectName: 'Matiz',
      projectSubtitle: 'DEPARTAMENTOS EN SAN ISIDRO',
      brochureUrl: 'docs/brochures/matiz.pdf',
      videoUrl: 'https://www.youtube.com/embed/BAzaXqK8Emg',
      amenityIcons: [
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/pool.svg', label: 'Piscina' },
        // { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        // { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: 'Pisos 6 pisos + Azotea',
      unitTypes: 'Flats y Dúplex 2 y 3 ambientes.',
      areaRange: 'Desde 80 m2 hasta 255 m2'
    },
    amenities: {
      backgroundColor: '#a15739',
      items: [
        { icon: 'images/projects/matiz/icons/ico_lobby.png', label: 'LOBBY' },
        { icon: 'images/projects/matiz/icons/ico_piscina.png', label: 'ROOFTOP POOL' },
        { icon: 'images/projects/matiz/icons/ico_parrilla.png', label: 'BBQ ZONE' },
        { icon: 'images/projects/matiz/icons/ico_bar.png', label: 'LOUNGE' }
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/matiz/gallery/comunes/1.png' },
            { src: 'images/projects/matiz/gallery/comunes/2.png' },
            { src: 'images/projects/matiz/gallery/comunes/3.png' },
            { src: 'images/projects/matiz/gallery/comunes/4.png' }
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
            { src: 'images/projects/matiz/gallery/interiores/1.png' },
            { src: 'images/projects/matiz/gallery/interiores/2.png' },
            { src: 'images/projects/matiz/gallery/interiores/3.png' },
            { src: 'images/projects/matiz/gallery/interiores/4.png' },
            { src: 'images/projects/matiz/gallery/interiores/5.png' },
            { src: 'images/projects/matiz/gallery/interiores/6.png' },
            { src: 'images/projects/matiz/gallery/interiores/7.png' },
            { src: 'images/projects/matiz/gallery/interiores/8.png' },
            { src: 'images/projects/matiz/gallery/interiores/9.png' },
          ]
        }
      ]
    },
    video: {
      url: 'https://www.youtube.com/embed/BAzaXqK8Emg',
      type: 'youtube',
      title: 'CONOCE PROYECTO MATIZ',
      fallbackImage: 'images/projects/central/video-central.png',
      backgroundColor: '#a15739'
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/matiz/ac/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#7f9097',
      textColor: '#FFFFFF',
    },
    quoter: {
      iframeUrl: '/apicotizador/matiz/',
      projectId: 26,
      projectName: 'MATIZ'
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.271052535379!2d-77.03700532408901!3d-12.09358728814692!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c85d9be5ca49%3A0xac684974e9adb521!2sC.%20Machaypuito%20163%2C%20San%20Isidro%2015073%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776207655492!5m2!1ses!2scl',
      address: 'Calle Machaypuito 163, San Isidro',
      backgroundColor: '#7f9097',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Calle+Machaypuito+163,+San+Isidro,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Calle+Machaypuito+163+San+Isidro+Lima&navigate=yes',
    }
  };
}
