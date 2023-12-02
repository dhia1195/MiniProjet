package tn.esprit.archwork.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Reservation {
    @Id
    private String idRes;
    @Temporal(TemporalType.DATE)
    Date annee;
    Boolean estValide;


    @ManyToMany(mappedBy = "reservations")
    Set<Etudiant> etudiants;


}
