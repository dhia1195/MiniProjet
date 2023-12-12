// foyer-statistics.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { Foyer } from 'src/app/models/foyer';
import { FoyerService } from 'src/app/services/foyer.service';
import { NotificationService } from 'src/app/services/notifications.service';

// Déclarez Chart comme une variable globale
declare var Chart: any;

@Component({
  selector: 'app-foyer-statistics',
  templateUrl: './foyer-statistics.component.html',
  styleUrls: ['./foyer-statistics.component.css']
})
export class FoyerStatisticsComponent implements OnInit {
  @Input() foyers: Foyer[] = [];
  showChart: boolean = false;

  constructor(private foyerService: FoyerService, private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadFoyers();
  }

  private loadFoyers() {
    this.foyerService.getAllFoyers().subscribe((foyers) => {
      this.foyers = foyers;
      this.createChart();
    });
  }

  private createChart() {
    const capacities = this.foyers.map((foyer) => foyer.capacite);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.foyers.map((foyer) => foyer.nomFoyer),
        datasets: [{
          label: 'Capacité des Foyers',
          data: capacities,
          backgroundColor: 'rgba(75, 192, 192, 0.5)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  sendNotification() {
    const notificationTitle = 'Nouvelle notification';
    const notificationOptions: NotificationOptions = {
      body: 'Modification d etat du Foyer '
  
    };

    this.notificationService.showNotification(notificationTitle, notificationOptions);
  }
}
