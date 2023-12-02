package tn.esprit.archwork.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Universite {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idUniv;

    String nomUniv;
    String adresse;

    @OneToOne
   // @JoinColumn(name = "idFoyer") // Define the foreign key column in the Universite table
    private Foyer foyer; // Reference to the associated foyer


}
