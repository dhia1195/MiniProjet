package tn.esprit.archwork.RestController;

import lombok.AllArgsConstructor;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import tn.esprit.archwork.Services.IReservationService;
import tn.esprit.archwork.entities.Reservation;
import tn.esprit.archwork.entities.Universite;

import java.util.Date;
import java.util.List;

@RestController
@AllArgsConstructor
@RequestMapping("/reservation")
public class ReservationRestController {
    IReservationService iReservationService;
    @GetMapping("/afficherreservation")
    List<Reservation> retrieveAllUniversites(){
        return iReservationService.retrieveAllReservation();
    }

    @PutMapping("/modifierreservation")
    Reservation updateReservation (@RequestBody Reservation c){return iReservationService.updateReservation(c);}
    @GetMapping("/afficherreservation/{idRes}")
    Reservation retrieveReservation(@PathVariable("idRes") String idRes){return iReservationService.retrieveReservation(idRes);}
    @PostMapping("/ajouterreservation/{idChambre}/{cinEtudiant}")
    public ResponseEntity<?> ajouterReservation(
            @RequestBody Reservation reservation,
            @PathVariable("idChambre") long idChambre,
            @PathVariable("cinEtudiant") long cinEtudiant) {
        try {
            // Log the values for debugging
            System.out.println("idChambre: " + idChambre);
            System.out.println("cinEtudiant: " + cinEtudiant);

            Reservation addedReservation = iReservationService.ajouterReservation(reservation, idChambre, cinEtudiant);
            return ResponseEntity.ok(addedReservation);
        } catch (RuntimeException e) {
            // Log the exception for further analysis
            e.printStackTrace();
            // Return a meaningful error response to the client
            return ResponseEntity.status(400).body("Bad Request: " + e.getMessage());
        } catch (Exception e) {
            // Log the exception for further analysis
            e.printStackTrace();
            // Return a meaningful error response to the client
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }


    @PostMapping("/annulerreservation/{cinEtudiant}")
    public ResponseEntity<?> annulerReservation(@PathVariable("cinEtudiant") long cinEtudiant) {
        try {
            // Log the value for debugging
            System.out.println("cinEtudiant: " + cinEtudiant);

            Reservation canceledReservation = iReservationService.annulerReservation(cinEtudiant);
            return ResponseEntity.ok(canceledReservation);
        } catch (RuntimeException e) {
            // Log the exception for further analysis
            e.printStackTrace();
            // Return a meaningful error response to the client
            return ResponseEntity.status(400).body("Bad Request: " + e.getMessage());
        } catch (Exception e) {
            // Log the exception for further analysis
            e.printStackTrace();
            // Return a meaningful error response to the client
            return ResponseEntity.status(500).body("Internal Server Error: " + e.getMessage());
        }
    }


}
