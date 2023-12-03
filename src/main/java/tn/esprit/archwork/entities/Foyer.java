package tn.esprit.archwork.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Foyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idFoyer;
    String nomFoyer;
    long capacite;
    //@OneToMany(mappedBy = "foyer")
    // private List<Bloc> blocs;
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "foyer")
    Set<Bloc> blocs;
    @JsonIgnore
    @OneToOne(mappedBy = "foyer")
    Universite universite;


}
