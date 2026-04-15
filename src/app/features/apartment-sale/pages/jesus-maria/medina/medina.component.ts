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
      logo: 'images/logos/projects/logo-medina-1-2.webp',
      projectName: 'Medina',
      district: 'DEPARTAMENTOS EN JESÚS MARÍA',
      badge: 'Lanzamiento',
      description: 'EN CONSTRUCCION',
      priceLine1: 'TU DEPA DE 2 AMBIENTE CON PRECIO DESDE',
      priceFrom: 'S/477,000*',
      overlayColor: 'rgba(76, 107, 82, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#ffffff',
      descriptionColor: '#f1e7d5',
      priceLabelColor: '#f1e7d5',
      priceFromColor: '#ffffff',
      textPosition: { bottom: '20%' },
      slides: [
        { image: 'images/projects/medina/1.jpeg', alt: 'Medina - Fachada' },
      ]
    },
    stats: {
      
      backgroundColor: '#f1e7d5',
      sectionTitle: 'Descubre cada detalle de este gran proyecto',
      areaRange: {
        icon: 'images/projects/medina/icons/icono_ubica_1.png',
        label: 'Av. Edgardo Rebagliati 405 Jesús María'
      },
      location: {
        icon: 'images/projects/medina/icons/icono_depto_1.png',
        label: 'Desde 34 m2 hasta 149m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/medina/icons/icono_area_comun_1.png',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      backgroundColor: '#7f9884',
      textColor: '#FFFFFF',
      logo: 'images/logos/projects/logo-medina-1.png',
      interiorImage: 'images/projects/medina/specs/interior.png',
      projectName: 'Medina',
      projectSubtitle: 'DEPARTAMENTOS EN JESÚS MARÍA',
      brochureUrl: 'docs/brochures/medina.pdf',
      videoUrl: 'https://www.youtube.com/embed/Rblod8ZrW-8',
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
        { icon: 'images/projects/medina/icons/icono_lobby.png', label: 'LOBBY' },
        { icon: 'images/projects/medina/icons/icono_sreuniones.png', label: 'SALA DE REUNIONES' },
        { icon: 'images/projects/medina/icons/icono_working.png', label: 'COWORKING' },
        { icon: 'images/projects/medina/icons/icono_parrilla.png', label: 'ZONA DE PARRILLA' },
        { icon: 'images/projects/medina/icons/icono_gym.png', label: 'GIMNASIO' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/medina/gallery/comunes/1.png', alt: 'Área común 1' },
            { src: 'images/projects/medina/gallery/comunes/2.png', alt: 'Área común 2' },
            { src: 'images/projects/medina/gallery/comunes/3.png', alt: 'Área común 3' },
            { src: 'images/projects/medina/gallery/comunes/4.png', alt: 'Área común 4' },
            { src: 'images/projects/medina/gallery/comunes/5.png', alt: 'Área común 5' },
            { src: 'images/projects/medina/gallery/comunes/6.png', alt: 'Área común 6' },
          ]
        },
        {
          label: 'Exteriores',
          subtitle: 'Fachada y áreas externas',
          images: [
            { src: 'images/projects/medina/gallery/exteriores/1.png', alt: 'Exterior 1' },
            { src: 'images/projects/medina/gallery/exteriores/2.png', alt: 'Exterior 2' },
            { src: 'images/projects/medina/gallery/exteriores/3.png', alt: 'Exterior 3' },
            { src: 'images/projects/medina/gallery/exteriores/4.png', alt: 'Exterior 4' },
            { src: 'images/projects/medina/gallery/exteriores/5.png', alt: 'Exterior 5' },
            { src: 'images/projects/medina/gallery/exteriores/6.png', alt: 'Exterior 6' },
          ]
        },
        {
          label: 'Interiores',
          subtitle: 'Tu nuevo hogar',
          images: [
            { src: 'images/projects/medina/gallery/exteriores/1.png', alt: 'Exterior 1' },
            { src: 'images/projects/medina/gallery/exteriores/2.png', alt: 'Exterior 2' },
            { src: 'images/projects/medina/gallery/exteriores/3.png', alt: 'Exterior 3' },
            { src: 'images/projects/medina/gallery/exteriores/4.png', alt: 'Exterior 4' },
            { src: 'images/projects/medina/gallery/exteriores/5.png', alt: 'Exterior 5' },
            { src: 'images/projects/medina/gallery/exteriores/6.png', alt: 'Exterior 6' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#c6824f',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/Rblod8ZrW-8',
      type: 'youtube',
      title: 'CONOCE PROYECTO MEDINA',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/medina/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#605f4d',
      textColor: '#FFFFFF',
    },
    quoter: {
      iframeUrl: '/apicotizador/medina/',
      projectId: 13,
      projectName: 'MEDINA'
    },
    ubication: {
      backgroundColor: '#605f4d',
      textColor: '#FFFFFF',
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.467838119167!2d-77.04230562408924!3d-12.080091488159296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8f1524b8a25%3A0x32fbddcd2bd65a3d!2sAv.%20Edgardo%20Rebagliati%20405%2C%20Jes%C3%BAs%20Mar%C3%ADa%2015073%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776205686064!5m2!1ses!2scl',
      address: 'Av. Edgardo Rebagliati 405, Jesús María, Lima'
    }
  };
}
