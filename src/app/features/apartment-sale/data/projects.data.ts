export interface ApartmentProject {
  name: string;
  district: string;
  districtSlug: string;
  status: string;
  image: string;
  logo: string;
  link: string;
}

export const ALL_APARTMENT_PROJECTS: ApartmentProject[] = [
  {
    name: 'Marena',
    district: 'San Miguel',
    districtSlug: 'san-miguel',
    status: 'LANZAMIENTO',
    image: '/images/projects/thumb-marena-home.png',
    logo: '/images/logos/projects/logo-marena-1.svg',
    link: '/apartment-sale/san-miguel/marena'
  },
  {
    name: 'Lima 15',
    district: 'Miraflores',
    districtSlug: 'miraflores',
    status: 'LANZAMIENTO',
    image: '/images/projects/thumb-lima15-home.png',
    logo: '/images/logos/projects/logo-lima-morado.svg',
    link: '/apartment-sale/miraflores/lima-15'
  },
  {
    name: 'Matiz',
    district: 'San Isidro',
    districtSlug: 'san-isidro',
    status: 'LANZAMIENTO',
    image: '/images/projects/thumb-matiz-home.png',
    logo: '/images/logos/projects/logo-matiz.svg',
    link: '/apartment-sale/san-isidro/matiz'
  },
  {
    name: 'Riva',
    district: 'Miraflores',
    districtSlug: 'miraflores',
    status: 'LANZAMIENTO',
    image: '/images/projects/thumb-riva-home.png',
    logo: '/images/logos/projects/logo-riva.svg',
    link: '/apartment-sale/miraflores/riva'
  },
  {
    name: 'Taller',
    district: 'Miraflores',
    districtSlug: 'miraflores',
    status: 'PREVENTA',
    image: '/images/projects/thumb-taller.jpg',
    logo: '/images/logos/projects/logo-taller.png',
    link: '/apartment-sale/miraflores/taller'
  },
  {
    name: 'Serena',
    district: 'San Miguel',
    districtSlug: 'san-miguel',
    status: 'EN CONSTRUCCIÓN',
    image: '/images/projects/thumb-serena.jpg',
    logo: '/images/logos/projects/logo-serena.png',
    link: '/apartment-sale/san-miguel/serena'
  },
  {
    name: 'Florencia',
    district: 'Pueblo Libre',
    districtSlug: 'pueblo-libre',
    status: 'EN CONSTRUCCIÓN',
    image: '/images/projects/thumb-florencia-home.jpg',
    logo: '/images/logos/projects/logo-florencia.png',
    link: '/apartment-sale/pueblo-libre/florencia'
  },
  {
    name: 'Real',
    district: 'La Victoria',
    districtSlug: 'la-victoria',
    status: 'ENTREGA INMEDIATA',
    image: '/images/projects/thumb-real-home.jpg',
    logo: '/images/logos/projects/logo-real.svg',
    link: '/apartment-sale/la-victoria/real'
  },
  {
    name: 'Central',
    district: 'Miraflores',
    districtSlug: 'miraflores',
    status: 'EN CONSTRUCCIÓN',
    image: '/images/projects/thumb-central-home.jpg',
    logo: '/images/logos/projects/logo-central.png',
    link: '/apartment-sale/miraflores/central'
  },
  {
    name: 'Patio La Paz',
    district: 'San Miguel',
    districtSlug: 'san-miguel',
    status: '¡INICIAMOS CONSTRUCCIÓN!',
    image: '/images/projects/thumb-patio-home.jpg',
    logo: '/images/logos/projects/logo-patio.png',
    link: '/apartment-sale/san-miguel/patio-la-paz'
  },
  {
    name: 'Amalfi',
    district: 'San Miguel',
    districtSlug: 'san-miguel',
    status: 'ENTREGA INMEDIATA',
    image: '/images/projects/thumb-amalfi-home.jpg',
    logo: '/images/logos/projects/logo-amalfi.svg',
    link: '/apartment-sale/san-miguel/amalfi'
  },
  {
    name: 'Escala',
    district: 'La Victoria',
    districtSlug: 'la-victoria',
    status: 'ENTREGA INMEDIATA',
    image: '/images/projects/thumb-escala-home.jpg',
    logo: '/images/logos/projects/logo-escala.png',
    link: '/apartment-sale/la-victoria/escala'
  },
  {
    name: 'Savia',
    district: 'Pueblo Libre',
    districtSlug: 'pueblo-libre',
    status: 'ENTREGA INMEDIATA',
    image: '/images/projects/thumb-savia-home.jpg',
    logo: '/images/logos/projects/logo-savia.svg',
    link: '/apartment-sale/pueblo-libre/savia'
  },
  {
    name: 'Medina',
    district: 'Jesús María',
    districtSlug: 'jesus-maria',
    status: 'EN CONSTRUCCIÓN',
    image: '/images/projects/thumb-medina-home.jpg',
    logo: '/images/logos/projects/logo-medina.png',
    link: '/apartment-sale/jesus-maria/medina'
  }
];
