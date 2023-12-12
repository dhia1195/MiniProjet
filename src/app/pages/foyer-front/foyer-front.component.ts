import { Component, ElementRef, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-front',
  templateUrl: './foyer-front.component.html',
  styleUrls: ['./foyer-front.component.css']
})
export class FoyerFrontComponent {
  showStatisticsPanel: boolean = false;
foyerStatistics: any;
foyers: Foyer[];
foyer: Foyer = new Foyer(); 
showAddForm: boolean = false;
searchTerm: string = '';
sortField: string;
sortDirection: 'asc' | 'desc' = 'asc';
selectedFoyer: Foyer | undefined;
currentPage = 1;
  itemsPerPage = 3;
  
constructor(private foyerService: FoyerService, private router: Router, private renderer: Renderer2, private el: ElementRef) {
  this.foyerService.getAllFoyers().subscribe((data: Foyer[]) => {
    this.foyers = data;
  });

}

ngOnInit() {
}
openDetailsModal(foyer: Foyer): void {
  this.selectedFoyer = foyer;
  const modal = this.el.nativeElement.querySelector('#foyerDetailsModal');
  this.renderer.addClass(modal, 'show');
  modal.style.display = 'block';
}

closeDetailsModal(): void {
  const modal = this.el.nativeElement.querySelector('#foyerDetailsModal');
  this.renderer.removeClass(modal, 'show');
  modal.style.display = 'none';
}
onFileChange(event: any, foyer: Foyer): void {
  const file = event.target.files[0];
  if (file) {
    this.uploadImage(file, foyer);
  }
}

uploadImage(file: File, foyer: Foyer): void {
  const reader = new FileReader();
  reader.onload = () => {
    foyer.imageUrl = reader.result as string;
  };
  reader.readAsDataURL(file);
}

onSelectFoyer(foyer: Foyer): void {
  this.selectedFoyer = foyer;
}

getVisibleFoyers(): Foyer[] {
  const startIndex = (this.currentPage - 1) * this.itemsPerPage;
  const endIndex = startIndex + this.itemsPerPage;
  return this.foyers.slice(startIndex, endIndex);
}

prevPage(): void {
  if (this.currentPage > 1) {
    this.currentPage--;
  }
}

nextPage(): void {
  const maxPage = this.calculateMaxPage();
  if (this.currentPage < maxPage) {
    this.currentPage++;
  }
}

calculateMaxPage(): number {
  return Math.ceil(this.foyers.length / this.itemsPerPage);
}
}