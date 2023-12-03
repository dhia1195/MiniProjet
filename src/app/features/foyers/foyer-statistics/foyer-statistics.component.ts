import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Foyer } from 'src/app/models/foyer';

@Component({
  selector: 'app-foyer-statistics',
  templateUrl: './foyer-statistics.component.html',
  styleUrls: ['./foyer-statistics.component.css']
})
export class FoyerStatisticsComponent {
  @Input() foyers: Foyer[];
  foyerStatistics: any;

  hideStatistics() {
    this.foyerStatistics = null; 
}
}
