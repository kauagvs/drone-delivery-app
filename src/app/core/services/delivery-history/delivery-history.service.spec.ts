import { TestBed } from '@angular/core/testing';

import { DeliveryHistoryService } from './delivery-history.service';

describe('DeliveryHistoryService', () => {
  let service: DeliveryHistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeliveryHistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
