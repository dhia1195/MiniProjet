package tn.esprit.archwork.Respositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import tn.esprit.archwork.entities.Bloc;




@Repository
public interface BlocRepo extends JpaRepository<Bloc, Long> {
   Bloc findBlocByNomBloc(String nomBloc);
   Bloc findBlocByIdBloc(long idBloc);

}