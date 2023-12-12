import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocFrontComponent } from './bloc-front.component';

describe('BlocFrontComponent', () => {
  let component: BlocFrontComponent;
  let fixture: ComponentFixture<BlocFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlocFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
