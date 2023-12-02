package tn.esprit.archwork.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
//@EqualsAndHashCode
public class Chambre {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idChambre;
    long numChambre;
    @Enumerated(EnumType.STRING)
    TypeChambre type;
    @OneToMany  //sans parametre 5tr chambre invisible
    Set<Reservation> reservations;

    @ManyToOne(cascade = CascadeType.PERSIST,fetch= FetchType.LAZY)
    private Bloc bloc;


}
