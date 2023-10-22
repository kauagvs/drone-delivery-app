import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { DeliveryService } from './delivery.service';

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(DeliveryService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return time data', () => {
    const mockTimeData = {};

    service.getTimeData().subscribe(data => {
      expect(data).toEqual(mockTimeData);
    });

    const req = httpTestingController.expectOne(service['_apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockTimeData);
  });
});
