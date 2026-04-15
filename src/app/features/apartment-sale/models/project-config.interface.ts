export interface HeroSlide {
  image: string;
  alt?: string;
}

/**
 * Posición del bloque de texto dentro de la imagen del logo.
 * Usa valores CSS (px, %, em). Solo los definidos sobreescriben el default.
 * Ejemplo: { top: '58%', left: '8%', right: '8%' }
 */
export interface HeroTextPosition {
  top?: string;
  bottom?: string;
  left?: string;
  right?: string;
}

export interface HeroConfig {
  logo?: string;
  slides: HeroSlide[];
  projectName: string;
  district: string;
  /** Badge: "Lanzamiento", "En venta", etc. */
  badge?: string;
  /** Descripción corta del proyecto */
  description?: string;
  /** Primera línea del bloque de precio */
  priceLine1?: string;
  /** Precio desde, e.g. "S/ 477,000*" */
  priceFrom?: string;
  /** @deprecated No usado en la vista actual */
  overlayColor?: string;
  /**
   * Posición del bloque de texto DENTRO de la imagen del logo.
   * Por defecto: bottom 8%, left 0, right 0.
   * Ajustar por proyecto según el espacio disponible en cada logo.
   */
  textPosition?: HeroTextPosition;
  /**
   * Color base para todos los textos (fallback si no se define el color individual).
   * Default: '#ffffff'.
   */
  textColor?: string;

  /**
   * Color del badge ("En venta", "Lanzamiento", etc.).
   * Si no se define, usa textColor.
   */
  badgeColor?: string;

  /**
   * Color de la descripción corta del proyecto.
   * Si no se define, usa textColor.
   */
  descriptionColor?: string;

  /**
   * Color de la etiqueta de precio (priceLine1 — texto pequeño).
   * Si no se define, usa textColor.
   */
  priceLabelColor?: string;

  /**
   * Color del precio principal (priceFrom — número grande).
   * Si no se define, usa textColor.
   */
  priceFromColor?: string;
}

export interface ProjectStatsConfig {

  backgroundColor?: string;
  textColor?: string;

  sectionTitle?: string;
  /** e.g. "Desde 34 m2 hasta 149m2" */
  areaRange: ProjectStatsItem;
  /** Dirección completa del proyecto */
  location: ProjectStatsItem;
  /** Frase descriptiva de áreas comunes */
  commonAreasLabel: ProjectStatsItem;

  items?: ProjectStatsItem[];
}

export interface ProjectStatsItem {
  label: string;
  icon: string;
}

export interface AmenityIconItem {
  /** Ruta al SVG o imagen del ícono, e.g. "assets/icons/gym.svg" */
  icon: string;
  label: string;
}

export interface ApartmentSpecsConfig {

  description?: string;
  /** Imagen de interior del proyecto */
  interiorImage: string;
  /** Nombre del proyecto (fallback si no hay logo imagen) */
  projectName: string;
  /** Subtítulo, e.g. "DEPARTAMENTOS EN JESÚS MARÍA" */
  projectSubtitle?: string;
  /** Íconos de amenidades que van en el panel derecho */
  amenityIcons?: AmenityIconItem[];

  amenityIcon?: string;
  /** e.g. "18 pisos + Azotea" */
  floors?: string;
  /** e.g. "Flats y Dúplex 1, 2 y 3 ambientes." */
  unitTypes?: string;
  /** e.g. "Desde 34 m2 hasta 149 m2" */
  areaRange?: string;

  amenities?: string;

  backgroundColor?: string;

  textColor?: string;

  logo?: string;
  /** Ruta al PDF del brochure para descarga, e.g. "docs/brochures/central.pdf" */
  brochureUrl?: string;
  /** URL embed de YouTube para abrir en modal desde el botón del panel */
  videoUrl?: string;
}

export interface AmenitiesConfig {

  title?: string;

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
  backgroundColor?: string;
  textColor?: string;
  /** Tabs para recorrido virtual con múltiples vistas (Fachada, Interior, etc.) */
  tabs?: VideoTab[];
  /** Imagen de portada/thumbnail; si se define, el video se abre en modal al hacer clic */
  fallbackImage?: string;
}

export interface QuoterConfig {
  /** ID del proyecto en Sperant */
  projectId: number;
  /** Nombre del proyecto para el cotizador */
  projectName: string;
  /** @deprecated URL del iframe legacy (ya no se usa) */
  iframeUrl?: string;
}

export interface UbicationConfig {
  /** URL embed de Google Maps */
  mapEmbedUrl?: string;
  image?: string;
  address?: string;
  /** Título de la sección, e.g. "UBICACIÓN DEL PROYECTO" */
  projectTitle?: string;
  /** URL externa de Google Maps para abrir en nueva pestaña */
  mapsUrl?: string;
  /** Deep link de Waze, e.g. "https://waze.com/ul?q=..." */
  wazeUrl?: string;
  /** Color de fondo del panel de información */
  backgroundColor?: string;
  /** Color del texto, default blanco */
  textColor?: string;
}

export interface VirtualTourConfig {
  url?: string;
  projectTitle?: string;
  backgroundColor?: string;
  textColor?: string;
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
  virtualTour?: VirtualTourConfig;
}
