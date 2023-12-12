import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationUserInfoComponent } from './reservation-user-info.component';

describe('ReservationUserInfoComponent', () => {
  let component: ReservationUserInfoComponent;
  let fixture: ComponentFixture<ReservationUserInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationUserInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationUserInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
