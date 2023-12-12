import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFormBlocComponent } from './update-form-bloc.component';

describe('UpdateFormBlocComponent', () => {
  let component: UpdateFormBlocComponent;
  let fixture: ComponentFixture<UpdateFormBlocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFormBlocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateFormBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
