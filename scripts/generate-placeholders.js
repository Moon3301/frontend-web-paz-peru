/**
 * Genera imágenes placeholder SVG en todas las rutas de imagen
 * referenciadas por los componentes de proyecto.
 *
 * Uso: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const PLACEHOLDER_SRC = path.join(PUBLIC_DIR, 'images', 'placeholder.svg');

// Todas las rutas de imagen referenciadas en los componentes
const imagePaths = [
  // Hero slides
  'images/projects/central/hero-1.jpg',
  'images/projects/central/hero-2.jpg',
  'images/projects/taller/hero-1.jpg',
  'images/projects/taller/hero-2.jpg',
  'images/projects/lima15/hero-1.jpg',
  'images/projects/lima15/hero-2.jpg',
  'images/projects/lima15/hero-3.jpg',
  'images/projects/riva/hero-1.jpg',
  'images/projects/riva/hero-2.jpg',
  'images/projects/riva/hero-3.jpg',
  'images/projects/marena/hero-1.jpg',
  'images/projects/marena/hero-2.jpg',
  'images/projects/serena/hero-1.jpg',
  'images/projects/serena/hero-2.jpg',
  'images/projects/patio-la-paz/hero-1.jpg',
  'images/projects/patio-la-paz/hero-2.jpg',
  'images/projects/real/hero-1.jpg',
  'images/projects/real/hero-2.jpg',
  'images/projects/escala/hero-1.jpg',
  'images/projects/escala/hero-2.jpg',
  'images/projects/escala/hero-3.jpg',
  'images/projects/savia/hero-1.jpg',
  'images/projects/savia/hero-2.jpg',
  'images/projects/florencia/hero-1.jpg',
  'images/projects/florencia/hero-2.jpg',
  'images/projects/amalfi/hero-1.jpg',
  'images/projects/amalfi/hero-2.jpg',
  'images/projects/amalfi/hero-3.jpg',
  'images/projects/medina/hero-1.jpg',
  'images/projects/medina/hero-2.jpg',
  'images/projects/medina/hero-3.jpg',
  'images/projects/matiz/hero-1.jpg',
  'images/projects/matiz/hero-2.jpg',
  // Specs interior
  'images/projects/central/specs/interior.jpg',
  'images/projects/taller/specs/interior.jpg',
  'images/projects/lima15/specs/interior.jpg',
  'images/projects/riva/specs/interior.jpg',
  'images/projects/marena/specs/interior.jpg',
  'images/projects/serena/specs/interior.jpg',
  'images/projects/patio-la-paz/specs/interior.jpg',
  'images/projects/real/specs/interior.jpg',
  'images/projects/escala/specs/interior.jpg',
  'images/projects/savia/specs/interior.jpg',
  'images/projects/florencia/specs/interior.jpg',
  'images/projects/amalfi/specs/interior.jpg',
  'images/projects/medina/specs/interior.jpg',
  'images/projects/matiz/specs/interior.jpg',
  // Gallery - comunes
  'images/projects/central/gallery/comunes/1.jpg',
  'images/projects/central/gallery/comunes/2.jpg',
  'images/projects/taller/gallery/comunes/1.jpg',
  'images/projects/taller/gallery/comunes/2.jpg',
  'images/projects/lima15/gallery/comunes/1.jpg',
  'images/projects/lima15/gallery/comunes/2.jpg',
  'images/projects/riva/gallery/comunes/1.jpg',
  'images/projects/riva/gallery/comunes/2.jpg',
  'images/projects/marena/gallery/comunes/1.jpg',
  'images/projects/marena/gallery/comunes/2.jpg',
  'images/projects/serena/gallery/comunes/1.jpg',
  'images/projects/serena/gallery/comunes/2.jpg',
  'images/projects/patio-la-paz/gallery/comunes/1.jpg',
  'images/projects/patio-la-paz/gallery/comunes/2.jpg',
  'images/projects/real/gallery/comunes/1.jpg',
  'images/projects/real/gallery/comunes/2.jpg',
  'images/projects/escala/gallery/comunes/1.jpg',
  'images/projects/escala/gallery/comunes/2.jpg',
  'images/projects/savia/gallery/comunes/1.jpg',
  'images/projects/savia/gallery/comunes/2.jpg',
  'images/projects/florencia/gallery/comunes/1.jpg',
  'images/projects/florencia/gallery/comunes/2.jpg',
  'images/projects/amalfi/gallery/comunes/1.jpg',
  'images/projects/amalfi/gallery/comunes/2.jpg',
  'images/projects/medina/gallery/comunes/1.jpg',
  'images/projects/medina/gallery/comunes/2.jpg',
  'images/projects/medina/gallery/comunes/3.jpg',
  'images/projects/matiz/gallery/comunes/1.jpg',
  'images/projects/matiz/gallery/comunes/2.jpg',
  // Gallery - exteriores
  'images/projects/central/gallery/exteriores/1.jpg',
  'images/projects/central/gallery/exteriores/2.jpg',
  'images/projects/taller/gallery/exteriores/1.jpg',
  'images/projects/taller/gallery/exteriores/2.jpg',
  'images/projects/lima15/gallery/exteriores/1.jpg',
  'images/projects/lima15/gallery/exteriores/2.jpg',
  'images/projects/riva/gallery/exteriores/1.jpg',
  'images/projects/riva/gallery/exteriores/2.jpg',
  'images/projects/marena/gallery/exteriores/1.jpg',
  'images/projects/serena/gallery/exteriores/1.jpg',
  'images/projects/patio-la-paz/gallery/exteriores/1.jpg',
  'images/projects/real/gallery/exteriores/1.jpg',
  'images/projects/escala/gallery/exteriores/1.jpg',
  'images/projects/savia/gallery/exteriores/1.jpg',
  'images/projects/florencia/gallery/exteriores/1.jpg',
  'images/projects/amalfi/gallery/exteriores/1.jpg',
  'images/projects/medina/gallery/exteriores/1.jpg',
  'images/projects/medina/gallery/exteriores/2.jpg',
  'images/projects/matiz/gallery/exteriores/1.jpg',
  // Gallery - interiores
  'images/projects/central/gallery/interiores/1.jpg',
  'images/projects/central/gallery/interiores/2.jpg',
  'images/projects/taller/gallery/interiores/1.jpg',
  'images/projects/taller/gallery/interiores/2.jpg',
  'images/projects/lima15/gallery/interiores/1.jpg',
  'images/projects/lima15/gallery/interiores/2.jpg',
  'images/projects/riva/gallery/interiores/1.jpg',
  'images/projects/riva/gallery/interiores/2.jpg',
  'images/projects/marena/gallery/interiores/1.jpg',
  'images/projects/serena/gallery/interiores/1.jpg',
  'images/projects/patio-la-paz/gallery/interiores/1.jpg',
  'images/projects/real/gallery/interiores/1.jpg',
  'images/projects/escala/gallery/interiores/1.jpg',
  'images/projects/savia/gallery/interiores/1.jpg',
  'images/projects/florencia/gallery/interiores/1.jpg',
  'images/projects/amalfi/gallery/interiores/1.jpg',
  'images/projects/medina/gallery/interiores/1.jpg',
  'images/projects/medina/gallery/interiores/2.jpg',
  'images/projects/matiz/gallery/interiores/1.jpg',
];

// Leer el placeholder SVG
const placeholderContent = fs.readFileSync(PLACEHOLDER_SRC, 'utf8');

let created = 0;
let skipped = 0;

for (const relPath of imagePaths) {
  const absPath = path.join(PUBLIC_DIR, relPath);

  if (fs.existsSync(absPath)) {
    skipped++;
    continue;
  }

  // Crear directorios si no existen
  fs.mkdirSync(path.dirname(absPath), { recursive: true });

  // Copiar el SVG placeholder con extensión .jpg
  // El servidor de Angular dev sirve el contenido correctamente,
  // pero el MIME type será image/jpeg. Para mejor compatibilidad,
  // usamos el SVG como contenido (el navegador lo renderizará si
  // el Content-Type es flexible, o hacemos que Angular lo sirva bien).
  fs.copyFileSync(PLACEHOLDER_SRC, absPath);
  created++;
}

console.log(`✓ Placeholders generados: ${created} nuevos, ${skipped} ya existían.`);
console.log(`  Directorio destino: ${PUBLIC_DIR}`);
