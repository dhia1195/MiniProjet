package tn.esprit.archwork.Services;

import tn.esprit.archwork.entities.Bloc;
import tn.esprit.archwork.entities.Chambre;
import tn.esprit.archwork.entities.TypeChambre;

import java.util.List;

public interface IChambreService {

    List<Chambre> retrieveAllChambres();

    Chambre  addChambre(Chambre c); // ajouter l’équipe avec son détail

    Chambre updateChambre (Chambre  c);

    Chambre retrieveChambre (long idChambre);


    List<Chambre> getChambrebyByNomBloc(String nom);

    long nbChambreParTypeEtBloc(TypeChambre type, long idBloc);

    public List<Chambre>  getChambresParNomUniversite( String nomUniversite) ;
    public List<Chambre>  getChambresNonReserveParNomUniversiteEtTypeChambre( String nomUniversite,TypeChambre type) ;


}
