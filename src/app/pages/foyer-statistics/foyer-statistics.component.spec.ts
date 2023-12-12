import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerStatisticsComponent } from './foyer-statistics.component';

describe('FoyerStatisticsComponent', () => {
  let component: FoyerStatisticsComponent;
  let fixture: ComponentFixture<FoyerStatisticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerStatisticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoyerStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
