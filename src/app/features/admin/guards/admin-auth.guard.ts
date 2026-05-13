import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable({ providedIn: 'root' })
export class AdminAuthGuard implements CanActivate, CanActivateChild {
  constructor(
    private readonly auth: AdminAuthService,
    private readonly router: Router,
  ) {}

  canActivate(): boolean {
    return this.check();
  }

  canActivateChild(): boolean {
    return this.check();
  }

  private check(): boolean {
    if (this.auth.isLoggedIn()) return true;
    this.router.navigate(['/login']);
    return false;
  }
}
