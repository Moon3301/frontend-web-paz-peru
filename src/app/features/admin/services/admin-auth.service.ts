import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const STORAGE_KEY = 'paz_admin_logged';
const ADMIN_USER = 'admin';
const ADMIN_PASS = 'paz2026';

@Injectable({ providedIn: 'root' })
export class AdminAuthService {
  constructor(private readonly router: Router) {}

  login(username: string, password: string): boolean {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      localStorage.setItem(STORAGE_KEY, 'true');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(STORAGE_KEY);
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem(STORAGE_KEY) === 'true';
  }
}
