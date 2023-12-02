package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import tn.esprit.archwork.entities.Etudiant;

import java.util.Optional;

public interface EtudiantRepo extends JpaRepository<Etudiant,Long> {
    Etudiant findByCin(long cin);
    Etudiant findEtudiantByUser_Email(String email);
}
