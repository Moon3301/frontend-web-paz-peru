import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-central',
  standalone: false,
  templateUrl: './central.component.html',
  styleUrl: './central.component.css'
})
export class CentralComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-central.webp',
      projectName: 'Central',
      district: 'DEPARTAMENTOS EN MIRAFLORES',
      badge: '¡ÚLTIMOS DEPAS!',
      description: 'TU DEPA DE 3 AMBIENTES CON PRECIO DESDE',
      priceFrom: 'S/ 764,000*',
      overlayColor: 'rgba(178, 140, 173, 0.5)',
      textColor: '#161129',
      badgeColor: '#b53b8f',
      descriptionColor: '#3a1e5a',
      priceLabelColor: '#5a3a7a',
      priceFromColor: '#9d1f6b',
      textPosition: { bottom: '35%' },
      slides: [
        { image: 'images/projects/central/hero-1.jpg', alt: 'Central - Fachada' },
        { image: 'images/projects/central/hero-2.jpg', alt: 'Central - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#9dd3cf',
      sectionTitle: 'DESCUBRE CADA DETALLE DE ESTE GRAN PROYECTO EN MIRAFLORES',
      areaRange: {
        icon: 'images/projects/central/icons/depart.png',
        label: 'Desde 59m2 hasta 128m2'
      },
      location: {
        icon: 'images/projects/central/icons/map.png',
        label: 'Av. Mariscal La Mar 1062 - Miraflores'
      },
      commonAreasLabel: {
        icon: 'images/projects/central/icons/piscina.png',
        label: 'Para el máximo confort'
      }
    },
    specs: {
      interiorImage: 'images/projects/central/bar-central.jpg',
      projectName: 'Central',
      projectSubtitle: 'DEPARTAMENTOS EN MIRAFLORES',
      amenityIcons: [
        { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
        { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
      ],
      floors: 'Flats y Dúplex',
      unitTypes: '1, 2 y 3 Dormitorios',
      areaRange: 'Desde 59m2 hasta 128m2',
      amenities: 'Coworking, gimnasio, lavandería, sala bar, área de parrillas, piscina con deck y estacionamiento de bicicletas.',
      logo: 'images/logos/projects/logo-central.png',
      brochureUrl: 'docs/brochures/central.pdf',
      videoUrl: 'https://www.youtube.com/embed/lvL6jsWh79s',
      backgroundColor: '#fab605',
      textColor: '#161129',
    },
    amenities: {
      title: 'ESPACIOS QUE SE ADAPTAN A TI',
      backgroundColor: '#e8d4e3',
      textColor: '#161129',
      items: [
        { icon: 'images/projects/central/icons/lobby.png', label: 'LOBBY' },
        { icon: 'images/projects/central/icons/co-working.png', label: 'COWORKING' },
        { icon: 'images/projects/central/icons/gimnasio.png', label: 'GIMNASIO' },
        { icon: 'images/projects/central/icons/piscina.png', label: 'PISCINA' },
        { icon: 'images/projects/central/icons/zona-de-parrillas.png', label: 'ZONA DE PARRILLAS' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Central tiene áreas comunes para cualquier momento de tu día, un completo CoWorking, Gimnasio equipado, Área de parrillas para tus fines de semana y una piscina con deck para los momentos de relajo.',
          images: [
            { src: 'images/projects/central/gallery/comunes/1.png' },
            { src: 'images/projects/central/gallery/comunes/2.png' },
            { src: 'images/projects/central/gallery/comunes/3.png' },
            { src: 'images/projects/central/gallery/comunes/4.png' },
            { src: 'images/projects/central/gallery/comunes/5.png' },
            { src: 'images/projects/central/gallery/comunes/6.png' },
            { src: 'images/projects/central/gallery/comunes/7.png' },
            { src: 'images/projects/central/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          subtitle: 'Modernos, acogedores, cómodos y multifuncionales, en Central tu departamento hablará por ti, disfruta cada espacio, pensado en darte lo mejor.',
          images: [
            { src: 'images/projects/central/gallery/exteriores/1.jpg' },
            { src: 'images/projects/central/gallery/exteriores/2.jpg' },
            { src: 'images/projects/central/gallery/exteriores/3.jpg' },
            { src: 'images/projects/central/gallery/exteriores/4.jpg' },
            { src: 'images/projects/central/gallery/exteriores/5.jpg' },
            { src: 'images/projects/central/gallery/exteriores/6.jpg' },
          ]
        },
        {
          label: 'Interiores',
          subtitle: 'Una fachada con estilo, todo lo que necesita la Av. La Mar para seguir siendo el nuevo centro de Miraflores.',
          images: [
            { src: 'images/projects/central/gallery/interiores/1.png' },
            { src: 'images/projects/central/gallery/interiores/2.png' },
            { src: 'images/projects/central/gallery/interiores/3.png' },
            { src: 'images/projects/central/gallery/interiores/4.png' },
            { src: 'images/projects/central/gallery/interiores/5.png' },
            { src: 'images/projects/central/gallery/interiores/6.png' },
            { src: 'images/projects/central/gallery/interiores/7.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#e8d4e3',
      textColor: '#161129',
      url: 'https://www.youtube.com/embed/lvL6jsWh79s',
      type: 'youtube',
      title: 'CONOCE PROYECTO CENTRAL',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    ubication: {
      image: 'images/projects/central/mapa-central1.jpg',
      address: 'Av. Mariscal La Mar 1062 - Miraflores',
      projectTitle: 'UBICACIÓN DEL PROYECTO',
      backgroundColor: '#e8d4e3',
      mapsUrl: 'https://maps.google.com/?q=Av.+Mariscal+La+Mar+1062,+Miraflores,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+Mariscal+La+Mar+1062+Miraflores+Lima&navigate=yes',
    },
    virtualTour: {
      url: 'https://360.nerdstudio.pe/recorridovirtual/paz/central/index.htm',
      projectTitle: 'RECORRIDO VIRTUAL',
      backgroundColor: '#e8d4e3',
      textColor: '#161129',
    },
    quoter: {
      projectId: 2,
      projectName: 'CENTRAL',
    },
  };
}
