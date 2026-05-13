import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

const TOKEN_KEY = 'paz_admin_token';

/**
 * Interceptor de autenticación del panel de administración.
 *
 * Comportamiento:
 * - Inyecta el header Authorization: Bearer <token> únicamente en rutas
 *   protegidas del panel (/admin/ y /auth/me).
 * - Si el backend responde 401 en una de esas rutas protegidas, limpia
 *   el storage y redirige al login.
 * - Las llamadas a APIs públicas de la web (proyectos, blog, etc.)
 *   no se ven afectadas en ningún caso.
 */
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private readonly router: Router) {}

  /** Determina si la URL pertenece a una ruta protegida del panel admin */
  private isAdminRequest(url: string): boolean {
    return url.includes('/admin/') || url.includes('/auth/me');
  }

  intercept(
    req: HttpRequest<unknown>,
    next: HttpHandler,
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem(TOKEN_KEY);

    // Inyectar token solo en rutas del panel de administración
    if (token && this.isAdminRequest(req.url)) {
      req = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
    }

    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        // Redirigir al login únicamente si la ruta era admin y el token expiró/es inválido
        if (err.status === 401 && this.isAdminRequest(req.url)) {
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem('paz_admin_user');
          this.router.navigate(['/login']);
        }
        return throwError(() => err);
      }),
    );
  }
}
