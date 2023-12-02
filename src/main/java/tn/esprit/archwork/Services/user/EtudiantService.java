package tn.esprit.archwork.Services.user;


import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.EtudiantRepo;
import tn.esprit.archwork.entities.Etudiant;

import java.util.List;

@Service
@Slf4j
@AllArgsConstructor
@NoArgsConstructor
public class EtudiantService implements IEtudiantService{

    @Autowired
    EtudiantRepo etudiantRepository;

    @Override
    public Etudiant getEtudiantByEmail(String email){
        return this.etudiantRepository.findEtudiantByUser_Email(email);
    }
    @Override
    public List<Etudiant> retrieveAllEtudiant() {
        return etudiantRepository.findAll();
    }

    @Override
    public Etudiant addEtudiant(Etudiant e) {
        return etudiantRepository.save(e);

    }

    @Override
    public Etudiant updateEtudiant(Etudiant e) {
        return etudiantRepository.save(e);
    }

    @Override
    public Etudiant retrieveEtudiant(Long idEtudiant) {
        return etudiantRepository.findById(idEtudiant).orElse(null);
    }

    @Override
    public void removeEtudiant(Long idEtudiant) {
        etudiantRepository.deleteById(idEtudiant);
    }
}
