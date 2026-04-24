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
      // badge: 'En venta',
      description: 'ENTREGA INMEDIATA',
      priceLine1: 'TU DEPA DE 2 AMBIENTE CON CUOTAS DESDE',
      priceFrom: 'S/ 2,633*',
      overlayColor: 'rgba(80, 70, 50, 0.75)',
      descriptionStyle: {
        fontSize: '2.2rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
        marginTop: '20px'
      },
      priceLabelStyle: { fontSize: '1rem' },
      priceFromStyle: {
        fontSize: '2.8rem',
        fontWeight: '700',
      },
      textColor: '#ffffff',
      badgeColor: '#fab605',
      descriptionColor: '#fff4cc',
      priceLabelColor: '#fff4cc',
      priceFromColor: '#fab605',
      textPosition: { bottom: '10%' },
      slides: [
        { image: 'images/projects/patio-la-paz/1.jpg', alt: 'Patio La Paz - Fachada' },
      ]
    },
    stats: {
      backgroundColor: '#231f20',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/patio-la-paz/icons/cuadrado.png',
        label: 'Desde 40m2 hasta 114m2'
      },
      location: {
        icon: 'images/projects/patio-la-paz/icons/map.png',
        label: 'Av. La Paz 2551 San Miguel'
      },
      commonAreasLabel: {
        icon: 'images/projects/patio-la-paz/icons/casita.png',
        label: 'Para disfrutar en familia'
      }
    },
    specs: {
      backgroundColor: '#fab605',
      textColor: '#231f20',
      logo: 'images/logos/projects/logo-patio-la-paz-1.png',
      interiorImage: 'images/projects/patio-la-paz/specs/interior.jpg',
      projectName: 'Patio La Paz',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
      brochureUrl: 'docs/brochures/patio-la-paz.pdf',
      videoUrl: 'https://www.youtube.com/embed/QD35i4dF5Ug',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: '12 pisos',
      unitTypes: '1, 2 y 3 dormitorios',
      areaRange: 'Desde 40 m2 hasta 114 m2'
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
      url: 'https://www.youtube.com/embed/QD35i4dF5Ug',
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
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.4729547058646!2d-77.10877732408919!3d-12.079740388159653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105cbd711b0a51d%3A0x46a0bd7cfc7a04f9!2sAv.%20La%20Paz%202551%2C%20Lima%2015087%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776207213516!5m2!1ses!2scl',
      address: 'Av. La Paz 2551, San Miguel, Lima',
      backgroundColor: '#231f20',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Av.+La+Paz+2551,+San+Miguel,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+La+Paz+2551+San+Miguel+Lima&navigate=yes',
    },
    executives: [
      {
        name: 'Grecia Taype',
        role: 'Ejecutiva de Ventas',
        phone: '947320843',
        photo: 'images/executives/grecia-taype.jpg',
      },
      {
        name: 'Lisset Guzman',
        role: 'Ejecutiva de Ventas',
        phone: '970114020',
        photo: 'images/executives/lisset-guzman.jpg',
      },
    ],
  };
}
