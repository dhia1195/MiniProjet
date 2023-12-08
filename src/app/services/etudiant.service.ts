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
    return this.http.get<Etudiant[]>(`${this.apiUrl}/etudiant/affichertout`);
  }

  addEtudiants(etudiants: Etudiant[]): Observable<Etudiant[]> {
    return this.http.post<Etudiant[]>(`${this.apiUrl}/etudiant/ajouteretudiants`, etudiants);
  }
  

  updateEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/etudiant/upadteetudiant`, etudiant);
  }

  getEtudiantById(idEtudiant: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/etudiant/afficheretudiant/${idEtudiant}`);
  }

  removeEtudiant(idEtudiant: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/etudiant/removeetudiant/${idEtudiant}`);
  }
  getEtudiantsWithReservations(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/etudiant/with-reservations`);
}
// getEtudiantsWithUniversite(): Observable<Etudiant[]> {
//   return this.http.get<Etudiant[]>(`${this.apiUrl}/with-universite`);
// }

getUniversityNames(): Observable<string[]> {
  return this.http.get<string[]>(`${this.apiUrl}/university-names`);
}
}
