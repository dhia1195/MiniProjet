import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationChambreInfoComponent } from './reservation-chambre-info.component';

describe('ReservationChambreInfoComponent', () => {
  let component: ReservationChambreInfoComponent;
  let fixture: ComponentFixture<ReservationChambreInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationChambreInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationChambreInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
