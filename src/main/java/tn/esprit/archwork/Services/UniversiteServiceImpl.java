package tn.esprit.archwork.Services;

import jakarta.persistence.EntityManager;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.FoyerRepo;
import tn.esprit.archwork.Respositories.UniversiteRepo;
import tn.esprit.archwork.entities.Foyer;
import tn.esprit.archwork.entities.Universite;

import java.util.List;

@Service
@AllArgsConstructor
public class UniversiteServiceImpl implements IUniversiteService{
    UniversiteRepo universiteRepo;
    FoyerRepo foyerRepo;


    @Override
    public List<Universite> retrieveAllUniversites() {
        return universiteRepo.findAll();
    }

    @Override
    public Universite addUniversite(Universite b) {
        return universiteRepo.save(b);
    }

    @Override
    public Universite getUniversityById(long id) {
        return universiteRepo.findById(id).orElse(null);
    }

    @Override
    public Universite updateUniversite(Universite b) {
        return universiteRepo.save(b);
    }

    @Override
    public Universite retrieveUniversite(long idUniversite) {
        return universiteRepo.findById(idUniversite).orElse(null);
    }

    @Override
    public List<Universite> delete(Universite universite) {
        universiteRepo.delete(universite);
        return universiteRepo.findAll();
    }

   /* @Override
    public Universite affecterFoyerAUniversite(long idFoyer, String NomUniv)
    {

        Foyer foyer =foyerRepo.findById(idFoyer).orElse(null);
        Universite universite=universiteRepo.findUniversiteByNomUniv(NomUniv);
        universite.setFoyer(foyer);
        //universiteRepo.save(universite)
        return null;
    }*/

    @Override
    public Universite affecterFoyerAUniversite(long idFoyer, String nomUniversite) {
        // Find the target foyer by its ID
        Foyer foyer = foyerRepo.findById(idFoyer).orElse(null);

        if (foyer != null) {
            // Find the target universite by its name
            Universite universite = universiteRepo.findUniversiteByNomUniv(nomUniversite);

            if (universite != null) {
                // Assign the foyer to the universite
                universite.setFoyer(foyer);
                return universiteRepo.save(universite);
            }
        }

        return null; // Handle cases where the foyer or universite is not found
    }

    @Override
    public Universite desaffecterFoyerAUniversite(long idFoyer, long idUniversite) {
        // Find the target foyer by its ID
        Foyer foyer = foyerRepo.findById(idFoyer).orElse(null);

        if (foyer != null) {
            // Find the target universite by its ID
            Universite universite = universiteRepo.findById(idUniversite).orElse(null);

            if (universite != null) {
                // Disassociate the foyer from the universite
                universite.setFoyer(null);
                return universiteRepo.save(universite);
            }
        }

        return null;
    }
}
