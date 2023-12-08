import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBlocComponent } from './form-bloc.component';

describe('FormBlocComponent', () => {
  let component: FormBlocComponent;
  let fixture: ComponentFixture<FormBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
