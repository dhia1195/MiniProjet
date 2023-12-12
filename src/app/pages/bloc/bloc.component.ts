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
  b: Bloc[] = [];
  blocs : Bloc[] ;
  bloc: Bloc = new Bloc(); 
  showAddForm: boolean = false;
  searchTerm: string = '';
  blocRemoved: EventEmitter<number> = new EventEmitter<number>();
  show:boolean=true;
  foyerList: any ; 
  originalFoyerList: any;
  selectedFoyers: any[] = [];
  
  constructor(private blocService: BlocService, private router: Router , private foyerService: FoyerService ,private PdfBlocService : PdfBlocService , ) {}

  ngOnInit() {
    this.loadAllBlocs();
    this.foyerService.findFoyersByBlocsIsNull().subscribe((data) => {
      this.foyerList = data;
      this.originalFoyerList = this.foyerList;
    });

  }
  deleteBloc(idBloc: number) {
    if(confirm('Êtes-vous sûr de vouloir supprimer ce bloc ?')){
      this.blocService.deleteBloc(idBloc).subscribe(() => {
      this.b = this.b.filter(bloc => bloc.idBloc !== idBloc);
      this.blocRemoved.emit(idBloc); 
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
      console.log(blocs);  
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
         
          console.log("Affectation réussie :", bloc);
        },
        (error) => {
          
          console.error("Erreur lors de l'affectation :", error);
        }
      );
  }

  onOptionSelectionChange(event, bloc) {
    const idSelectedFoyer = event.target.value;
    console.log(idSelectedFoyer);

    this.blocService.affecterBlocAFoyer(idSelectedFoyer, bloc.nomBloc)
      .subscribe(
        (data) => {
          console.log(data);
          const selectedFoyer = this.foyerList.find(foyer => foyer.idFoyer === idSelectedFoyer);
          this.removeFoyerFromList(selectedFoyer);
          this.selectedFoyers.push(selectedFoyer);
        },
        (error) => {
          console.log(error);
        }
      );
  }

  removeFoyerFromList(selectedFoyer) {
    this.foyerList = this.foyerList.filter(foyer => foyer.idFoyer !== selectedFoyer.idFoyer);
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
