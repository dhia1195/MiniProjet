package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.*;

import java.util.List;

public interface ChambreRepo extends JpaRepository<Chambre,Long> {

    List<Chambre> findChambresByBloc_NomBloc(String nom);

  //  Chambre findByNumChambre(String numChambre);

    long countByTypeAndBloc(TypeChambre type, Bloc bloc);

    Chambre findByReservationsContains(Reservation reservation);

   // List<Chambre> findChambresNonReserveByTypeAndFoyer(TypeChambre type, Foyer foyer);

    // List<Chambre> findNonReservedRoomsByFoyerAndType(Foyer foyer, TypeChambre type);
}
