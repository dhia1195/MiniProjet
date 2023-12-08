import { Component, Input, Output, OnInit, EventEmitter,Renderer2 } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';

@Component({
 selector: 'app-etudiant',
 templateUrl: './etudiant.component.html',
 styleUrls: ['./etudiant.component.css'],
})
export class EtudiantComponent implements OnInit {

 e: Etudiant[] = [];
 newEtudiant: Etudiant = new Etudiant();
 showAddForm: boolean = false;
 filterId: number;
 isFiltered: boolean = false;
 filterText: string = '';
 sortField: string;
 sortDirection: 'asc' | 'desc' = 'asc';
// ajoutSucces: boolean = false; // Initialize ajoutSucces property

 etudiantRemoved: EventEmitter<number> = new EventEmitter<number>();

 constructor(private etudiantService: EtudiantService, private router: Router ,private renderer: Renderer2) {}

 ngOnInit() {
  console.log('ngOnInit');
  this.loadAllEtudiants();
 }
 /*handleAjoutSucces(success: boolean): void {
    this.ajoutSucces = success;
  }*/
 /*handleAjoutEffectue(): void {
    console.log('Ajout effectué');
    // Perform other actions in response to the successful addition
  }
*/
 loadEtudiantsWithReservations() {
  this.etudiantService.getEtudiantsWithReservations().subscribe((etudiants) => {
   this.e = etudiants;
  });
 }

 removeEtudiant(idEtudiant: number) {
  this.etudiantService.removeEtudiant(idEtudiant).subscribe(() => {
   this.e = this.e.filter(etudiant => etudiant.idEtudiant !== idEtudiant);
   this.etudiantRemoved.emit(idEtudiant); // Emit the removed student's ID
  });
 }

 navigateToEtudiantForm() {
  this.router.navigate(['/etudiant-form']);
 }

 navigateToUpdateForm(etudiantId: number) {
  this.router.navigate(['/etudiantUpdate', etudiantId]);
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

 navigateToStatistics() {
  this.router.navigate(['/statistique']);
 }

 generatePDF() {
  this.etudiantService.getEtudiantsWithReservations().subscribe((etudiants) => {
   const content = this.generatePdfContent(etudiants);
   // this.downloadPDF(content);
   this.openPrintWindow(content);
  });
 }

 private generatePdfContent(etudiants: Etudiant[]): string {
  let htmlContent = '<h1>Liste des Étudiants qui ont une réservation</h1>';
   
  // Create a table
  htmlContent += '<table border="1">';
  htmlContent += '<tr><th>Nom</th><th>Prénom</th><th>Date de Naissance</th><th>Cin</th><th>École</th><th>Réservation</th></tr>';
   
  etudiants.forEach((etudiant) => {
   htmlContent += `<tr><td>${etudiant.nomEt}</td><td>${etudiant.prenomEt}</td><td>${etudiant.dateNaissance}</td><td>${etudiant.cin}</td><td>${etudiant.ecole}</td><td>${etudiant.reservations}</td></tr>`;
  });

  htmlContent += '</table>';

  return htmlContent;
 }

 // private downloadPDF(content: string) {
 //  const blob = new Blob([content], { type: 'application/pdf' });
 //  const url = window.URL.createObjectURL(blob);

 //  const a = this.renderer.createElement('a');
 //  this.renderer.setAttribute(a, 'href', url);
 //  this.renderer.setAttribute(a, 'download', 'etudiants_reservations.pdf');
 //  this.renderer.appendChild(document.body, a);
   
 //  a.click();
   
 //  this.renderer.removeChild(document.body, a);
 //  window.URL.revokeObjectURL(url);
 // }


 private openPrintWindow(content: string): void {
  const printWindow = window.open('', '_blank');
  printWindow.document.write('<html><head><title>Print</title></head><body>');
  printWindow.document.write(content);
  printWindow.document.write('</body></html>');
  printWindow.document.close();
  printWindow.print();
 }
}