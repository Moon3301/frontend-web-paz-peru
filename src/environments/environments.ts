export const environment = {
  production: false,
  apiUrl: 'http://localhost:3000/api',
  uploadsUrl: 'http://localhost:3000/uploads',
  /**
   * Cambiar a true cuando todas las imágenes hayan sido convertidas a .webp.
   * El pipe WebpPipe reemplazará .jpg y .png por .webp automáticamente en todos los templates.
   */
  useWebp: false,
};

// Compatibilidad con imports existentes que usan API_URL directamente
export const API_URL = environment.apiUrl;
