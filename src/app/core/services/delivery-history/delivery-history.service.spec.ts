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

  it('should add a trip to history', () => {
    const trip = {
      origin: 'A1',
      pickup: 'B1',
      destination: 'C1',
      totalTime: 10,
    };
    service.addToHistory(trip);
    expect(service.getHistory()).toContain(trip);
  });

  it('should get history', () => {
    const trip1 = {
      origin: 'A1',
      pickup: 'B1',
      destination: 'C1',
      totalTime: 10,
    };
    const trip2 = {
      origin: 'X1',
      pickup: 'Y1',
      destination: 'Z1',
      totalTime: 20,
    };
    service.addToHistory(trip1);
    service.addToHistory(trip2);

    const history = service.getHistory();
    expect(history).toEqual([trip2, trip1]);
  });
});
