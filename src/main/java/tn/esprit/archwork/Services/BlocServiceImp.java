package tn.esprit.archwork.Services;

import lombok.AllArgsConstructor;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.BlocRepo;
import tn.esprit.archwork.Respositories.ChambreRepo;
import tn.esprit.archwork.Respositories.FoyerRepo;
import tn.esprit.archwork.entities.Bloc;
import tn.esprit.archwork.entities.Chambre;
import tn.esprit.archwork.entities.Foyer;

import java.util.List;
@Scope()
@Service
@AllArgsConstructor
public class BlocServiceImp implements IBlocService {
    BlocRepo blocRepo;
    ChambreRepo chambreRepo;
    FoyerRepo foyerRepo;
    @Override
    public List<Bloc> retrieveBlocs() {
        return blocRepo.findAll();
    }

    @Override
    public Bloc updateBloc(Bloc bloc) {
        return blocRepo.save(bloc);
    }

    @Override
    public Bloc addBloc(Bloc bloc) {
        return blocRepo.save(bloc);
    }

    @Override
    public Bloc retrieveBloc(long idBloc) {
        return blocRepo.findById(idBloc).orElse( null);  //or .get pour forcer
    }

    @Override
    public void removeBloc(long idBloc) {
        blocRepo.deleteById(idBloc);


    }

  /*  @Override
    public Bloc affecterChambresABloc(List<Long> numChambre, String nomBloc) {
        Bloc bloc = blocRepo.findBlocByBlocNomBloc(nomBloc);
        Chambre chambre;
//List < Chambre> chambres = null ;
        for (long num:numChambre) {
            chambre = chambreRepo.findChambresByNumeroChambre(numChambre);
            chambre.setBloc(bloc);
            //chambres.add(chambre);
            chambreRepo.save(chambre);

        }
        return blocRepo.save(bloc);
    }*/
  @Override
  public Bloc affecterChambresABloc(List<Long> numChambres,  long idBloc) {
      // Find the target block by name
      Bloc bloc = blocRepo.findBlocByIdBloc(idBloc);

      if (bloc != null) {
          // Retrieve the rooms based on their IDs
          List<Chambre> chambres = chambreRepo.findAllById(numChambres);

          // Assign the rooms to the block
          chambres.forEach(chambre -> chambre.setBloc(bloc));
          chambreRepo.saveAll(chambres);

          return bloc;
      }

      return null; // Handle the case when the block is not found
  }

    @Override
    public Bloc affecterBlocAFoyer(String nomBloc, String nomFoyer) {
        // Find the target block by name
        Bloc bloc = blocRepo.findBlocByNomBloc(nomBloc);

        if (bloc != null) {
            // Find the target foyer by name
            Foyer foyer = foyerRepo.findFoyerByNomFoyer(nomFoyer);

            if (foyer != null) {
                // Assign the block to the foyer
                bloc.setFoyer(foyer);
                return blocRepo.save(bloc);
            }
        }

        return null; // Handle cases where the block or foyer is not found
    }



}
