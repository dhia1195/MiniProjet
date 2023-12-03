package tn.esprit.archwork.Services;

import tn.esprit.archwork.entities.Bloc;
import tn.esprit.archwork.entities.Foyer;

import java.util.List;

public interface IFoyerService {
    List<Foyer> retrieveAllFoyers();

    Foyer addFoyer (Foyer f);

    Foyer updateFoyer (Foyer f);

    Foyer retrieveFoyer (long  idFoyer);

    void removeFoyer (long idFoyer);
    public Foyer ajouterFoyerEtAffecterAUniversite (Foyer foyer, long idUniversite) ;

    List<Foyer> findFoyersByUniversiteIsNull();



}
