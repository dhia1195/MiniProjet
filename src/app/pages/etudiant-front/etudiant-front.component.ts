import { Component , EventEmitter, OnInit, Output,  } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';
@Component({
  selector: 'app-etudiant-front',
  templateUrl: './etudiant-front.component.html',
  styleUrls: ['./etudiant-front.component.css']
})
export class EtudiantFrontComponent {
  @Output() etudiantSelected: EventEmitter<Etudiant> = new EventEmitter<Etudiant>();

  e: Etudiant[] = [];
  newEtudiant: Etudiant = new Etudiant();
  showAddForm: boolean = false;
  filterId: number;
  isFiltered: boolean = false;
  filterText: string = '';
  sortField: string;
  sortDirection: 'asc' | 'desc' = 'asc';
selectedEtudiant: any;

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.loadAllEtudiants();
  }

  loadEtudiantsWithReservations() {
    this.etudiantService.getEtudiantsWithReservations().subscribe((etudiants) => {
      this.e = etudiants;
    });
  }


 
  showEtudiantDetails(etudiant: Etudiant) {
        this.selectedEtudiant = etudiant;  

 this.etudiantSelected.emit(etudiant);

    // Navigate to the details route
    this.router.navigate(['/user/details', etudiant.idEtudiant]);
  }

  filterEtudiants() {
    if (this.filterId) {
      this.e = this.e.filter(etudiant => etudiant.idEtudiant === this.filterId);
      this.isFiltered = true;
    } else if (this.filterText) {
      const lowerCaseFilterText = this.filterText.toLowerCase();
      this.e = this.e.filter(etudiant =>
        etudiant.nomEt.toLowerCase().includes(lowerCaseFilterText) ||
        etudiant.prenomEt.toLowerCase().includes(lowerCaseFilterText) ||
        etudiant.ecole.toLowerCase().includes(lowerCaseFilterText)
      );
      this.isFiltered = true;
    } else {
      this.loadAllEtudiants();
      this.isFiltered = false;
    }
  }

  sortEtudiants() {
    if (this.sortField) {
      this.e = this.e.filter(etudiant => etudiant[this.sortField] !== null);

      this.e.sort((a, b) => {
        const fieldA = a[this.sortField].toLowerCase();
        const fieldB = b[this.sortField].toLowerCase();

        if (fieldA < fieldB) {
          return this.sortDirection === 'asc' ? -1 : 1;
        }
        if (fieldA > fieldB) {
          return this.sortDirection === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
  }

  clearFilter() {
    this.filterId = null;
    this.loadAllEtudiants();
    this.isFiltered = false;
  }

  private loadAllEtudiants() {
    this.etudiantService.getAllEtudiants().subscribe((etudiants) => {
      console.log(etudiants);
      this.e = etudiants;
    });
  }
  generatePDF() {
    this.etudiantService.getEtudiantsWithReservations().subscribe((etudiants) => {
      const content = this.generatePdfContent(etudiants);
      this.openPrintWindow(content);
    });
  }

  private generatePdfContent(etudiants: Etudiant[]): string {
    let htmlContent = '<h1>Liste des Étudiants quit ont une réservation</h1>';
    
    // Create a table
    htmlContent += '<table border="1">';
    htmlContent += '<tr><th>Nom</th><th>Prénom</th><th>date de Naissance</th><th>Cin</th><th>École</th><th>réservation</th></tr>';
    
    etudiants.forEach((etudiant) => {
      htmlContent += `<tr><td>${etudiant.nomEt}</td><td>${etudiant.prenomEt}</td><td>${etudiant.dateNaissance}</td><td>${etudiant.cin}</td><td>${etudiant.ecole}</td></tr>`;
    });

    htmlContent += '</table>';

    return htmlContent;
  }

  private openPrintWindow(content: string): void {
    const printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print</title></head><body>');
    printWindow.document.write(content);
    printWindow.document.write('</body></html>');
    printWindow.document.close();
    printWindow.print();
  }
 
}
