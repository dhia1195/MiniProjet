import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Bloc } from 'src/app/models/bloc';
import { BlocService } from 'src/app/services/bloc.service';

@Component({
  selector: 'app-bloc-front',
  templateUrl: './bloc-front.component.html',
  styleUrls: ['./bloc-front.component.css']
})
export class BlocFrontComponent implements OnInit {
  blocs: Bloc[] = [];
  @Output() selectedBloc: EventEmitter<Bloc> = new EventEmitter<Bloc>();
  newBloc: Bloc = new Bloc();
  showAddForm: boolean = false;
  filterId: number;
  isFiltered: boolean = false;
  filterText: string = '';
  sortField: string;
  blocSelected: any;

  constructor(private blocService: BlocService , private router : Router) { }

  ngOnInit() {
    this.loadBlocs();
  }
  loadBlocs() {
    this.blocService.getAllBlocs().subscribe(blocs => {
      this.blocs = blocs;
    });
  }

  showBlocDetails(b: Bloc) {
    console.log('Showing details for bloc:', b);
      this.blocSelected = b;  
      this.selectedBloc.emit(b);
      this.router.navigate(['/user/detailsb',b.idBloc]);
  }


}
