import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Foyer } from '../models/foyer';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = environment.aUrl;
  constructor(private _http: HttpClient) {}

  addFoyer(foyer: any): Observable<any> {
    return this._http.post(`${this.apiUrl}/foyers`, foyer);
  }

  getAllFoyers(): Observable<any[]> {
    return this._http.get<any[]>(`${this.apiUrl}/afficherfoyers`);
  }

  addfoyer(foyer: any): Observable<any> {
    return this._http.post<any>(`${this.apiUrl}/ajouterfoyer`, foyer);
  }

  updatefoyer(foyer: any): Observable<any> {
    return this._http.put<any>(`${this.apiUrl}/modifierfoyer`, foyer);
  }

  getfoyerById(idfoyer: number): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}/afficherfoyer/${idfoyer}`);
  }

  removefoyer(idfoyer: number): Observable<void> {
    return this._http.delete<void>(`${this.apiUrl}/removefoyer/${idfoyer}`);
  }
  findFoyersByBlocsIsNull():Observable<any[]>{
    return this._http.get<any[]>("http://localhost:8081/foyer/findFoyersByBlocsIsNull");
  }
}
  

