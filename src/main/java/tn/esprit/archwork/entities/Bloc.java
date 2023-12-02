package tn.esprit.archwork.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Bloc {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idBloc;
    String nomBloc;
    Long CapaciteBloc;

    @ManyToOne
    private Foyer foyer;
    //@OneToMany(mappedBy = "bloc" ,fetch = FetchType.Lazy,cascade =  CascadeType.ALL)
    @OneToMany(cascade = CascadeType.ALL,mappedBy = "bloc")
    private List<Chambre> chambres;


}
