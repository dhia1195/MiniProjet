import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservation } from 'src/app/models/reservation';
import { environment } from 'src/environments/environment';
import { Chambre } from '../models/chambre';
import { Etudiant} from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private api = environment.apiUrl;

  constructor(private http: HttpClient) {
    console.log('ReservationService constructor called');
  }
//afficher 
  getReservations() {
    return this.http.get<Reservation[]>(`${this.api}/reservation/getAll`);
  }
//ajouter reservation by annee
ajouterReservation(roomNumber:number,userId:number): Observable<any> {
  return this.http.post(`${this.api}/reservation/add/${roomNumber}/${userId}`, null);
}
//supprimer
  deleteReservation(id: string): Observable<any> {
    return this.http.delete(`${this.api}/reservation/delete/${id}`, { responseType: 'text' });
  }

//modifier 
  updateReservation(body:Reservation){
    return this.http.put(`${this.api}/reservation/update`, body,{ responseType: 'text' });
  }

//afficherbyid
  getReservationByid(id:number){
    return this.http.get<Reservation>(`${this.api}/reservation/getById/${id}`);
  }

  getChambres(){
    return this.http.get<Chambre[]>(`${this.api}/chambre/affichertout`);
  }
  getEtudiant(){
    return this.http.get<Etudiant[]>(`${this.api}/etudiant/affichertout`);
  }
  
}
