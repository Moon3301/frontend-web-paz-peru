import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-escala',
  standalone: false,
  templateUrl: './escala.component.html',
  styleUrl: './escala.component.css'
})
export class EscalaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-escala-1-2.webp',
      projectName: 'Escala',
      district: 'DEPARTAMENTOS EN LA VICTORIA',
      // badge: 'En venta',
      // description: 'TODO: Descripción del proyecto Escala',
      // priceLine1: 'Depas con precio desde:',
      // priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(50, 70, 90, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#ff7f30',
      descriptionColor: '#f5f0cc',
      priceLabelColor: '#f5f0cc',
      priceFromColor: '#ff7f30',
      textPosition: { bottom: '0%' },
      slides: [
        { image: 'images/projects/escala/hero-1.jpg', alt: 'Escala - Fachada' },
        { image: 'images/projects/escala/hero-2.jpg', alt: 'Escala - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#9e3224',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/escala/icons/icono-ambiente-escala.png',
        label: 'Desde: 40m2 Hasta: 75.63m2'
      },
      location: {
        icon: 'images/projects/escala/icons/icono-metros-escala.png',
        label: '1, 2 y 3 ambientes'
      },
      commonAreasLabel: {
        icon: 'images/projects/escala/icons/icono-pisos-escala.png',
        label: '31 pisos'
      }
    },
    specs: {
      logo:'images/logos/projects/logo-escala-1.png',
      textColor: '#4A5D6B',
      description: 'ESCALA está ubicado en Gálvez Barrenechea, en la intersección de Javier Prado con el Puente Quiñones ESCALA es una moderna torre de 31 pisos con vista a toda la ciudad, ubicada en una zona de fácil acceso, es el punto de encuentro entre el progreso y la modernidad.',
      backgroundColor: '#f5f0cc',
      interiorImage: 'images/projects/escala/specs/interior.png',
      projectName: 'Escala',
      brochureUrl: 'docs/brochures/escala.pdf',
      videoUrl: 'https://www.youtube.com/embed/j2mJQ6IVg9U',
      projectSubtitle: 'DEPARTAMENTOS EN LA VICTORIA',
      amenityIcons: [
        // { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        // { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: '31 pisos',
      unitTypes: '1, 2 y 3 ambientes',
      areaRange: 'Desde: 40m2 Hasta: 75.63m2'
    },
    amenities: {
      backgroundColor: '#ff7f30',
      items: [
        { icon: 'images/projects/escala/icons/icono-juegos-escala.png', label: 'AREAS NINOS' },
        { icon: 'images/projects/escala/icons/icono-bbq-escala.png', label: 'ZONA BBQ' },
        { icon: 'images/projects/escala/icons/icono-pool-escala.png', label: 'PISCINA' },
        { icon: 'images/projects/escala/icons/icono-gym-escala.png', label: 'GIMNASIO' },
        { icon: 'images/projects/escala/icons/icono-bar-escala.png', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/escala/gallery/comunes/1.png' },
            { src: 'images/projects/escala/gallery/comunes/2.png' },
            { src: 'images/projects/escala/gallery/comunes/3.png' },
            { src: 'images/projects/escala/gallery/comunes/4.png' },
            { src: 'images/projects/escala/gallery/comunes/5.png' },
            { src: 'images/projects/escala/gallery/comunes/6.png' },
            { src: 'images/projects/escala/gallery/comunes/7.png' },
            { src: 'images/projects/escala/gallery/comunes/8.png' },
            { src: 'images/projects/escala/gallery/comunes/9.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/escala/gallery/exteriores/1.webp' },
            { src: 'images/projects/escala/gallery/exteriores/2.webp' },
            { src: 'images/projects/escala/gallery/exteriores/3.webp' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/escala/gallery/interiores/1.png' },
            { src: 'images/projects/escala/gallery/interiores/2.png' },
            { src: 'images/projects/escala/gallery/interiores/3.png' },
            { src: 'images/projects/escala/gallery/interiores/4.png' },
            { src: 'images/projects/escala/gallery/interiores/5.png' },

          ]
        }
      ]
    },
    video: {
      url: 'https://www.youtube.com/embed/j2mJQ6IVg9U',
      fallbackImage: 'images/projects/central/video-central.png',
      type: 'iframe',
      title: 'CONOCE PROYECTO ESCALA',
      backgroundColor: '#b2e1d8',
      textColor: '#FFFFFF',
    },
    virtualTour: {
      url: 'https://storage.net-fs.com/hosting/6359227/0/',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#b2e1d8',
      textColor: '#FFFFFF',
    },
    quoter: {
      projectId: 4,
      projectName: 'Escala',
    },
    ubication: {
      backgroundColor: '#33668e',
      textColor: '#FFFFFF',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.343298590849!2d-77.01692212408909!3d-12.088634288151388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c87eebe3b683%3A0x15687c0370c932bd!2sAv.%20Jos%C3%A9%20G%C3%A1lvez%20Barrenechea%20200%2C%20La%20Victoria%2015034%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776206075672!5m2!1ses!2scl',
      address: 'Av. Gálvez Barrenechea 200 - SANTA CATALINA'
    },
    executives: [
      {
        name: 'Patrick Coriat',
        role: 'Ejecutivo de Ventas',
        phone: '933336977',
        photo: 'images/executives/patrick-coriat.jpg',
      },
      {
        name: 'Juda Caceres',
        role: 'Ejecutivo de Ventas',
        phone: '947327029',
        photo: 'images/executives/juda-omar-caceres.jpg',
      },
    ],
  };
}
