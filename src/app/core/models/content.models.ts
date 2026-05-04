// ── Proyectos ─────────────────────────────────────────────────────────────────

export type ProjectStatus =
  | 'LANZAMIENTO'
  | 'EN CONSTRUCCIÓN'
  | 'ENTREGA'
  | 'AGOTADO';

export interface ProjectSummary {
  id: number;
  slug: string;
  name: string;
  /** Slug del distrito, ej: "miraflores", "san-miguel". También se usa como display label (título) en las cards. */
  district: string;
  status: ProjectStatus;
  logoUrl: string | null;
  thumbnailUrl: string | null;
  sperantProjectId: number | null;
  sortOrder: number;
}

/**
 * Respuesta de GET /api/projects/:slug
 * sections es un mapa sectionKey → config deserializado
 */
export interface ProjectDetail extends ProjectSummary {
  sections: {
    hero?:         HeroSectionConfig;
    specs?:        SpecsSectionConfig;
    amenities?:    AmenitiesSectionConfig;
    quoter?:       QuoterSectionConfig;
    gallery?:      GallerySectionConfig;
    video?:        VideoSectionConfig;
    virtual_tour?: VirtualTourSectionConfig;
    ubication?:    UbicationSectionConfig;
    executives?:   ExecutivesSectionConfig;
  };
}

// Shapes de cada sección — espejo de las interfaces del frontend existente
// Se completan progresivamente conforme se migran los proyectos al backend

export interface HeroSectionConfig {
  logo?: string;
  slides: Array<{ image: string; imageTablet?: string; imageMobile?: string }>;
  projectName?: string;
  district?: string;
  badge?: string;
  badgeStyle?: Record<string, string>;
  description?: string;
  descriptionStyle?: Record<string, string>;
  priceLine1?: string;
  priceFrom?: string;
  priceFromStyle?: Record<string, string>;
  priceLabelStyle?: Record<string, string>;
  textPosition?: 'top' | 'bottom' | 'left' | 'right';
  textColor?: string;
  logoSize?: { desktop?: string; standard?: string; tablet?: string; mobile?: string; mobileSm?: string };
}

export interface SpecsSectionConfig {
  stats?: {
    backgroundColor?: string;
    textColor?: string;
    sectionTitle?: string;
    areaRange?: string;
    location?: string;
    commonAreasLabel?: string;
    items?: Array<{ icon: string; label: string; value: string }>;
  };
  specs?: {
    description?: string;
    interiorImage?: string;
    projectName?: string;
    projectSubtitle?: string;
    amenityIcons?: Array<{ icon: string; label: string }>;
    floors?: number;
    unitTypes?: string;
    areaRange?: string;
    logo?: string;
    brochureUrl?: string;
    videoUrl?: string;
    brochureButtonBg?: string;
    videoButtonBg?: string;
  };
}

export interface AmenitiesSectionConfig {
  title?: string;
  items: Array<{ icon: string; label: string }>;
  backgroundColor?: string;
  textColor?: string;
}

export interface QuoterSectionConfig {
  projectId: number;
  projectName?: string;
}

export interface GallerySectionConfig {
  tabs: Array<{
    label: string;
    subtitle?: string;
    images: string[];
  }>;
}

export interface VideoSectionConfig {
  url?: string;
  type?: 'iframe' | 'youtube';
  title?: string;
  subtitle?: string;
  backgroundColor?: string;
  textColor?: string;
  fallbackImage?: string;
  tabs?: Array<{ label: string; url: string }>;
}

export interface VirtualTourSectionConfig {
  url: string;
  projectTitle?: string;
  backgroundColor?: string;
  textColor?: string;
}

export interface UbicationSectionConfig {
  mapEmbedUrl?: string;
  image?: string;
  address?: string;
  projectTitle?: string;
  mapsUrl?: string;
  wazeUrl?: string;
}

export interface ExecutivesSectionConfig {
  executives: Array<{
    name: string;
    role?: string;
    phone: string;
    photo?: string;
  }>;
}

// ── Banner promocional por proyecto ──────────────────────────────────────────

export interface PromoBannerSectionConfig {
  /** URL de la imagen para escritorio */
  imageDesktop: string | null;
  /** URL de la imagen para móvil (opcional) */
  imageMobile?: string | null;
  /** URL de destino al hacer clic (opcional) */
  link?: string | null;
  /** Si false, el banner no se renderiza */
  isVisible: boolean;
}

// ── Distritos ─────────────────────────────────────────────────────────────────

export interface DistrictSummary {
  id: number;
  label: string;
  slug: string;
  mapImage: string | null;
  isActive: boolean;
  sortOrder: number;
}

// ── Promociones ───────────────────────────────────────────────────────────────

export interface Promotion {
  id: number;
  title: string;
  description: string | null;
  imageUrl: string | null;
  badgeText: string | null;
  district: string | null;
  projectLink: string | null;
  disclaimer: string | null;
  isFeatured: boolean;
  projectId: number | null;
  isActive: boolean;
  startsAt: string | null;
  endsAt: string | null;
  sortOrder: number;
}

// ── Eventos y Ferias ──────────────────────────────────────────────────────────

export type EventType = 'EVENT' | 'FAIR';

export interface CmsEvent {
  id: number;
  title: string;
  description: string | null;
  type: EventType;
  imageUrl: string | null;
  location: string | null;
  startsAt: string | null;
  endsAt: string | null;
  isActive: boolean;
  sortOrder: number;
}

// ── Proyectos Entregados ──────────────────────────────────────────────────────

export interface DeliveredProjectSummary {
  id: number;
  name: string;
  district: string | null;
  address: string | null;
  rooms: string | null;
  imageUrl: string | null;
  sortOrder: number;
}

// ── Blog ──────────────────────────────────────────────────────────────────────

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string | null;
  content?: string;
  coverImageUrl: string | null;
  author: string | null;
  category: string | null;
  tags: string[];
  readTime: number | null;
  isPublished: boolean;
  publishedAt: string | null;
}
