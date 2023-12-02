package tn.esprit.archwork.RestController;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;
import tn.esprit.archwork.Services.IEtudiantService;
import tn.esprit.archwork.entities.Etudiant;

import java.util.List;
@RestController
@AllArgsConstructor
@RequestMapping("/etudiant")
public class EtudiantRestController {
    IEtudiantService iEtudiantService;
    @GetMapping("/affichertout")
    List<Etudiant> retrieveAllEtudiants(){
        return iEtudiantService.retrieveAllEtudiants();
    }
    @PostMapping("/ajouteretudiants")
    List<Etudiant> addEtudiants(@RequestBody List<Etudiant> etudiants) {
        return iEtudiantService.addEtudiants(etudiants);
    }
    @PutMapping("/upadteetudiant")
    Etudiant updateChambre (@RequestBody Etudiant  e){
        return iEtudiantService.updateEtudiant(e);
    }
    @GetMapping("/afficheretudiant/{idetudiant}")
    Etudiant retrieveEtudiant (@PathVariable("idetudiant") long idEtudiant){
        return iEtudiantService.retrieveEtudiant(idEtudiant);
    }
    @DeleteMapping("/removeetudiant/{idetudiant}")
    public void removeEtudiant(@PathVariable("idetudiant") long idEtudiant) {
        iEtudiantService.removeEtudiant(idEtudiant);
    }


}
