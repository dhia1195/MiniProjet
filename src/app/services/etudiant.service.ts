// etudiant.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from 'src/app/models/etudiant';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class EtudiantService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('EtudiantService constructor called');
  }

  getAllEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/affichertout`);
  }

  addEtudiants(etudiants: Etudiant[]): Observable<Etudiant[]> {
    return this.http.post<Etudiant[]>(`${this.apiUrl}/ajouteretudiants`, etudiants);
  }
  

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/upadteetudiant`, etudiant);
  }

  getEtudiantById(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/afficheretudiant/${idEtudiant}`);
  }

  removeEtudiant(idEtudiant: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removeetudiant/${idEtudiant}`);
  }
  
}
