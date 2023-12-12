import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-bloc-details',
  templateUrl: './bloc-details.component.html',
  styleUrls: ['./bloc-details.component.css']
})
export class BlocDetailsComponent {
  @Input() selectedBloc: Bloc;

  constructor(
    private route: ActivatedRoute,
    private blocService: BlocService,
  ) {}

  ngOnInit() {
    // Get the id from the route parameters
    const id: number = +this.route.snapshot.paramMap.get('id');

    // Fetch the details based on the id
    this.blocService.fetchBlocById(id).subscribe((bloc) => {
      this.selectedBloc = bloc;
    });
}
}
