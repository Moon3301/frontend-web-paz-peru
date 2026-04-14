import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-riva',
  standalone: false,
  templateUrl: './riva.component.html',
  styleUrl: './riva.component.css'
})
export class RivaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-riva.webp',
      projectName: 'Riva',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: 'En venta',
      description: 'TODO: Descripción del proyecto Riva',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(60, 90, 100, 0.75)',
      slides: [
        { image: 'images/projects/riva/1.png', alt: 'Riva - Fachada' },
        { image: 'images/projects/riva/2.png', alt: 'Riva - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#d1cbb8',
      areaRange: {
        icon: 'images/projects/riva/icons/departamentos.svg',
        label: 'Desde 60 m2 hasta 150 m2'
      },
      location: {
        icon: 'images/projects/riva/icons/ubicacion.svg',
        label: 'Calle Comandante O’Donovan 115, Miraflores'
      },
      commonAreasLabel: {
        icon: 'images/projects/riva/icons/areas-comunes.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-riva.webp',
      backgroundColor: '#343233',
      textColor: '#FFFFFF',
      interiorImage: 'images/projects/riva/specs/interior.png',
      projectName: 'Riva',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'images/projects/riva/icons/pisos.svg', label: 'Pisos' },
        { icon: 'images/projects/riva/icons/flats.svg', label: 'Tipo de unidad' },
        { icon: 'images/projects/riva/icons/metrajes.svg', label: 'Metrajes' },
      ],
      floors: '12 pisos + Azotea',
      unitTypes: 'Flats y Dúplex 1, 2 y 3 ambientes.',
      areaRange: 'Desde 60 m2 hasta 150 m2'
    },
    amenities: {
      backgroundColor: '#997b4f',
      items: [
        { icon: 'images/projects/riva/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'images/projects/riva/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'images/projects/riva/icons/bike-zone.svg', label: 'BIKE ZONE' },
        { icon: 'images/projects/riva/icons/piscina.svg', label: 'PISCINA' },
        { icon: 'images/projects/riva/icons/parrilla.svg', label: 'PARRILLA' },
        { icon: 'images/projects/riva/icons/sala-bar.svg', label: 'SALA BAR' },
      ]
    },
    gallery: {
      
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/riva/gallery/comunes/1.png' },
            { src: 'images/projects/riva/gallery/comunes/2.png' },
            { src: 'images/projects/riva/gallery/comunes/3.png' },
            { src: 'images/projects/riva/gallery/comunes/4.png' },
            { src: 'images/projects/riva/gallery/comunes/5.png' },
            { src: 'images/projects/riva/gallery/comunes/6.png' },
            { src: 'images/projects/riva/gallery/comunes/7.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/riva/gallery/exteriores/1.jpg' },
            { src: 'images/projects/riva/gallery/exteriores/2.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/riva/gallery/interiores/1.png' },
            { src: 'images/projects/riva/gallery/interiores/2.png' },
            { src: 'images/projects/riva/gallery/interiores/3.png' },
            { src: 'images/projects/riva/gallery/interiores/4.png' },
            { src: 'images/projects/riva/gallery/interiores/5.png' },
            { src: 'images/projects/riva/gallery/interiores/6.png' },
            { src: 'images/projects/riva/gallery/interiores/7.png' }
          ]
        }
      ]
    },
    quoter: {
      iframeUrl: '/apicotizador/riva/',
      projectId: 14,
      projectName: 'RIVA'
    },
    video: {
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO LIMA 15',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.lumica3d.com/lumica3d/PAZ_DONOVAN/',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#52273b',
      textColor: '#FFFFFF',
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_RIVA_GOOGLE_MAPS_EMBED',
      address: 'TODO: Dirección Riva, Miraflores, Lima'
    }
  };
}
