import { Local } from "protractor/built/driverProviders";
import { Etudiant } from "./etudiant";
import { Chambre } from "./chambre";
export class Reservation {
    idReservation:string;
    anneUniversitaire:string;
    estValide:Boolean ;
    statu : string;
    etudiant!:Etudiant;
    chambre!: Chambre;
    //etudiants: Etudiant[]; 
  
   // reservations: any[]; // Assurez-vous de définir correctement la structure des réservations
  }
  