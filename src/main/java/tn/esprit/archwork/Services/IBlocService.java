package tn.esprit.archwork.Services;

import tn.esprit.archwork.entities.Bloc;

import java.util.List;

public interface IBlocService {
    List<Bloc> retrieveBlocs();

    Bloc updateBloc (Bloc  bloc);

    Bloc addBloc (Bloc bloc);

    Bloc retrieveBloc (long  idBloc);

    void removeBloc (long idBloc);



    Bloc affecterChambresABloc(List<Long> numChambres, long idBloc);

    Bloc affecterBlocAFoyer(String nomBloc, String nomFoyer);
}
