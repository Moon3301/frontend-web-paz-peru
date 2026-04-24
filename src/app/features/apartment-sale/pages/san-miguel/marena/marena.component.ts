import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-marena',
  standalone: false,
  templateUrl: './marena.component.html',
  styleUrl: './marena.component.css'
})
export class MarenaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-marena.webp',
      projectName: 'Marena',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      description: 'LANZAMIENTO',
      priceLine1: 'DESCUENTOS HASTA',
      priceFrom: 'S/ 120,000*',
      overlayColor: 'rgba(30, 80, 120, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#ffffff',
      descriptionStyle: {
        fontSize: '2.2rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      priceLabelStyle: { fontSize: '1rem' },
      priceFromStyle: {
        fontSize: '2.8rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      descriptionColor: '#ffffff',
      priceLabelColor: '#ffffff',
      priceFromColor: '#ffffff',
      textPosition: { bottom: '25%' },
      slides: [
        { image: 'images/projects/marena/1.jpg', alt: 'Marena - Fachada' },
        { image: 'images/projects/marena/2.png', alt: 'Marena - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#f7eddf',
      textColor: '#0d509f',
      sectionTitle: 'Vive distinto, vive en Marena, vive en San Miguel',
      areaRange: {
        icon: 'images/projects/marena/icons/areas.svg',
        label: 'Desde 40 m2 hasta 155 m2'
      },
      location: {
        icon: 'images/projects/marena/icons/ubicacion.svg',
        label: 'Jirón Federico Gallese 399, San Miguel'
      },
      commonAreasLabel: {
        icon: 'images/projects/marena/icons/departamentos.svg',
        label: 'Para tu nuevo estilo de vida'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-marena-1.svg',
      description: 'Marena redefine la vida en San Miguel con una propuesta moderna, frente al Parque Bertolotto y a pasos del malecón.',
      backgroundColor: '#e7573f',
      textColor: '#FFFFFF',
      interiorImage: 'images/projects/marena/specs/interior.png',
      projectName: 'Marena',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
      videoUrl: 'https://www.youtube.com/embed/lvL6jsWh79s',
      brochureUrl: 'docs/brochures/marena.pdf',
      amenityIcons: [
        // { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        // { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: '17 pisos + Azotea.',
      unitTypes: 'Flats y Dúplex 1, 2 y 3 ambientes.',
      areaRange: 'Desde 40 m2 hasta 155 m2.'
    },
    amenities: {
      backgroundColor: '#4eafc6',
      title: 'Modernas áreas comunes',
      items: [
        { icon: 'images/projects/marena/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'images/projects/marena/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'images/projects/marena/icons/gimnasio.svg', label: 'GIMNASIO' },
        { icon: 'images/projects/marena/icons/piscina.svg', label: 'PISCINA' },
        { icon: 'images/projects/marena/icons/zona-de-parrilla.svg', label: 'ZONA DE PARRILLA' },
        { icon: 'images/projects/marena/icons/sala-bar.svg', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/marena/gallery/comunes/1.png' },
            { src: 'images/projects/marena/gallery/comunes/2.png' },
            { src: 'images/projects/marena/gallery/comunes/3.png' },
            { src: 'images/projects/marena/gallery/comunes/4.png' },
            { src: 'images/projects/marena/gallery/comunes/5.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/marena/gallery/exteriores/1.webp' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/marena/gallery/interiores/1.png' },
            { src: 'images/projects/marena/gallery/interiores/2.png' },
            { src: 'images/projects/marena/gallery/interiores/3.png' },
            { src: 'images/projects/marena/gallery/interiores/4.png' },
            { src: 'images/projects/marena/gallery/interiores/5.png' },
            { src: 'images/projects/marena/gallery/interiores/6.png' },
            { src: 'images/projects/marena/gallery/interiores/7.png' },

          ]
        }
      ]
    },
    video: {
      backgroundColor: '#2d5066',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/uZ1Hy4yBmIM',
      type: 'youtube',
      title: 'CONOCE PROYECTO MARENA',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/amalfi/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#2d5066',
      textColor: '#dcd0c9',
    },
    quoter: {
      projectId: 28,
      projectName: 'MARENA',
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.2799138360874!2d-77.08243072408902!3d-12.092979888147434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c99f58c90f65%3A0x63a293fae2330a69!2sJr.%20Federico%20Gallese%20Taricchi%20399%2C%20Lima%2015086%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776207120267!5m2!1ses!2scl',
      address: 'Jirón Federico Gallese 399, San Miguel',
      backgroundColor: '#4eafc6',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Jr.+Federico+Gallese+Taricchi+399,+San+Miguel,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Jr+Federico+Gallese+Taricchi+399+San+Miguel+Lima&navigate=yes',
    },
    executives: [
      {
        name: 'Carla Celi',
        role: 'Ejecutiva de Ventas',
        phone: '981520744',
        photo: 'images/executives/carla-celi.jpg',
      },
      {
        name: 'Maria Rodriguez',
        role: 'Ejecutiva de Ventas',
        phone: '924902474',
        photo: 'images/executives/maria-del-carmen-rodriguez.jpg',
      },
    ],
  };
}
