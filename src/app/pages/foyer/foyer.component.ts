import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/services/foyer.service';



@Component({
  selector: 'app-foyer',
  templateUrl: './foyer.component.html',
  styleUrls: ['./foyer.component.css'],
  
})
export class FoyerComponent implements OnInit {
  @ViewChild('pdfContent', { static: false }) pdfContent: ElementRef;
  showStatisticsPanel: boolean = false;
  foyerStatistics: any;
  foyers: Foyer[];
  foyer: Foyer = new Foyer(); 
  showAddForm: boolean = false;
  searchTerm: string = '';
  sortField: string;
  sortDirection: 'asc' | 'desc' = 'asc';
  selectedFoyer: Foyer | null = null;
  currentPage = 1;
  totalPages = 1;
  itemsPerPage = 4;
  
  constructor(private foyerService: FoyerService, private router: Router) {}

  ngOnInit() {
    this.loadAllFoyers();
   // this.getFoyers();
  }

  // getFoyers(): void {
  //   this.foyerService.getAllFoyers().subscribe(foyers => {
  //     this.foyers = foyers;
  //     this.totalPages = Math.ceil(this.foyers.length / this.itemsPerPage);
  //   });
  // }

  // onSelectFoyer(foyer: Foyer): void {
  //   this.selectedFoyer = foyer;
  // }

  // prevPage(): void {
  //   if (this.currentPage > 1) {
  //     this.currentPage--;
  //   }
  // }

  // nextPage(): void {
  //   if (this.currentPage < this.totalPages) {
  //     this.currentPage++;
  //   }
  // }
  loadAllFoyers() {
    this.foyerService.getAllFoyers().subscribe((foyers) => {
      this.foyers = foyers;
    });
  }

  removefoyer(idFoyer: number) {
    this.foyerService.removefoyer(idFoyer).subscribe(() => {
      this.foyers = this.foyers.filter(foyer => foyer.idFoyer !== idFoyer);
      alert('le foyer a été supprimé avec succès !');
    });
  }

  toggleAddForm() {
    this.showAddForm = !this.showAddForm;
  }

  navigateToFoyerForm() {
    this.router.navigate(['/foyer-form']);
  }
  

  navigateToUpdateForm(foyerId: number) {
    this.router.navigate(['/foyerUpdate', foyerId]);
  }

  searchFoyers(searchTerm: string): void {
    if (!searchTerm.trim()) {
      this.loadAllFoyers();
      return;
    }

    this.foyers = this.foyers.filter(
      (foyer) =>
        foyer.nomFoyer.toLowerCase().includes(searchTerm.toLowerCase()) ||
        foyer.capacite.toString().includes(searchTerm)
    );
  }

  clearSearch(): void {
    this.searchTerm = '';
    this.loadAllFoyers();
  }
  sortFoyers() {
    if (this.sortField) {
      this.foyers.sort((a, b) => {
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
  
  downloadPDF() {
    // Create a new HTML content without buttons and actions
    const pdfContent = `
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Name of foyer</th>
            <th scope="col">Capacity of foyer</th>
          </tr>
        </thead>
        <tbody>
          ${this.foyers
            .map(
              (foyer) => `
                <tr>
                  <td>${foyer.nomFoyer}</td>
                  <td>${foyer.capacite}</td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    `;
  
    // Open a new window
    const printWindow = window.open('', '_blank');
  
    // Inject the HTML content into the new window
    printWindow.document.open();
    printWindow.document.write(`
      <html>
        <head>
          <title>Liste des Foyers</title>
        </head>
        <body>${pdfContent}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  }
  
    showStatistics() {
      this.router.navigate(['/foyer-statistics']);
    this.calculateStatistics();
  }

  calculateStatistics() {
    const capacities = this.foyers.map(foyer => foyer.capacite);
    this.foyerStatistics = {
      maxCapacity: Math.max(...capacities),
      minCapacity: Math.min(...capacities)
    };
  }

}