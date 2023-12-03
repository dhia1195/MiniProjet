import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEtudiantFormComponent } from './update-etudiant-form.component';

describe('UpdateEtudiantFormComponent', () => {
  let component: UpdateEtudiantFormComponent;
  let fixture: ComponentFixture<UpdateEtudiantFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEtudiantFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEtudiantFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
