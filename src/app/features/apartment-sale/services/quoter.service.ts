import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// ── Interfaces de datos de unidades ──────────────────────────────────────────

export interface UnitItem {
  IdUnidad: number;
  NombreUnidad: string;
  CantidadDormitorios: number;
  Tipologia: {
    IdTipologia: number;
    NombreTipologia: string;
    UrlImagenTipologia: string;
  };
}

export interface TypologyData {
  NombreTipologia: string;
  UrlImagenTipologia: string;
  Unidades: UnitItem[];
}

/** Respuesta de GET /api/units: objeto con keys de dormitorios → tipologías */
export type GroupedUnits = {
  [dormitorios: string]: {
    [tipologiaId: string]: TypologyData;
  };
};

// ── Interfaces de cotización ─────────────────────────────────────────────────

export interface QuotationPayload {
  document: string;
  fname: string;
  lname: string;
  email: string;
  phone: string;
  observation: string;
  proyecto: string;
  proyectoID: string;
  unidad: string;
  tipologia: string;
  unidadID: string;
  tipologiaID: string;
  source_id?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface QuotationResponse {
  success: boolean;
  message: string;
}

// ── Servicio ─────────────────────────────────────────────────────────────────

@Injectable({
  providedIn: 'root'
})
export class QuoterService {

  /** Base URL de la API NestJS. Ajustar en producción. */
  private readonly apiBase = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  /**
   * Obtiene las unidades del proyecto agrupadas por dormitorios y tipología.
   * GET /api/units?projectId={projectId}
   */
  getUnits(projectId: number): Observable<GroupedUnits> {
    return this.http.get<GroupedUnits>(`${this.apiBase}/units`, {
      params: { projectId: projectId.toString() }
    });
  }

  /**
   * Envía la cotización al CRM vía NestJS.
   * POST /api/quotation/submit
   */
  submitQuotation(payload: QuotationPayload): Observable<QuotationResponse> {
    return this.http.post<QuotationResponse>(
      `${this.apiBase}/quotation/submit`,
      payload
    );
  }
}
