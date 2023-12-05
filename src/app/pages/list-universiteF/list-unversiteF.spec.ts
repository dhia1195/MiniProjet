import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUniversiteFComponent } from './list-universiteF.component';

describe('ListUniversiteFComponent', () => {
  let component: ListUniversiteFComponent;
  let fixture: ComponentFixture<ListUniversiteFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListUniversiteFComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListUniversiteFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
