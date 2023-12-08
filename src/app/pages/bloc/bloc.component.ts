import { Component,  Input,Output, OnInit, EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { Foyer } from 'src/app/models/foyer';
import { BlocService } from 'src/app/services/bloc.service';
import { FoyerService } from 'src/app/services/foyer.service';
import { PdfBlocService } from 'src/app/services/pdf-bloc.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent implements OnInit {
  @Input() b: Bloc[] = [];
  blocs : Bloc[] ;
  bloc: Bloc = new Bloc(); 
  showAddForm: boolean = false;
  filterId: number; 
  isFiltered: boolean = false; 
  searchTerm: string = '';
  @Output() blocRemoved: EventEmitter<number> = new EventEmitter<number>();
  show:boolean=true;
  buttonStates: { [key: number]: boolean } = {};
  foyerList: any ; 
  pdfService: any;

  
  constructor(private blocService: BlocService, private router: Router ,private PdfBlocService :PdfBlocService , private foyerService: FoyerService ) {}

  ngOnInit() {
    this.loadAllBlocs();
    this.foyerService.findFoyersByBlocsIsNull().subscribe((data) => {
      this.foyerList = data;
    });

  }
  deleteBloc(idBloc: number) {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?')){
      this.blocService.deleteBloc(idBloc).subscribe(() => {
      this.b = this.b.filter(bloc => bloc.idBloc !== idBloc);
      this.blocRemoved.emit(idBloc); // Emit the removed student's ID
    });
  }
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  navigateToBlocForm() {
    this.router.navigate(['/bloc-form']);
  }

  navigateToUpdateForm(blocId: number) {
    this.router.navigate(['/updateBloc', blocId]);
  }

  private loadAllBlocs() {
    this.blocService.getAllBlocs().subscribe((blocs) => {
      console.log(blocs);  // Check the console for the loaded data
      this.b = blocs;
    });
  }
  
  searchBlocs(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.loadAllBlocs();
      return;
    }

    this.b = this.b.filter(
      (bloc) =>
        bloc.nomBloc.toLowerCase().includes(searchTerm.toLowerCase()) ||
        bloc.capaciteBloc.toString().includes(searchTerm)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.loadAllBlocs();
  }
  
  close(){
    this.show=true;
  }

  open(bloc:Bloc) {
    this.show = false;
    this.bloc = bloc;
  }

  affecterFoyerAUniversite(idFoyer: number, nomBloc: string): void {
    this.blocService.affecterBlocAFoyer(idFoyer, nomBloc)
      .subscribe(
        (bloc: any) => {
          // Traitement réussi, mettez à jour votre interface utilisateur si nécessaire
          console.log("Affectation réussie :", bloc);
        },
        (error) => {
          // Gérez les erreurs ici
          console.error("Erreur lors de l'affectation :", error);
        }
      );
  }

  onOptionSelectionChange(event, bloc) {
    const idSelectedFoyer = event.target.value;
    console.log(idSelectedFoyer);
  
    this.foyerList = this.foyerList.filter(foyer => foyer.idFoyer != idSelectedFoyer);
  
    this.blocService.affecterBlocAFoyer(idSelectedFoyer, bloc.nomBloc)
      .subscribe(
        (data) => {
          console.log(data);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  generatePDF() {
    this.PdfBlocService.generatePDF().subscribe(
      (pdfBlob: Blob) => {
        const pdfUrl = URL.createObjectURL(pdfBlob);
        window.open(pdfUrl, "_blank");
      },
      (error) => {
        console.error("Erreur lors de la génération du PDF", error);
      }
    );
  }
}
