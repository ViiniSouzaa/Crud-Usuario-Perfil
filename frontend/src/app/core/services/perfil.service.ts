import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Perfil } from '../models/perfil.model';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {
   private baseUrl = 'http://localhost:8080/api/perfis';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Perfil[]> {
    return this.http.get<Perfil[]>(this.baseUrl);
  }

  getById(id: number): Observable<Perfil> {
    return this.http.get<Perfil>(`${this.baseUrl}/${id}`);
  }

  create(usuario: Perfil): Observable<Perfil> {
    return this.http.post<Perfil>(this.baseUrl, usuario);
  }

  update(id: number, usuario: Perfil): Observable<Perfil> {
    return this.http.put<Perfil>(`${this.baseUrl}/${id}`, usuario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
