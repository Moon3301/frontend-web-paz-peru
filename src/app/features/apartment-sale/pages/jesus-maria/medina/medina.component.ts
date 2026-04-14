import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-medina',
  standalone: false,
  templateUrl: './medina.component.html',
  styleUrl: './medina.component.css'
})
export class MedinaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-medina.webp',
      projectName: 'Medina',
      district: 'DEPARTAMENTOS EN JESÚS MARÍA',
      badge: 'Lanzamiento',
      description: 'Tu depa de 2 ambientes con precio desde:',
      priceLine1: 'Tu depa de 2 ambientes\ncon precio desde:',
      priceFrom: 'S/477,000*',
      overlayColor: 'rgba(76, 107, 82, 0.75)',
      slides: [
        { image: 'images/projects/medina/hero-1.jpg', alt: 'Medina - Fachada' },
        { image: 'images/projects/medina/hero-2.jpg', alt: 'Medina - Vista exterior' },
        { image: 'images/projects/medina/hero-3.jpg', alt: 'Medina - Detalle' },
      ]
    },
    stats: {
      sectionTitle: 'Descubre cada detalle de este gran proyecto',
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'Desde 34 m2 hasta 149m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'Av. Edgardo Rebagliati 405 Jesús María'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      interiorImage: 'images/projects/medina/specs/interior.jpg',
      projectName: 'Medina',
      projectSubtitle: 'DEPARTAMENTOS EN JESÚS MARÍA',
      amenityIcons: [
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/coworking.svg', label: 'Coworking' },
      ],
      floors: '18 pisos + Azotea',
      unitTypes: 'Flats y Dúplex 1, 2 y 3 ambientes.',
      areaRange: 'Desde 34 m2 hasta 149 m2'
    },
    amenities: {
      backgroundColor: '#B87D4B',
      items: [
        { icon: 'svg/icons/lobby.svg', label: 'LOBBY' },
        { icon: 'svg/icons/meeting-room.svg', label: 'SALA DE REUNIONES' },
        { icon: 'svg/icons/coworking.svg', label: 'COWORKING' },
        { icon: 'svg/icons/grill.svg', label: 'ZONA DE PARRILLA' },
        { icon: 'svg/icons/gym.svg', label: 'GIMNASIO' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/medina/gallery/comunes/1.jpg', alt: 'Área común 1' },
            { src: 'images/projects/medina/gallery/comunes/2.jpg', alt: 'Área común 2' },
            { src: 'images/projects/medina/gallery/comunes/3.jpg', alt: 'Área común 3' },
          ]
        },
        {
          label: 'Exteriores',
          subtitle: 'Fachada y áreas externas',
          images: [
            { src: 'images/projects/medina/gallery/exteriores/1.jpg', alt: 'Exterior 1' },
            { src: 'images/projects/medina/gallery/exteriores/2.jpg', alt: 'Exterior 2' },
          ]
        },
        {
          label: 'Interiores',
          subtitle: 'Tu nuevo hogar',
          images: [
            { src: 'images/projects/medina/gallery/interiores/1.jpg', alt: 'Interior 1' },
            { src: 'images/projects/medina/gallery/interiores/2.jpg', alt: 'Interior 2' },
          ]
        }
      ]
    },
    video: {
      type: 'iframe',
      url: 'PLACEHOLDER_MEDINA_VIRTUAL_TOUR_URL',
      title: 'Recorrido Virtual',
      subtitle: 'Vive feliz y conoce nuestro nuevo proyecto Medina',
      tabs: [
        { label: 'Fachada', url: 'PLACEHOLDER_MEDINA_FACHADA_URL' }
      ]
    },
    quoter: {
      iframeUrl: '/apicotizador/medina/',
      projectId: 13,
      projectName: 'MEDINA'
    },
    ubication: {
      mapEmbedUrl: 'PLACEHOLDER_MEDINA_GOOGLE_MAPS_EMBED',
      address: 'Av. Edgardo Rebagliati 405, Jesús María, Lima'
    }
  };
}
