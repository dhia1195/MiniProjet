package tn.esprit.archwork.Services.user;


import java.util.List;
import tn.esprit.archwork.entities.Etudiant;
public interface IEtudiantService {

    public Etudiant getEtudiantByEmail(String email);

    List<Etudiant> retrieveAllEtudiant();

    Etudiant addEtudiant (Etudiant e);

    Etudiant updateEtudiant (Etudiant e);

    Etudiant retrieveEtudiant (Long idEtudiant);
    void removeEtudiant(Long idEtudiant);
}
