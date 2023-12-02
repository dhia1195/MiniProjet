package tn.esprit.archwork.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.EtudiantRepo;
import tn.esprit.archwork.entities.Etudiant;

import java.util.List;
@Service
@AllArgsConstructor
public class EtudiantServiceImpl implements IEtudiantService {
    EtudiantRepo etudiantRepo;
    @Override
    public List<Etudiant> retrieveAllEtudiants() {
            return etudiantRepo.findAll();
    }

    @Override
    public List<Etudiant> addEtudiants(List<Etudiant> etudiants) {
        return etudiantRepo.saveAll(etudiants) ;  }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepo.save(e) ;
    }

    @Override
    public Etudiant retrieveEtudiant(long idEtudiant) {
        return etudiantRepo.findById(idEtudiant).orElse( null);  //or .get pour forcer
    }

    @Override
    public void removeEtudiant(long idEtudiant) {
        etudiantRepo.deleteById(idEtudiant);
    }

    public Etudiant getEtudiantByEmail(String email){
        return this.etudiantRepo.findEtudiantByUser_Email(email);
    }
}
