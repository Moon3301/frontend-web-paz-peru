import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface ContactPayload {
  project:       string;
  dni:           string;
  nombre:        string;
  apellido:      string;
  email:         string;
  telefono:      string;
  horario:       string;
  comentario?:   string;
  acceptTerms:   boolean;
  acceptPrivacy: boolean;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly apiBase = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {}

  send(payload: ContactPayload): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${this.apiBase}/contact/send`, payload);
  }
}
