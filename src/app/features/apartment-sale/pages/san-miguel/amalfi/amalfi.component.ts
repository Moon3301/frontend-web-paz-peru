import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-amalfi',
  standalone: false,
  templateUrl: './amalfi.component.html',
  styleUrl: './amalfi.component.css'
})
export class AmalfiComponent {
  config: ProjectConfig = {
    hero: {
      projectName: 'Amalfi',
      district: 'DEPARTAMENTOS EN SAN MIGUEL',
      // badge: 'En venta',
      description: 'TODO: Descripción del proyecto Amalfi',
      priceLine1: 'Depas con precio desde:',
      priceFrom: 'TODO: S/ XXX,000*',
      overlayColor: 'rgba(150, 90, 30, 0.75)',
      textColor: '#ffffff',
      badgeColor: '#3e6d81',
      descriptionColor: '#dcd0c9',
      priceLabelColor: '#dcd0c9',
      priceFromColor: '#3e6d81',
      textPosition: { bottom: '10%' },
      slides: [
        { image: 'images/projects/amalfi/hero-1.jpg', alt: 'Amalfi - Fachada' },
        { image: 'images/projects/amalfi/hero-2.jpg', alt: 'Amalfi - Vista exterior' },
        { image: 'images/projects/amalfi/hero-3.jpg', alt: 'Amalfi - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#3e6d81',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/amalfi/icons/2.svg',
        label: '17 pisos'
      },
      location: {
        icon: 'images/projects/amalfi/icons/3.svg',
        label: 'Desde: 36.98m2 Hasta: 135.46m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/amalfi/icons/1.svg',
        label: '1, 2 y 3 Dormitorios'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-amalfi-1.png',
      textColor: '#3e6d81',
      interiorImage: 'images/projects/amalfi/specs/interior.png',
      projectName: 'Amalfi',
      projectSubtitle: 'DEPARTAMENTOS EN SAN MIGUEL',
      brochureUrl: 'docs/brochures/amalfi.pdf',
      videoUrl: 'https://www.youtube.com/embed/UGpOIL-LkUc',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      description: 'Condominio Amalfi está ubicado en la Av. Costanera cdra. 25 San Miguel. Una elegante torre en forma de T que se levanta frente al mar. Con 17 pisos y 279 departamentos, el cual es único en su estilo, pues permite que la mayoría de departamentos tengan vista hacia el océano Pacífico. Navega hacia tu nuevo estilo de vida, descubre en Condominio Amalfi un espacio único, un proyecto que va más allá de sus departamentos, y en el que podrás vivir como dentro de un club, con áreas comunes, la vista y los espacios que te permitirán vivir siempre, como de vacaciones.',
      floors: '17 pisos',
      unitTypes: '1, 2 y 3 Dormitorios',
      areaRange: 'Desde: 36.98m2 Hasta: 135.46m2'
    },
    amenities: {
      backgroundColor: '#dcd0c9',
      textColor: '#2d5066',
      items: [
        { icon: 'images/projects/amalfi/icons/icono-salakids-amalfi.svg', label: 'KIDS ROOM' },
        { icon: 'images/projects/amalfi/icons/icono-parrilla-amalfi.svg', label: 'BBQ ZONE' },
        { icon: 'images/projects/amalfi/icons/icono-coworking-amalfi.svg', label: 'COWORKING' },
        { icon: 'images/projects/amalfi/icons/icono-piscina-amalfi.svg', label: 'PISCINA' },
        { icon: 'images/projects/amalfi/icons/icono-gimnasio-amalfi.svg', label: 'GYM' },
        { icon: 'images/projects/amalfi/icons/icono-salabar-amalfi.svg', label: 'SALA BAR' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas para ti y tu familia',
          images: [
            { src: 'images/projects/amalfi/gallery/comunes/1.png' },
            { src: 'images/projects/amalfi/gallery/comunes/2.png' },
            { src: 'images/projects/amalfi/gallery/comunes/3.png' },
            { src: 'images/projects/amalfi/gallery/comunes/4.png' },
            { src: 'images/projects/amalfi/gallery/comunes/5.png' },
            { src: 'images/projects/amalfi/gallery/comunes/6.png' },
            { src: 'images/projects/amalfi/gallery/comunes/7.png' },
            { src: 'images/projects/amalfi/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          images: [
            { src: 'images/projects/amalfi/gallery/exteriores/1.jpg' },
          ]
        },
        {
          label: 'Interiores',
          images: [
            { src: 'images/projects/amalfi/gallery/interiores/1.png' },
            { src: 'images/projects/amalfi/gallery/interiores/2.png' },
            { src: 'images/projects/amalfi/gallery/interiores/3.png' },
            { src: 'images/projects/amalfi/gallery/interiores/4.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#2d5066',
      textColor: '#dcd0c9',
      url: 'https://www.youtube.com/embed/UGpOIL-LkUc',
      type: 'youtube',
      title: 'CONOCE PROYECTO AMALFI',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/amalfi/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#2d5066',
      textColor: '#dcd0c9',
    },
    quoter: {
      projectId: 1,
      projectName: 'Amalfi',
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3901.455105341643!2d-77.10708393791298!3d-12.080965167273371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sAv.%20Costanera%20cdra.25%2C%20San%20Miguel.!5e0!3m2!1ses!2scl!4v1776207349513!5m2!1ses!2scl',
      address: 'Av. Costanera cdra.25, San Miguel',
      backgroundColor: '#3e6d81',
      textColor: '#FFFFFF',
      mapsUrl: 'https://maps.google.com/?q=Av.+Costanera+cdra.25,+San+Miguel,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+Costanera+cdra.25+San+Miguel+Lima&navigate=yes',
    }
  };
}
