package tn.esprit.archwork.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.Date;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Etudiant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idEtudiant;
    String nomEt;
    String prenomEt;
    long cin;
    String ecole;
    @Temporal(TemporalType.DATE)
    LocalDate dateNaissance;
    @ManyToMany
    Set<Reservation> reservations;

    @OneToOne
    User user;


}
