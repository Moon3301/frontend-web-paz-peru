import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environments';
import {
  ProjectSummary,
  ProjectDetail,
  DistrictSummary,
  Promotion,
  DeliveredProjectSummary,
  CmsEvent,
  BlogPost,
} from '../models/content.models';

@Injectable({ providedIn: 'root' })
export class ContentService {
  private readonly base = environment.apiUrl;

  constructor(private readonly http: HttpClient) {}

  // ── Distritos ───────────────────────────────────────────────────────────────

  getDistricts(): Observable<DistrictSummary[]> {
    return this.http.get<DistrictSummary[]>(`${this.base}/districts`);
  }

  // ── Proyectos ───────────────────────────────────────────────────────────────

  getProjects(): Observable<ProjectSummary[]> {
    return this.http.get<ProjectSummary[]>(`${this.base}/projects`);
  }

  getProject(slug: string): Observable<ProjectDetail> {
    return this.http.get<ProjectDetail>(`${this.base}/projects/${slug}`);
  }

  // ── Promociones ─────────────────────────────────────────────────────────────

  getPromotions(): Observable<Promotion[]> {
    return this.http.get<Promotion[]>(`${this.base}/promotions`);
  }

  // ── Proyectos Entregados ─────────────────────────────────────────────────────

  getDeliveredProjects(): Observable<DeliveredProjectSummary[]> {
    return this.http.get<DeliveredProjectSummary[]>(`${this.base}/delivered-projects`);
  }

  // ── Eventos y Ferias ────────────────────────────────────────────────────────

  getEvents(type?: 'EVENT' | 'FAIR'): Observable<CmsEvent[]> {
    const url = type
      ? `${this.base}/events?type=${type}`
      : `${this.base}/events`;
    return this.http.get<CmsEvent[]>(url);
  }

  getEvent(id: number): Observable<CmsEvent> {
    return this.http.get<CmsEvent>(`${this.base}/events/${id}`);
  }

  // ── CMS Settings ────────────────────────────────────────────────────────────

  getSettings(): Observable<Record<string, string>> {
    return this.http.get<Record<string, string>>(`${this.base}/settings`);
  }

  // ── Blog ────────────────────────────────────────────────────────────────────

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>(`${this.base}/blog`);
  }

  getBlogPost(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`${this.base}/blog/${slug}`);
  }
}
