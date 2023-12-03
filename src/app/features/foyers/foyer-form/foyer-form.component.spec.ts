import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoyerFormComponent } from './foyer-form.component';

describe('FoyerFormComponent', () => {
  let component: FoyerFormComponent;
  let fixture: ComponentFixture<FoyerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoyerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoyerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
