import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-taller',
  standalone: false,
  templateUrl: './taller.component.html',
  styleUrl: './taller.component.css'
})
export class TallerComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-taller.webp',
      projectName: 'Taller',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      // badge: 'En venta',
      description: 'ENTREGA SEPTIEMBRE 2026',
      priceLine1: 'TU DEPA DE 1 AMBIENTE CON PRECIO DESDE',
      priceFrom: 'S/ 554,000*',
      overlayColor: 'rgba(60, 40, 30, 0.75)',
      textColor: '#ffffff',
      descriptionStyle: {
        fontSize: 'clamp(0.6rem, 1.8vw, 1.6rem)',
        letterSpacing: '0.12em',
        fontWeight: '700',
        marginBottom: 'clamp(8px, 2vw, 35px)',
      },
      priceLabelStyle: { fontSize: 'clamp(0.55rem, 1.2vw, 1rem)' },
      priceFromStyle: {
        fontSize: 'clamp(1rem, 3.4vw, 2.8rem)',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      badgeColor: '#c2304f',
      descriptionColor: '#c2304f',
      priceLabelColor: '#c2304f',
      priceFromColor: '#c2304f',
      textPosition: { bottom: '30%', left: '30%' },
      logoSize: {
        standard: { width: 'min(50vw, 560px)', height: 'min(44vh, 450px)' },
        desktop:  { width: 'min(46vw, 700px)', height: 'min(47vh, 550px)' },
        tablet:   { width: 'min(54vw, 450px)', height: 'min(40vh, 355px)' },
        mobile:   { width: 'min(72vw, 270px)', height: 'min(32vh, 210px)' },
      },
      slides: [
        { image: 'images/projects/taller/banner-1.jpg', alt: 'Taller - Fachada' },
        { image: 'images/projects/taller/banner-2.jpg', alt: 'Taller - Vista exterior' },
        { image: 'images/projects/taller/banner-3.jpg', alt: 'Taller - Vista exterior' },
      ]
    },
    stats: {
      sectionTitle: 'TU HOGAR EN EL CORAZÓN DE LA CIUDAD',
      backgroundColor: '#800133',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'svg/icons/area.svg',
        label: 'Desde 47 m2 hasta 122 m2'
      },
      location: {
        icon: 'svg/icons/location.svg',
        label: 'Toribio Polo 450, Miraflores'
      },
      commonAreasLabel: {
        icon: 'svg/icons/common-areas.svg',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-taller-text.png',
      interiorImage: 'images/projects/taller/specs/interior.jpg',
      projectName: 'Taller',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      brochureUrl: 'docs/brochures/taller.pdf',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
      ],
      floors: '13 pisos + azotea',
      unitTypes: 'Flats y Dúplex 1, 2 y 3 ambientes',
      areaRange: 'Desde 47 m2 hasta 122 m2',
      backgroundColor: '#afcdc1',
      textColor: '#161129',
    },
    amenities: {
      backgroundColor: '#ece8dc',
      textColor: '#161129',
      items: [
        { icon: 'images/projects/taller/icons/ico-lobby.png', label: 'LOBBY' },
        { icon: 'images/projects/taller/icons/ico-parrillas.png', label: 'AREA DE PARRILLAS' },
        { icon: 'images/projects/taller/icons/ico-piscina.png', label: 'PISCINA' },
        { icon: 'images/projects/taller/icons/ico-gimnasio.png', label: 'GIMNASIO' },
        { icon: 'images/projects/taller/icons/ico-pet-zone.png', label: 'PET ZONE' },
        { icon: 'images/projects/taller/icons/ico-coworking.png', label: 'COWORKING' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/taller/gallery/comunes/1.png' },
            { src: 'images/projects/taller/gallery/comunes/2.png' },
            { src: 'images/projects/taller/gallery/comunes/3.png' },
            { src: 'images/projects/taller/gallery/comunes/4.png' },
            { src: 'images/projects/taller/gallery/comunes/5.png' },
            { src: 'images/projects/taller/gallery/comunes/6.png' },
            { src: 'images/projects/taller/gallery/comunes/7.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/taller/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/taller/gallery/interiores/1.png' },
            { src: 'images/projects/taller/gallery/interiores/2.png' },
            { src: 'images/projects/taller/gallery/interiores/3.png' },
            { src: 'images/projects/taller/gallery/interiores/4.png' },
            { src: 'images/projects/taller/gallery/interiores/5.png' },
            { src: 'images/projects/taller/gallery/interiores/6.png' },
            { src: 'images/projects/taller/gallery/interiores/7.png' },
            { src: 'images/projects/taller/gallery/interiores/8.png' },
          ]
        }
      ]
    },
    quoter: {
      projectId: 12,
      projectName: 'TALLER'
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.9888828479448!2d-77.04916432408885!3d-12.11291298812904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8373e3711ef%3A0x1b56a055bf7da94b!2sCa.%20Jos%C3%A9%20Toribio%20Polo%20450%2C%20Lima%2015074%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776206870503!5m2!1ses!2scl',
      address: 'Ca. José Toribio Polo 450, Miraflores',
      backgroundColor: '#ece8dc',
      textColor: '#161129',
      mapsUrl: 'https://maps.google.com/?q=Ca.+Jos%C3%A9+Toribio+Polo+450,+Miraflores,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Ca+Jos%C3%A9+Toribio+Polo+450+Miraflores+Lima&navigate=yes',
    },
    video: {
      backgroundColor: '#ece8dc',
      textColor: '#161129',
      url: 'https://www.youtube.com/embed/35BMHYaqVHg',
      type: 'youtube',
      title: 'CONOCE PROYECTO TALLER',
      fallbackImage: 'images/projects/taller/video-taller.jpg',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/taller/index.htm',
      projectTitle: 'CONOCE PROYECTO TALLER',
      backgroundColor: '#ece8dc',
      textColor: '#161129',
    },
    executives: [
      {
        name: 'Aracelly Quispe',
        role: 'Ejecutiva de Ventas',
        phone: '986651320',
        photo: 'images/executives/aracelly-quispe.jpg',
      },
      {
        name: 'Josselyn Candelario',
        role: 'Ejecutiva de Ventas',
        phone: '934872230',
        photo: 'images/executives/josselyn-candelario.jpg',
      },
    ],
  };
}
