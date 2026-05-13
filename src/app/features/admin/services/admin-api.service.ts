import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environments';

const BASE = environment.apiUrl;

@Injectable({ providedIn: 'root' })
export class AdminApiService {
  constructor(private readonly http: HttpClient) {}

  // ── Proyectos ──────────────────────────────────────────────────────────────
  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/projects`);
  }
  getProject(id: number): Observable<any> {
    return this.http.get<any>(`${BASE}/admin/projects/${id}`);
  }
  getProjectBySlug(slug: string): Observable<any> {
    return this.http.get<any>(`${BASE}/projects/${slug}`);
  }
  createProject(data: any): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/projects`, data);
  }
  updateProject(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/projects/${id}`, data);
  }
  deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/projects/${id}`);
  }

  // ── Secciones ──────────────────────────────────────────────────────────────
  getSections(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/projects/${projectId}/sections`);
  }
  upsertSection(projectId: number, sectionKey: string, config: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/projects/${projectId}/sections`, {
      sectionKey,
      config,
      isVisible: true,
    });
  }

  // ── Distritos ──────────────────────────────────────────────────────────────
  getDistricts(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/districts`);
  }
  createDistrict(data: any): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/districts`, data);
  }
  updateDistrict(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/districts/${id}`, data);
  }
  toggleDistrict(id: number): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/districts/${id}/toggle`, {});
  }
  deleteDistrict(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/districts/${id}`);
  }

  // ── Toggle project ─────────────────────────────────────────────────────────
  toggleProject(id: number): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/projects/${id}/toggle`, {});
  }

  // ── Promociones ────────────────────────────────────────────────────────────
  getPromotions(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/promotions`);
  }
  createPromotion(data: any): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/promotions`, data);
  }
  updatePromotion(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/promotions/${id}`, data);
  }
  deletePromotion(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/promotions/${id}`);
  }

  // ── Proyectos Entregados ───────────────────────────────────────────────────
  getDeliveredProjects(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/delivered-projects`);
  }
  createDeliveredProject(data: any): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/delivered-projects`, data);
  }
  updateDeliveredProject(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/delivered-projects/${id}`, data);
  }
  deleteDeliveredProject(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/delivered-projects/${id}`);
  }

  // ── CMS Settings ──────────────────────────────────────────────────────────
  getSettings(): Observable<Record<string, string>> {
    return this.http.get<Record<string, string>>(`${BASE}/settings`);
  }
  updateSettings(settings: { key: string; value: string }[]): Observable<Record<string, string>> {
    return this.http.patch<Record<string, string>>(`${BASE}/admin/settings`, { settings });
  }

  // ── Blog ──────────────────────────────────────────────────────────────────
  getBlogPosts(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/blog`);
  }
  getBlogPost(id: number): Observable<any> {
    return this.http.get<any>(`${BASE}/admin/blog/${id}`);
  }
  createBlogPost(data: any): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/blog`, data);
  }
  updateBlogPost(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/blog/${id}`, data);
  }
  deleteBlogPost(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/blog/${id}`);
  }

  // ── Usuarios (solo admin) ─────────────────────────────────────────────────
  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${BASE}/admin/users`);
  }
  createUser(data: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/users`, data);
  }
  updateUser(id: number, data: { name?: string; email?: string; role?: string }): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/users/${id}`, data);
  }
  toggleUser(id: number): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/users/${id}/toggle`, {});
  }
  changeUserPassword(id: number, newPassword: string): Observable<any> {
    return this.http.patch<any>(`${BASE}/admin/users/${id}/password`, { newPassword });
  }
  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${BASE}/admin/users/${id}`);
  }

  // ── Dev Tools ─────────────────────────────────────────────────────────────
  getSeedExport(): Observable<any> {
    return this.http.get<any>(`${BASE}/admin/seed-export`);
  }

  // ── Media (upload legacy) ──────────────────────────────────────────────────
  uploadFile(file: File, folder?: string): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);
    if (folder) fd.append('folder', folder);
    return this.http.post<any>(`${BASE}/admin/media/upload`, fd);
  }

  // ── Media Manager ──────────────────────────────────────────────────────────
  listMediaFiles(folder?: string): Observable<any[]> {
    const params = folder ? `?folder=${encodeURIComponent(folder)}` : '';
    return this.http.get<any[]>(`${BASE}/admin/media/files${params}`);
  }

  uploadToFolder(file: File, folder: string): Observable<any> {
    const fd = new FormData();
    fd.append('file', file);
    return this.http.post<any>(
      `${BASE}/admin/media/manager-upload?folder=${encodeURIComponent(folder)}`,
      fd,
    );
  }

  deleteMediaFile(path: string): Observable<any> {
    return this.http.delete<any>(
      `${BASE}/admin/media/files?path=${encodeURIComponent(path)}`,
    );
  }

  createMediaFolder(path: string): Observable<any> {
    return this.http.post<any>(`${BASE}/admin/media/folders`, { path });
  }
}
