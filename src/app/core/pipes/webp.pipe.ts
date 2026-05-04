import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environments';

/**
 * Convierte URLs de imagen a .webp cuando environment.useWebp está activo.
 *
 * Uso en template:  <img [src]="imageUrl | webp">
 *
 * Para activar la conversión cuando termines de convertir las imágenes:
 *   → Cambiar useWebp: true en environments.ts (dev) y environments.prod.ts (ya activo)
 */
@Pipe({ name: 'webp', standalone: false })
export class WebpPipe implements PipeTransform {
  transform(url: string | null | undefined): string {
    if (!url) return '';
    if (!environment.useWebp) return url;
    return url.replace(/\.(jpe?g|png)(\?.*)?$/i, '.webp$2');
  }
}
