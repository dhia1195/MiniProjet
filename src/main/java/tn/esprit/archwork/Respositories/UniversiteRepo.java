package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.Universite;

public interface UniversiteRepo extends JpaRepository<Universite,Long> {
    Universite findUniversiteByNomUniv(String nomUniversite);

}
