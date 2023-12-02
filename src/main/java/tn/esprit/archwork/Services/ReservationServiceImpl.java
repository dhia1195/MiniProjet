package tn.esprit.archwork.Services;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import tn.esprit.archwork.Respositories.ChambreRepo;
import tn.esprit.archwork.Respositories.EtudiantRepo;
import tn.esprit.archwork.Respositories.ReservationRepo;
import tn.esprit.archwork.Respositories.UniversiteRepo;
import tn.esprit.archwork.entities.Chambre;
import tn.esprit.archwork.entities.Etudiant;
import tn.esprit.archwork.entities.Reservation;
import tn.esprit.archwork.entities.Universite;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class ReservationServiceImpl implements IReservationService {
    private ReservationRepo reservationRepository; // Assuming you have a ReservationRepository
    private ChambreRepo chambreRepository;
    private EtudiantRepo etudiantRepository;
    private UniversiteRepo universiteRepo;

    @Override
    public List<Reservation> getReservationParAnneeUniversitaire(Date debutAnnee, Date finAnnee) {
        return null;
    }

    @Override
    public List<Reservation> retrieveAllReservation() {
        return reservationRepository.findAll();
    }

    @Override
    public Reservation updateReservation(Reservation res) {
        return reservationRepository.save(res);
    }

    @Override
    public Reservation retrieveReservation(String idRes) {
        return reservationRepository.findById(idRes).orElse(null);
    }

    @Override
    public Reservation ajouterReservation(Reservation reservation, long idChambre, long cinEtudiant) {
        // Retrieve Chambre and Etudiant entities
        Chambre chambre = chambreRepository.findById(idChambre).orElse(null);
        Etudiant etudiant = etudiantRepository.findById(cinEtudiant).orElse(null);

        // Check if Chambre and Etudiant exist
        if (chambre != null && etudiant != null) {
            // Check if the capacity of the chambre is not reached
            if (isChambreCapacityAvailable(chambre)) {
                // Construct numReservation using the specified format
                String numReservation = chambre.getNumChambre() + "-" + chambre.getBloc().getNomBloc() + "-" + etudiant.getCin();

                // Set numReservation, estValide, and etudiants in the Reservation object
                reservation.setIdRes(numReservation);
                reservation.setEstValide(true);
                reservation.getEtudiants().add(etudiant);

                // Save the Reservation object
                reservationRepository.save(reservation);

                // You might also want to update the Chambre entity to reflect the reservation
                chambre.getReservations().add(reservation);
                chambreRepository.save(chambre);

                return reservation;
            } else {
                // Handle the case where the capacity is reached
                throw new RuntimeException("Chambre capacity reached, cannot add reservation.");
            }
        } else {
            // Handle the case where Chambre or Etudiant is not found
            throw new RuntimeException("Chambre or Etudiant not found.");
        }
    }

    // Helper method to check if the capacity of the Chambre is available
    private boolean isChambreCapacityAvailable(Chambre chambre) {
        int currentCapacity = chambre.getReservations().size();
        int maxCapacity;

        switch (chambre.getType()) {
            case SIMPLE:
                maxCapacity = 5; // Replace with the actual max capacity for SIMPLE rooms
                break;
            case DOUBLE:
                maxCapacity = 3; // Replace with the actual max capacity for DOUBLE rooms
                break;
            case TRIPLE:
                maxCapacity = 2; // Replace with the actual max capacity for TRIPLE rooms
                break;
            default:
                throw new IllegalArgumentException("Unsupported chambre type: " + chambre.getType());
        }

        return currentCapacity < maxCapacity;
    }



    // Helper method to find the chambre associated with a reservation
    private Chambre findChambreByReservation(Reservation reservation) {
        return chambreRepository.findByReservationsContains(reservation);
    }

    // Helper method to update the chambre capacity after canceling a reservation
    private void updateChambreCapacity(Chambre chambre) {
        // Get the maximum capacity based on the chambre type
        int maxCapacity;

        switch (chambre.getType()) {
            case SIMPLE:
                maxCapacity = 5; // Replace with the actual max capacity for SIMPLE rooms
                break;
            case DOUBLE:
                maxCapacity = 3; // Replace with the actual max capacity for DOUBLE rooms
                break;
            case TRIPLE:
                maxCapacity = 2; // Replace with the actual max capacity for TRIPLE rooms
                break;
            default:
                throw new IllegalArgumentException("Unsupported chambre type: " + chambre.getType());
        }

        // Check if the current capacity is less than the maximum capacity
        if (chambre.getReservations().size() < maxCapacity) {
            // You may want to update or log the new capacity
            System.out.println("Chambre capacity updated.");

            // Save the updated chambre (if needed)
            chambreRepository.save(chambre);
        } else {
            // Handle the case where the capacity is already at the maximum
            throw new RuntimeException("Chambre capacity already at the maximum.");
        }
    }
    @Override
    public Reservation annulerReservation(long cin) {
        try {
            // Step 1: Retrieve the Etudiant entity by its Cin
            Etudiant etudiant = etudiantRepository.findByCin(cin);

            if (etudiant != null) {
                // Log the student details for debugging
                System.out.println("Found student: " + etudiant.getNomEt() + " " + etudiant.getPrenomEt());

                // Step 2: Retrieve the Reservation associated with the student
                Optional<Reservation> optionalReservation = reservationRepository.findByEtudiantsContains(etudiant);

                if (optionalReservation.isPresent()) {
                    Reservation reservation = optionalReservation.get();

                    // Log the reservation details for debugging
                    System.out.println("Found reservation: " + reservation.getIdRes());

                    // Step 3: Update the Reservation state to false
                    reservation.setEstValide(false);

                    // Step 4: Remove the student from the Reservation
                    reservation.getEtudiants().remove(etudiant);

                    // Step 5: Remove the Reservation from the student
                    etudiant.getReservations().remove(reservation);

                    // Step 6: Remove the Reservation from the associated chambre
                    Chambre chambre = findChambreByReservation(reservation);
                    if (chambre != null) {
                        chambre.getReservations().remove(reservation);
                        chambreRepository.save(chambre);

                        // Step 7: Update the chambre capacity
                        updateChambreCapacity(chambre);
                    }

                    // Step 8: Save the updated entities
                    reservationRepository.save(reservation);
                    etudiantRepository.save(etudiant);

                    return reservation;
                } else {
                    throw new RuntimeException("No reservation found for the student with Cin: " + cin);
                }
            } else {
                throw new RuntimeException("Student not found with Cin: " + cin);
            }
        } catch (Exception e) {
            // Log any exceptions for further analysis
            e.printStackTrace();
            throw e;
        }
    }

    @Override
    public List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(Date anneeUniversite, String nomUniversite) {
        return null;
    }

/*@Override
    public List<Reservation> getReservationParAnneeUniversitaireEtNomUniversite(Date anneeUniversite, String nomUniversite) {
    }*/
}

