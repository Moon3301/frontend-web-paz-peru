export interface HeroSlide {
  image: string;
  alt?: string;
}

export interface HeroConfig {
  logo?: string;
  slides: HeroSlide[];
  projectName: string;
  district: string;
  /** Badge flotante: "Lanzamiento", "Preventa", etc. */
  badge?: string;
  /** Descripción del proyecto */
  description?: string;
  /** Primera línea del texto de precio */
  priceLine1?: string;
  /** Precio desde, e.g. "S/477,000*" */
  priceFrom?: string;
  /** Color del panel overlay central, e.g. "rgba(76,107,82,0.75)" */
  overlayColor?: string;
}

export interface ProjectStatsConfig {
  sectionTitle?: string;
  /** e.g. "Desde 34 m2 hasta 149m2" */
  areaRange: string;
  /** Dirección completa del proyecto */
  location: string;
  /** Frase descriptiva de áreas comunes */
  commonAreasLabel: string;
}

export interface AmenityIconItem {
  /** Ruta al SVG o imagen del ícono, e.g. "assets/icons/gym.svg" */
  icon: string;
  label: string;
}

export interface ApartmentSpecsConfig {
  /** Imagen de interior del proyecto */
  interiorImage: string;
  /** Nombre del proyecto (fallback si no hay logo imagen) */
  projectName: string;
  /** Subtítulo, e.g. "DEPARTAMENTOS EN JESÚS MARÍA" */
  projectSubtitle?: string;
  /** Íconos de amenidades que van en el panel derecho */
  amenityIcons?: AmenityIconItem[];
  /** e.g. "18 pisos + Azotea" */
  floors?: string;
  /** e.g. "Flats y Dúplex 1, 2 y 3 ambientes." */
  unitTypes?: string;
  /** e.g. "Desde 34 m2 hasta 149 m2" */
  areaRange?: string;
}

export interface AmenitiesConfig {
  items: AmenityIconItem[];
  /** Color de fondo de la sección, e.g. "#B87D4B" */
  backgroundColor?: string;
  /** Color del texto, default blanco */
  textColor?: string;
}

export interface GalleryImage {
  src: string;
  thumbnail?: string;
  alt?: string;
}

export interface GalleryTab {
  label: string;
  subtitle?: string;
  images: GalleryImage[];
}

export interface GalleryConfig {
  tabs: GalleryTab[];
}

export interface VideoTab {
  label: string;
  url: string;
}

export interface VideoConfig {
  /** URL principal del iframe o embed de YouTube */
  url: string;
  type: 'iframe' | 'youtube';
  title?: string;
  subtitle?: string;
  /** Tabs para recorrido virtual con múltiples vistas (Fachada, Interior, etc.) */
  tabs?: VideoTab[];
}

export interface QuoterConfig {
  /** URL del iframe del cotizador en Joomla, e.g. "https://paz.pe/apicotizador/medina/" */
  iframeUrl: string;
  /** ID del proyecto en Sperant */
  projectId: number;
  /** Nombre del proyecto para el cotizador */
  projectName: string;
}

export interface UbicationConfig {
  /** URL embed de Google Maps */
  mapEmbedUrl: string;
  address?: string;
}

export interface ProjectConfig {
  hero?: HeroConfig;
  stats?: ProjectStatsConfig;
  specs?: ApartmentSpecsConfig;
  amenities?: AmenitiesConfig;
  gallery?: GalleryConfig;
  video?: VideoConfig;
  /** Si está undefined, el componente cotizador no se renderiza */
  quoter?: QuoterConfig;
  ubication?: UbicationConfig;
}
