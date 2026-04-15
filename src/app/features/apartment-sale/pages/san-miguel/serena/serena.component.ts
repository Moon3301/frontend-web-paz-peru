import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-serena',
  standalone: false,
  templateUrl: './serena.component.html',
  styleUrl: './serena.component.css'
})
export class SerenaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-serena.webp',
      projectName: 'Serena',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      badge: 'En venta',
      description: 'ENTREGA INMEDIATA',
      priceLine1: 'TU DEPA DE 2 AMBIENTE CON PRECIO DESDE',
      priceFrom: 'S/ 439,000*',
      overlayColor: 'rgba(90, 110, 90, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#ffd6d4',
      descriptionColor: '#ffd6d4',
      priceLabelColor: '#ffd6d4',
      priceFromColor: '#ffd6d4',
      textPosition: { bottom: '35%' },
      slides: [
        { image: 'images/projects/serena/1.jpg', alt: 'Serena - Fachada' },
        { image: 'images/projects/serena/2.jpg', alt: 'Serena - Vista exterior' },
        { image: 'images/projects/serena/3.jpg', alt: 'Serena - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#ec615b',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/serena/icons/departamentos.svg',
        label: 'Desde 35m2 hasta 155 m2'
      },
      location: {
        icon: 'images/projects/serena/icons/ubicacion.svg',
        label: 'Av. Bertolotto esquina Jirón Sucre Nros. 120-130 San Miguel'
      },
      commonAreasLabel: {
        icon: 'images/projects/serena/icons/areas-comunes.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-serena-1.webp',
      backgroundColor: '#256ab2',
      textColor: '#FFFFFF',
      interiorImage: 'images/projects/serena/specs/interior.jpg',
      projectName: 'Serena',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
      amenityIcons: [
        { icon: 'images/projects/serena/icons/lobby.svg', label: 'Lobby' },
        { icon: 'images/projects/serena/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'images/projects/serena/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'images/projects/serena/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: '17 pisos + Azotea',
      unitTypes: 'Flats y Duplex 1, 2 y 3 ambientes.',
      areaRange: 'Desde 35m2 hasta 155 m2'
    },
    amenities: {
      backgroundColor: '#ec615b',
      textColor: '#FFFFFF',
      items: [
        { icon: 'images/projects/serena/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'images/projects/serena/icons/jardin-interno.svg', label: 'JARDIN INTERNO' },
        { icon: 'images/projects/serena/icons/kids-room.svg', label: 'KIDS ROOM' },
        { icon: 'images/projects/serena/icons/sala-bar.svg', label: 'SALA BAR' },
        { icon: 'images/projects/serena/icons/gimnasio.svg', label: 'GIMNASIO' },
        { icon: 'images/projects/serena/icons/area-parrillas.svg', label: 'AREAS DE PARRILLAS' },
        { icon: 'images/projects/serena/icons/piscina.svg', label: 'PISCINA' },
        { icon: 'images/projects/serena/icons/coworking.svg', label: 'COWORKING' },

      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/serena/gallery/comunes/1.png' },
            { src: 'images/projects/serena/gallery/comunes/2.png' },
            { src: 'images/projects/serena/gallery/comunes/3.png' },
            { src: 'images/projects/serena/gallery/comunes/4.png' },
            { src: 'images/projects/serena/gallery/comunes/5.png' },
            { src: 'images/projects/serena/gallery/comunes/6.png' },
            { src: 'images/projects/serena/gallery/comunes/7.png' },
            { src: 'images/projects/serena/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/serena/gallery/exteriores/1.png' },
            { src: 'images/projects/serena/gallery/exteriores/2.png' },
            { src: 'images/projects/serena/gallery/exteriores/3.png' },
            { src: 'images/projects/serena/gallery/exteriores/4.png' },
            { src: 'images/projects/serena/gallery/exteriores/5.png' },
            { src: 'images/projects/serena/gallery/exteriores/6.png' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/serena/gallery/interiores/1.png' },
            { src: 'images/projects/serena/gallery/interiores/2.png' },
            { src: 'images/projects/serena/gallery/interiores/3.png' },
            { src: 'images/projects/serena/gallery/interiores/4.png' },
            { src: 'images/projects/serena/gallery/interiores/5.png' },
            { src: 'images/projects/serena/gallery/interiores/6.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#ec615b',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO CENTRAL',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/central/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#ec615b',
      textColor: '#FFFFFF',
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2799138360874!2d-77.08243072408902!3d-12.092979888147434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c9596680071b%3A0xdb6ffe63c669d7a7!2sSerena%20-%20Paz%20Inmobiliaria!5e0!3m2!1ses!2scl!4v1776207060702!5m2!1ses!2scl',
      address: 'Av. Bertolotto esquina Jirón Sucre Nros. 120-130 San Miguel',
      backgroundColor: '#ec615b',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Av.+Bertolotto+esquina+Jir%C3%B3n+Sucre+Nros.+120-130,+San+Miguel,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+Bertolotto+esquina+Jir%C3%B3n+Sucre+Nros+120-130+San+Miguel+Lima&navigate=yes',
    },
    quoter: {
      projectId: 11,
      projectName: 'SERENA',
    },
  };
}
