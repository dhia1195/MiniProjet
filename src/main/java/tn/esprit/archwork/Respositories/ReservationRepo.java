package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.Etudiant;
import tn.esprit.archwork.entities.Reservation;
import tn.esprit.archwork.entities.Universite;

import java.util.Date;
import java.util.List;
import java.util.Optional;

public interface ReservationRepo extends JpaRepository<Reservation,String> {
    Optional<Reservation> findByEtudiantsContains(Etudiant etudiant);


    //List<Reservation> findByAnneeAndUniversite_NomUniv(Date anneeUniversite, String nomUniversite);
}
