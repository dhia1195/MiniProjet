// src/app/services/foyer.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoyerService {
  private twilioApiUrl = 'https://api.twilio.com/2010-04-01/Accounts/AC904083d7f5d44d1c6092cbaa73c672d0/Messages.json'; // Remplacez avec l'URL de votre serveur

  constructor(private http: HttpClient) {}

  sendSMS(nomDuFoyer: string): Observable<any> {
    const body = {
      to: '+21623099545',  // Remplacez avec le numéro de téléphone souhaité
      body: `Un nouveau foyer a été ajouté : ${nomDuFoyer}`
    };

    return this.http.post(`${this.twilioApiUrl}/send-sms`, body);
  }
}
