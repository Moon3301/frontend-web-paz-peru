import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../../environments/environments';

const TOKEN_KEY = 'paz_admin_token';
const USER_KEY  = 'paz_admin_user';

export interface AdminUser {
  id:        number;
  name:      string;
  email:     string;
  role:      'admin' | 'ventas' | 'seo';
  isActive:  boolean;
  createdAt: string;
  updatedAt: string;
}

export interface LoginResponse {
  token: string;
  user:  AdminUser;
}

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  private readonly base = environment.apiUrl;

  constructor(
    private readonly http: HttpClient,
    private readonly router: Router,
  ) {}

  // ── Login / Logout ────────────────────────────────────────────────────────

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.base}/auth/login`, { email, password })
      .pipe(
        tap((res) => {
          localStorage.setItem(TOKEN_KEY, res.token);
          localStorage.setItem(USER_KEY, JSON.stringify(res.user));
        }),
      );
  }

  logout(): void {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    this.router.navigate(['/login']);
  }

  // ── Estado ────────────────────────────────────────────────────────────────

  isLoggedIn(): boolean {
    const token = this.getToken();
    if (!token) return false;
    // Verificar expiración del payload JWT sin librería externa
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.exp * 1000 > Date.now();
    } catch {
      return false;
    }
  }

  getToken(): string | null {
    return localStorage.getItem(TOKEN_KEY);
  }

  getCurrentUser(): AdminUser | null {
    const raw = localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try { return JSON.parse(raw) as AdminUser; } catch { return null; }
  }

  getRole(): 'admin' | 'ventas' | 'seo' | null {
    return this.getCurrentUser()?.role ?? null;
  }

  hasRole(...roles: Array<'admin' | 'ventas' | 'seo'>): boolean {
    const role = this.getRole();
    return role !== null && roles.includes(role);
  }
}
