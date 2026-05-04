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

/**
 * Estilos individuales por elemento de texto dentro del hero.
 * Permiten sobreescribir color, fuente, tamaño y margen de cada pieza de texto.
 * Los campos no definidos usan el valor por defecto del CSS.
 */
export interface HeroElementStyle {
  /** Sobreescribe el color individual (badgeColor, descriptionColor, etc.) */
  color?: string;
  /** Fuente específica, e.g. 'Playfair Display', 'Montserrat' */
  fontFamily?: string;
  /** Tamaño de fuente, e.g. '1.2rem', '18px', 'clamp(1rem,2vw,1.5rem)' */
  fontSize?: string;
  /** Grosor de fuente, e.g. '300', '700' */
  fontWeight?: string;
  /** Espaciado entre letras, e.g. '0.1em', '2px' */
  letterSpacing?: string;
  /** Alineación del texto dentro de su elemento */
  textAlign?: string;
  /** Margen superior para separación respecto al elemento anterior */
  marginTop?: string;
  /** Margen inferior */
  marginBottom?: string;
}

/** Dimensiones del logo hero en un breakpoint. Los valores son strings CSS válidos. */
export interface LogoBreakpointSize {
  /** Ancho CSS, e.g. 'min(50vw, 580px)' o '420px' */
  width?: string;
  /** Alto CSS, e.g. 'min(45vh, 460px)' o '320px' */
  height?: string;
}

/**
 * Permite ajustar el tamaño del logo hero de forma independiente por breakpoint.
 * Solo los breakpoints definidos sobreescriben el default del CSS.
 *
 * Breakpoints de referencia:
 *   desktop  → ≥1440 px
 *   standard → 1025–1439 px  (base por defecto)
 *   tablet   → 768–1024 px
 *   mobile   → ≤767 px
 *   mobileSm → ≤480 px
 */
export interface HeroLogoSize {
  desktop?:  LogoBreakpointSize;
  standard?: LogoBreakpointSize;
  tablet?:   LogoBreakpointSize;
  mobile?:   LogoBreakpointSize;
  mobileSm?: LogoBreakpointSize;
}

export interface HeroConfig {
  logo?: string;
  /**
   * Dimensiones opcionales del logo hero por breakpoint.
   * Si no se define, el CSS usa los valores por defecto definidos en hero.component.css.
   * Ejemplo:
   *   logoSize: { mobile: { width: 'min(70vw, 260px)', height: 'min(30vh, 190px)' } }
   */
  logoSize?: HeroLogoSize;
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

  /**
   * Estilos individuales por elemento — permiten cambiar fuente, tamaño,
   * grosor y margen de cada pieza de texto de forma independiente.
   * El campo `color` aquí sobreescribe badgeColor/descriptionColor/etc.
   */
  badgeStyle?: HeroElementStyle;
  descriptionStyle?: HeroElementStyle;
  priceLabelStyle?: HeroElementStyle;
  priceFromStyle?: HeroElementStyle;
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

  /** Color de fondo del botón "Descarga Brochure". Default: #9dd3cf */
  brochureButtonBg?: string;
  /** Color de texto/icono del botón "Descarga Brochure". Default: #1a1a2e */
  brochureButtonColor?: string;
  /** Color de fondo del botón "Mira nuestro video". Default: transparent */
  videoButtonBg?: string;
  /** Color de texto/borde/icono del botón "Mira nuestro video". Default: #333 */
  videoButtonColor?: string;
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

/**
 * Datos de un ejecutivo/a de ventas para el banner inferior fijo.
 */
export interface Executive {
  /** Nombre completo */
  name: string;
  /** Cargo mostrado bajo el nombre. Default: "Ejecutivo/a de Ventas" */
  role?: string;
  /** Número de teléfono (sin código de país). Se usa para el enlace de WhatsApp. */
  phone: string;
  /** Ruta a la foto del ejecutivo, e.g. "images/executives/nombre-apellido.jpg" */
  photo: string;
}

export interface PromoBannerConfig {
  imageDesktop: string | null;
  imageMobile?: string | null;
  link?: string | null;
  isVisible: boolean;
}

export interface ProjectConfig {
  hero?: HeroConfig;
  promoBanner?: PromoBannerConfig;
  stats?: ProjectStatsConfig;
  specs?: ApartmentSpecsConfig;
  amenities?: AmenitiesConfig;
  gallery?: GalleryConfig;
  video?: VideoConfig;
  /** Si está undefined, el componente cotizador no se renderiza */
  quoter?: QuoterConfig;
  ubication?: UbicationConfig;
  virtualTour?: VirtualTourConfig;
  /**
   * Lista de ejecutivos de ventas para el banner fijo inferior.
   * Si hay más de uno, rota automáticamente con transición de opacidad.
   */
  executives?: Executive[];
}
