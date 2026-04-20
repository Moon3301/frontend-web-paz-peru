import { Component } from '@angular/core';
import { ProjectConfig } from '../../../models/project-config.interface';

@Component({
  selector: 'app-florencia',
  standalone: false,
  templateUrl: './florencia.component.html',
  styleUrl: './florencia.component.css'
})
export class FlorenciaComponent {
  config: ProjectConfig = {
    hero: {
      logo: 'images/logos/projects/logo-florencia-10.webp',
      projectName: 'Florencia',
      district: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      // badge: 'En venta',
      description: 'ENTREGA INMEDIATA',
      priceLine1: 'TU DEPA DE 2 AMBIENTE CON PRECIO DESDE',
      priceFrom: 'S/ 405,000*',
      overlayColor: 'rgba(120, 60, 20, 0.75)',
      textColor: '#ffffff',
      descriptionStyle: {
        fontSize: '2.2rem',
        letterSpacing: '0.12em',
        fontWeight: '700',
      },
      priceLabelStyle: { fontSize: '1rem' },
      priceFromStyle: {
        fontSize: '2.8rem',
        fontWeight: '700',
      },
      badgeColor: '#ffffff',
      descriptionColor: '#c8f5c4',
      priceLabelColor: '#c8f5c4',
      priceFromColor: '#c8f5c4',
      textPosition: { bottom: '30%' },
      slides: [
        { image: 'images/projects/florencia/1.jpg', alt: 'Florencia - Fachada' },
        { image: 'images/projects/florencia/2.jpg', alt: 'Florencia - Vista exterior' },
      ]
    },
    stats: {
      backgroundColor: '#038e01',
      textColor: '#FFFFFF',
      areaRange: {
        icon: 'images/projects/florencia/icons/map.png',
        label: 'Av. Mariano Cornejo 1455, Pueblo Libre'
      },
      location: {
        icon: 'images/projects/florencia/icons/depart.png',
        label: 'Desde 57 m2 hasta 166m2'
      },
      commonAreasLabel: {
        icon: 'images/projects/florencia/icons/piscina.png',
        label: 'Para disfrutar todos los días'
      }
    },
    specs: {
      logo: 'images/logos/projects/logo-florencia-1.png',
      interiorImage: 'images/projects/florencia/specs/interior.jpg',
      projectName: 'Florencia',
      projectSubtitle: 'DEPARTAMENTOS EN PUEBLO LIBRE',
      brochureUrl: 'docs/brochures/florencia.pdf',
      videoUrl: 'https://www.youtube.com/embed/LkungfaWf-c',
      amenityIcons: [
        // { icon: 'svg/icons/lobby.svg', label: 'Lobby' },
        // { icon: 'svg/icons/gym.svg', label: 'Gimnasio' },
        // { icon: 'svg/icons/grill.svg', label: 'Zona de parrilla' },
        // { icon: 'svg/icons/meeting-room.svg', label: 'Sala de reuniones' },
      ],
      floors: '22 Pisos',
      unitTypes: 'Flats y Dúplex de 2 y 3 ambientes',
      areaRange: 'Desde 57m2 hasta 166m2',

    },
    amenities: {
      backgroundColor: '#fc6954',
      textColor: '#FFFFFF',
      title: 'Espacios para compartir - áreas comunes',
      items: [
        { icon: 'images/projects/florencia/icons/piscina.svg', label: 'PISCINA' },
        { icon: 'images/projects/florencia/icons/parrilla.svg', label: 'PARRILLA' },
        { icon: 'images/projects/florencia/icons/gimnasio.svg', label: 'GIMNASIO' },
        { icon: 'images/projects/florencia/icons/smart-coffe.svg', label: 'SMART COFFEE' },
        { icon: 'images/projects/florencia/icons/sala-bar.svg', label: 'SALA BAR' },
        { icon: 'images/projects/florencia/icons/icono-salakids.svg', label: 'KIDS ROOM' },
      ]
    },
    gallery: {
      tabs: [
        {
          label: 'Áreas comunes',
          subtitle: 'Áreas comunes para disfrutar al máximo cada momento, Piscina con una vista espectacular para relajarte en la terraza, Área de parrilla para aprovechar los fines de semana con familia y amigos, Gimnasio equipado para entrenar sin salir de casa y un Smart Café, nuestra nueva experiencia de home office.',
          images: [
            { src: 'images/projects/florencia/gallery/comunes/1.png' },
            { src: 'images/projects/florencia/gallery/comunes/2.png' },
            { src: 'images/projects/florencia/gallery/comunes/3.png' },
            { src: 'images/projects/florencia/gallery/comunes/4.png' },
            { src: 'images/projects/florencia/gallery/comunes/5.png' },
            { src: 'images/projects/florencia/gallery/comunes/6.png' },
            { src: 'images/projects/florencia/gallery/comunes/7.png' },
            { src: 'images/projects/florencia/gallery/comunes/8.png' },
          ]
        },
        {
          label: 'Exteriores',
          subtitle: 'Florencia, donde podrás estar cerca a todo, cerca a ti mismo.',
          images: [
            { src: 'images/projects/florencia/gallery/exteriores/1.webp' },
            { src: 'images/projects/florencia/gallery/exteriores/2.webp' },
            { src: 'images/projects/florencia/gallery/exteriores/3.webp' },
            { src: 'images/projects/florencia/gallery/exteriores/4.webp' },
          ]
        },
        {
          label: 'Interiores',
          subtitle: 'Departamentos diseñados para tu comodidad y estilo de vida.',
          images: [
            { src: 'images/projects/florencia/gallery/interiores/1.png' },
            { src: 'images/projects/florencia/gallery/interiores/2.png' },
            { src: 'images/projects/florencia/gallery/interiores/3.png' },
            { src: 'images/projects/florencia/gallery/interiores/4.png' },
            { src: 'images/projects/florencia/gallery/interiores/5.png' },
            { src: 'images/projects/florencia/gallery/interiores/6.png' },
          ]
        }
      ]
    },
    video: {
      backgroundColor: '#038e01',
      textColor: '#FFFFFF',
      url: 'https://www.youtube.com/embed/LkungfaWf-c',
      type: 'youtube',
      title: 'CONOCE PROYECTO FLORENCIA',
      fallbackImage: 'images/projects/central/video-central.png',
    },
    // virtualTour: {
    //   url: 'https://360.nerdstudio.pe/recorridovirtual/paz/florencia/index.htm',
    //   projectTitle: 'RECORRIDO VIRTUAL',
    //   backgroundColor: '#ec615b',
    //   textColor: '#FFFFFF',
    // },
    quoter: {
      projectId: 5,
      projectName: 'FLORENCIA',
    },
    ubication: {
      mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.646109374245!2d-77.06891122408935!3d-12.067852588170593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c919b5b36c87%3A0x3aa7afcc55fb42ec!2sEdificio%20Florencia%2C%20Av.%20Mariano%20H.%20Cornejo%201455%2C%20Lima%2015083%2C%20Per%C3%BA!5e0!3m2!1ses!2scl!4v1776207519120!5m2!1ses!2scl',
      address: 'Av. Mariano Cornejo n°1455, Pueblo Libre',
      mapsUrl: 'https://maps.google.com/?q=Av.+Mariano+Cornejo+n%C2%B01455,+Pueblo+Libre,+Lima,+Per%C3%BA',
      wazeUrl: 'https://waze.com/ul?q=Av+Mariano+Cornejo+n%C2%B01455+Pueblo+Libre+Lima&navigate=yes',
    }
  };
}
