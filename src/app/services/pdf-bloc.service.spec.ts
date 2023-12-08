import { TestBed } from '@angular/core/testing';

import { PdfBlocService } from './pdf-bloc.service';

describe('PdfBlocService', () => {
  let service: PdfBlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PdfBlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
