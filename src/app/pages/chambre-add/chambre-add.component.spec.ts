import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChambreAddComponent } from './chambre-add.component';


describe('ChambreAddComponent', () => {
  let component: ChambreAddComponent;
  let fixture: ComponentFixture<ChambreAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChambreAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChambreAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
