import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantFrontComponent } from './etudiant-front.component';

describe('EtudiantFrontComponent', () => {
  let component: EtudiantFrontComponent;
  let fixture: ComponentFixture<EtudiantFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtudiantFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EtudiantFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
