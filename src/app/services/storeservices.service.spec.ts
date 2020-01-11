import { TestBed } from '@angular/core/testing';

import { StoreservicesService } from './storeservices.service';

describe('StoreservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StoreservicesService = TestBed.get(StoreservicesService);
    expect(service).toBeTruthy();
  });
});
