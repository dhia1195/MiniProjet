package tn.esprit.archwork.Services;

import tn.esprit.archwork.entities.Reservation;

import java.util.Date;
import java.util.List;

public interface IReservationService {
    List<Reservation> getReservationParAnneeUniversitaire(Date debutAnnee, Date finAnnee);
    List<Reservation> retrieveAllReservation();

    Reservation updateReservation (Reservation  res);

    Reservation retrieveReservation (String idReservation);

    public Reservation ajouterReservation (Reservation reservation,long idChambre, long cinEtudiant) ;

    public Reservation annulerReservation (long cinEtudiant) ;
    List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(Date anneeUniversite, String nomUniversite);


}
