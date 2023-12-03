package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.Foyer;

import java.util.List;

public interface FoyerRepo extends JpaRepository<Foyer,Long> {
    Foyer findFoyerByNomFoyer(String nomFoyer);

    List<Foyer> findFoyersByUniversiteIsNull();
}
