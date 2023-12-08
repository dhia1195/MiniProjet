import { Component, Input, OnInit } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.css']
})
export class StatistiqueComponent implements OnInit {
  showChart: boolean = false;
  @Input() e: Etudiant[] = [];
  private myChart: Chart;

  constructor(private etudiantService: EtudiantService, private router: Router) {}

  ngOnInit() {
    console.log('ngOnInit');
    this.loadEtudiantsWithReservations();
  }

  loadEtudiantsWithReservations() {
    this.etudiantService.getEtudiantsWithReservations().subscribe((etudiants) => {
      this.e = etudiants;
      this.updateChart();
    });
  }

  private updateChart() {
    if (this.myChart) {
      // Si le graphique existe déjà, le détruire avant d'en créer un nouveau
      this.myChart.destroy();
    }

    const schools = ['esprit', 'seasame', 'tekup']; //université.NomUniv
    const studentCounts = schools.map(school => this.e.filter(etudiant => etudiant.ecole === school).length);

    const ctx = document.getElementById('myChart') as HTMLCanvasElement;
    this.myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: schools,
        datasets: [{
          label: 'Nombre d\'étudiants qui font une réservation par école',
          data: studentCounts,
          backgroundColor: [
            'rgba(255, 99, 132, 0.5)',
            'rgba(54, 162, 235, 0.5)',
            'rgba(255, 206, 86, 0.5)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
          ],
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
