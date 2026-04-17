import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-savia',
  standalone: false,
  templateUrl: './savia.component.html',
  styleUrl: './savia.component.css'
})
export class SaviaComponent {
  config: ProjectConfig = {
    hero: {
      
      projectName: 'Savia',
      district: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      // badge: 'En venta',
      description: 'TODO: Descripción del proyecto Savia',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(50, 100, 50, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#9aaf99',
      descriptionColor: '#ddeedd',
      priceLabelColor: '#ddeedd',
      priceFromColor: '#607567',
      textPosition: { bottom: '0%' },
      slides: [
        { image: 'images/projects/savia/1.jpg', alt: 'Savia - Fachada' },
      ]
    },
    stats: {
      backgroundColor: '#607567',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/savia/icons/icono-pisos.svg',
        label: '27 pisos +Azotea'
      },
      location: {
        icon: 'images/projects/savia/icons/icono-metraje.svg',
        label: 'Desde: 39.82m2 Hasta: 140.38m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/savia/icons/icono-dormitorios.svg',
        label: '1-3 Dormitorios'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-savia-1.png',
      textColor: '#858d86ff',
      interiorImage: 'images/projects/savia/specs/interior.png',
      projectName: 'Savia',
      projectSubtitle: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      description: 'Cuando buscamos donde vivir, queremos un lugar que nos de paz, que tenga estilo y por ello nos esforzamos por encontrar ese espacio ideal, que este se convierta en nuestro hogar. Sabiendo esto, Paz Inmobiliaria, presenta Savia, un proyecto ubicado en la Av. Brasil - Pueblo Libre (Límite con Jesús María), el cual reúne todo lo que buscamos para despertar cada día en un lugar en que soñamos.',
      amenityIcons: [
        // { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        // { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: '27 pisos + Azotea',
      unitTypes: '1, 2 y 3 dormitorios',
      areaRange: 'Desde 39.82m2 hasta 140.38m2',
      brochureUrl: 'docs/brochures/savia.pdf',
      videoUrl: 'https://www.youtube.com/embed/lvL6jsWh79s',
    },
    amenities: {
      backgroundColor: '#9aaf99',
      items: [
        { icon: 'images/projects/savia/icons/icono-juegos.png', label: 'KIDS ROOM' },
        { icon: 'images/projects/savia/icons/icono-bbq.png', label: 'BBQ ZONE' },
        { icon: 'images/projects/savia/icons/icono-coworking.svg', label: 'COWORKING' },
        { icon: 'images/projects/savia/icons/icono-pool.png', label: 'PISCINA' },
        { icon: 'images/projects/savia/icons/icono-gym.png', label: 'GYM' },
        { icon: 'images/projects/savia/icons/icono-bar.png', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/savia/gallery/comunes/1.png' },
            { src: 'images/projects/savia/gallery/comunes/2.png' },
            { src: 'images/projects/savia/gallery/comunes/3.png' },
            { src: 'images/projects/savia/gallery/comunes/4.png' },
            { src: 'images/projects/savia/gallery/comunes/5.png' },
            { src: 'images/projects/savia/gallery/comunes/6.png' },
            { src: 'images/projects/savia/gallery/comunes/7.png' },
            { src: 'images/projects/savia/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/savia/gallery/interiores/1.png' },
            { src: 'images/projects/savia/gallery/interiores/2.png' },
            { src: 'images/projects/savia/gallery/interiores/3.png' },
            { src: 'images/projects/savia/gallery/interiores/4.png' },
            { src: 'images/projects/savia/gallery/interiores/5.png' },
            { src: 'images/projects/savia/gallery/interiores/6.png' },
            { src: 'images/projects/savia/gallery/interiores/7.png' }
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#9aaf99',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/48vBugkbJc8',
      type: 'youtube',
      title: 'CONOCE PROYECTO SAVIA',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/savia/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#9aaf99',
      textColor: '#FFFFFF',
    },
    quoter: {
      projectId: 10,
      projectName: 'SAVIA',
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.561175651245!2d-77.05548672408936!3d-12.073685088165174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c94c029309db%3A0x8a3ee11318cf2856!2sWWGW%2BGRH%2C%20Av.%20Brasil%201470%2C%20Pueblo%20Libre%2015084%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776207417754!5m2!1ses!2scl',
      address: 'Av. Brasil 1470 - Pueblo Libre',
      backgroundColor: '#9aaf99',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Av.+Brasil+1470,+Pueblo+Libre,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+Brasil+1470+Pueblo+Libre+Lima&navigate=yes',
    }
  };
}
