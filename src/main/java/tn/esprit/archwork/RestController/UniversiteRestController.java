package tn.esprit.archwork.RestController;

import jakarta.websocket.server.PathParam;
import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.archwork.Services.IUniversiteService;
import tn.esprit.archwork.entities.Universite;

import java.util.List;

@RestController
@AllArgsConstructor
    @RequestMapping("/universite")
public class UniversiteRestController {
    IUniversiteService iUniversiteService;

    @GetMapping("/retrieveUniversityById/{id}")
    Universite retrueveUniversityById(@PathVariable("id") long id){
        return iUniversiteService.getUniversityById(id);
    }
    @GetMapping("/afficheruniversites")
    List<Universite> retrieveAllUniversites(){

        return iUniversiteService.retrieveAllUniversites();
    }
    @PostMapping("/ajouteruniversite")
    Universite addUniversite(@RequestBody Universite c){return iUniversiteService.addUniversite(c);}
    @PutMapping("/modifieruniversite")
    Universite updateUniversite (@RequestBody Universite c){return iUniversiteService.updateUniversite(c);}
    @GetMapping("/afficheruniversite/{iduniversite}")
    Universite retrieveUniversite(@PathVariable("iduniversite") long idUniversite){return iUniversiteService.retrieveUniversite(idUniversite);}

    @PostMapping("/affecter")
    public ResponseEntity<Universite> affecterFoyerAUniversite(@RequestParam("idFoyer") long idFoyer, @RequestParam("nomUniversite") String nomUniversite) {
        Universite universite = iUniversiteService.affecterFoyerAUniversite(idFoyer, nomUniversite);

        if (universite != null) {
            return ResponseEntity.ok(universite);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/desaffecter")
    public ResponseEntity<Universite> desaffecterFoyerAUniversite(@RequestParam("idFoyer") long idFoyer, @RequestParam("idUniversite") long idUniversite) {
        Universite universite = iUniversiteService.desaffecterFoyerAUniversite(idFoyer, idUniversite);

        if (universite != null) {
            return ResponseEntity.ok(universite);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deleteUniversite")
    public List<Universite> deleteUniversity(@RequestBody Universite universite){
        return iUniversiteService.delete(universite);
    }
}
