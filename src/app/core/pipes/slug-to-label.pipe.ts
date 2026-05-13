import { Pipe, PipeTransform } from '@angular/core';

/**
 * Convierte un slug de distrito en un label legible.
 * Ejemplos:
 *   "san-miguel"  → "San Miguel"
 *   "la-victoria" → "La Victoria"
 *   "miraflores"  → "Miraflores"
 *   "jesus-maria" → "Jesús María"
 *
 * Primero intenta un mapa de labels conocidos (para preservar tildes y casos
 * especiales). Si el slug no está en el mapa, genera el label automáticamente
 * reemplazando guiones por espacios y capitalizando cada palabra.
 */
@Pipe({ name: 'slugToLabel', pure: true, standalone: false })
export class SlugToLabelPipe implements PipeTransform {

  private static readonly KNOWN: Record<string, string> = {
    'miraflores':   'Miraflores',
    'san-miguel':   'San Miguel',
    'la-victoria':  'La Victoria',
    'pueblo-libre': 'Pueblo Libre',
    'jesus-maria':  'Jesús María',
    'san-isidro':   'San Isidro',
    'san-borja':    'San Borja',
    'surco':        'Surco',
    'barranco':     'Barranco',
    'lima':         'Lima',
  };

  transform(slug: string | null | undefined): string {
    if (!slug) return '';
    const known = SlugToLabelPipe.KNOWN[slug.toLowerCase()];
    if (known) return known;
    // Fallback automático: guiones → espacios, Title Case
    return slug
      .split('-')
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
}
