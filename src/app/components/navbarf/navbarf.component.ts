import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbarf',
  templateUrl: './navbarf.component.html',
  styleUrls: ['./navbarf.component.css']
})
export class NavbarfComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}