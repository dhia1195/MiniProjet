package tn.esprit.archwork.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationEtudiant {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idREt;

    Date dateRes;

    @ManyToOne
    @JoinColumn(name = "idEtudiant")
    private Etudiant etudiant;

    @ManyToOne
    @JoinColumn(name = "idRes")
    private Reservation reservation;

}
