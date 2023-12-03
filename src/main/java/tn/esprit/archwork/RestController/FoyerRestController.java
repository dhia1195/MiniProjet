package tn.esprit.archwork.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.archwork.Services.IFoyerService;
import tn.esprit.archwork.entities.Etudiant;
import tn.esprit.archwork.entities.Foyer;

import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/foyer")
public class FoyerRestController {
    IFoyerService iFoyerService;

    @GetMapping("/afficherfoyers")
    List<Foyer> retrieveAllEtudiants() {
        return iFoyerService.retrieveAllFoyers();
    }

    @PostMapping("/ajouterfoyer")
    Foyer addFoyer(@RequestBody Foyer c) {
        return iFoyerService.addFoyer(c);
    }

    @PutMapping("/modifierfoyer")
    Foyer updateFoyer(@RequestBody Foyer c) {
        return iFoyerService.updateFoyer(c);
    }

    @GetMapping("/afficherfoyer/{idfoyer}")
    Foyer retrieveFoyer(@PathVariable("idfoyer") long idFoyer) {
        return iFoyerService.retrieveFoyer(idFoyer);
    }

    @PostMapping("/ajouterfoyeretaffecterauniversite/{idUniversite}")
    Foyer ajouterFoyerEtAffecterAUniversite(@RequestBody Foyer foyer, @PathVariable("idUniversite") long idUniversite) {
        return iFoyerService.ajouterFoyerEtAffecterAUniversite(foyer, idUniversite);
    }

    @GetMapping("/findFoyersByUniversiteIsNull")
    List<Foyer> findFoyersByUniversiteIsEmpty() {
        return iFoyerService.findFoyersByUniversiteIsNull();
    }

}
