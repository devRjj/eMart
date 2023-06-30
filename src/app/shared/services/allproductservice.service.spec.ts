import { TestBed } from '@angular/core/testing';

import { AllproductserviceService } from './allproductservice.service';

describe('AllproductserviceService', () => {
  let service: AllproductserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllproductserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
