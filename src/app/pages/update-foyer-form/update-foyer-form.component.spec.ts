import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateFoyerFormComponent } from './update-foyer-form.component';

describe('UpdateFoyerFormComponent', () => {
  let component: UpdateFoyerFormComponent;
  let fixture: ComponentFixture<UpdateFoyerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateFoyerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateFoyerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
