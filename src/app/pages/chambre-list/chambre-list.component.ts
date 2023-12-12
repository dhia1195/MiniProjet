import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';
import { ChambreService } from 'src/app/services/chambre.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.css']
})
export class ChambreListComponent {
  chambres : any;
  blocs : Observable<Bloc[]>;
  blocList: any;
  searchTerm: string = "";

  get filteredChambres() {
    if (this.chambres)
      return this.chambres.filter((ch) => {
        const searchData =
          `${ch.idChambre} ${ch.numChambre} ${ch.type}`.toLowerCase();
        return searchData.includes(this.searchTerm.toLowerCase());
      });
    return [];
  }
  constructor(
    private chambreService:ChambreService,
    private blocService:BlocService,
    private router:Router
    ){}

  ngOnInit(): void {
    this.chambreService.getAllChambres().subscribe((data) => {
      this.chambres=data;
    })
    this.blocService.getAllBlocs().subscribe((data) => {
      this.blocList=data
    });

    console.log(this.chambres);
    
  }

  deletechambre(chambre : any){
    this.chambreService.deleteChambre(chambre).subscribe((data) => {
      this.chambres=data;
    })
  }

  onOptionSelectionChange(event, ch) {
    const idSelectedbloc = event.target.value;
    console.log(idSelectedbloc);
  
    //this.blocList = this.blocList.filter(bloc => bloc.idBloc != idSelectedbloc);
  
    this.chambreService
      .affecterBlocAChambre(idSelectedbloc, ch.numChambre)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
