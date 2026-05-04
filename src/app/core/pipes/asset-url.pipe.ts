import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environments';

/**
 * Transforma rutas relativas de assets en URLs absolutas apuntando al backend.
 *
 * Casos soportados:
 *   "images/projects/lima15/hero.jpg"  →  "http://localhost:3000/uploads/images/projects/lima15/hero.jpg"
 *   "/images/projects/lima15/hero.jpg" →  "http://localhost:3000/uploads/images/projects/lima15/hero.jpg"
 *   "http://..."                        →  "http://..." (ya es absoluta, no se modifica)
 *   null / undefined / ''              →  ""
 *
 * Uso en template:  <img [src]="p.thumbnailUrl | assetUrl">
 */
@Pipe({ name: 'assetUrl', standalone: false })
export class AssetUrlPipe implements PipeTransform {
  transform(path: string | null | undefined): string {
    if (!path) return '';
    if (path.startsWith('http://') || path.startsWith('https://')) return path;
    const clean = path.startsWith('/') ? path.slice(1) : path;
    return `${environment.uploadsUrl}/${clean}`;
  }
}
