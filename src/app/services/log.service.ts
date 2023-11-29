import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  private logs: string[] = [];

  logDeletion(userId: string, universityId: string) {
    const timestamp = new Date().toLocaleString();
    const logMessage = `Suppression d'université le ${timestamp} par l'utilisateur ${userId}. Université supprimée : ${universityId}`;
    console.log(logMessage);
    this.logs.push(logMessage);
    // Vous pouvez également envoyer ces informations au serveur pour une journalisation côté serveur.
  }

  logUpdate(userId: string, universityId: string) {
    const timestamp = new Date().toLocaleString();
    const logMessage = `Mise à jour d'université le ${timestamp} par l'utilisateur ${userId}. Université mise à jour : ${universityId}`;
    console.log(logMessage);
    this.logs.push(logMessage);
    // Vous pouvez également envoyer ces informations au serveur pour une journalisation côté serveur.
  }

  getLogs(): string[] {
    return this.logs;
  }
}
