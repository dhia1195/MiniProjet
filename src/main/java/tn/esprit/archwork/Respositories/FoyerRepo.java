package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.Foyer;

public interface FoyerRepo extends JpaRepository<Foyer,Long> {
    Foyer findFoyerByNomFoyer(String nomFoyer);
}
