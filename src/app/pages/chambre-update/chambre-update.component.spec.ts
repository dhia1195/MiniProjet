import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreUpdateComponent } from './chambre-update.component';

describe('ChambreUpdateComponent', () => {
  let component: ChambreUpdateComponent;
  let fixture: ComponentFixture<ChambreUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
