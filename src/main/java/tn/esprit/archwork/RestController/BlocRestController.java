package tn.esprit.archwork.RestController;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.archwork.Services.IBlocService;
import tn.esprit.archwork.entities.Bloc;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping("/bloc")
public class BlocRestController {
    IBlocService iBlocService;


    @GetMapping("/AllBlocs")
    public List<Bloc> retrieveBlocs() {
        return iBlocService.retrieveBlocs();
    }

    @PutMapping("/updateBloc")
    public Bloc updateBloc(@RequestBody Bloc bloc) {
        return iBlocService.updateBloc(bloc);
    }

    @PostMapping("/addBloc")
    public Bloc addBloc(@RequestBody Bloc bloc) {
        return iBlocService.addBloc(bloc);
    }

    @GetMapping("/getBloc")
    public Bloc retrieveBloc(@RequestParam long idBloc) {
        return iBlocService.retrieveBloc(idBloc);
    }

    @DeleteMapping("/removeBloc")
    public void removeBloc(@RequestParam long idBloc) {
        iBlocService.removeBloc(idBloc);
    }
   /* @PostMapping("/affecter-chambres")
    public ResponseEntity<Bloc> affecterChambresABloc(@RequestBody List<Long> numChambre, @RequestParam("nomBloc") String nomBloc) {
        Bloc bloc = iBlocService.affecterChambresABloc(numChambre, nomBloc);

        if (bloc != null) {
            return ResponseEntity.ok(bloc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }*/

    @PostMapping("/affecter-chambres")
    public ResponseEntity<Bloc> affecterChambresABloc(@RequestBody List<Long> numChambre, @RequestParam("idBloc") long idBloc) {
        Bloc bloc = iBlocService.affecterChambresABloc(numChambre, idBloc);

        if (bloc != null) {
            return ResponseEntity.ok(bloc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    @PostMapping("/affecter-foyer")
    public ResponseEntity<Bloc> affecterBlocAFoyer(@RequestParam("nomBloc") String nomBloc, @RequestParam("nomFoyer") String nomFoyer) {
        Bloc bloc = iBlocService.affecterBlocAFoyer(nomBloc, nomFoyer);

        if (bloc != null) {
            return ResponseEntity.ok(bloc);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}
