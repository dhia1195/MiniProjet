import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Foyer } from '../models/foyer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private apiUrl = environment.apiUrl;
  private twilioApiUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC904083d7f5d44d1c6092cbaa73c672d0/Messages.json';

  constructor(private http: HttpClient) {}

  sendSMS(nomFoyer: string): Observable<any> {
    const apiKey = 'AC904083d7f5d44d1c6092cbaa73c672d0';
    const apiSecret = '8d59c06f4578212c48d1ae0151c5e71c';
    const from = '+17077229037';
    const to = '+21623099545';

    const body = {
      api_key: apiKey,
      api_secret: apiSecret,
      from,
      to,
      text: `Un nouveau foyer a été ajouté : ${nomFoyer}`
    };

    return this.http.post(this.twilioApiUrl, body);
  }

  affecterFoyer(foyer: Foyer, idUniversite: number): Observable<Foyer> {
    const url = `${this.apiUrl}/ajouterfoyeretaffecterauniversite/${idUniversite}`;
    return this.http.post<Foyer>(url, foyer);
  }

  addFoyer(foyer: Foyer): Observable<any> {
    return this.http.post(`${this.apiUrl}/foyers`, foyer);
  }

  getAllFoyers(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.apiUrl}/afficherfoyers`);
  }

  addfoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.apiUrl}/ajouterfoyer`, foyer);
  }

  updatefoyer(foyer: Foyer): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.apiUrl}/modifierfoyer`, foyer);
  }

  getfoyerById(idfoyer: number): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.apiUrl}/afficherfoyer/${idfoyer}`);
  }

  removefoyer(idfoyer: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/removefoyer/${idfoyer}`);
  }
}
