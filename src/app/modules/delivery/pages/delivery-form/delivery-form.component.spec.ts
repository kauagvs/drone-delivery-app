import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeliveryFormComponent } from './delivery-form.component';
import { DeliveryHistoryService } from '@core/services/delivery-history/delivery-history.service';
import { DeliveryService } from '@core/services/delivery/delivery.service';
import { of, throwError } from 'rxjs';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;
  let deliveryService: DeliveryService;
  let deliveryHistoryService: DeliveryHistoryService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryFormComponent],
      imports: [HttpClientTestingModule],
      providers: [DeliveryHistoryService, DeliveryService],
    });

    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;
    deliveryService = TestBed.inject(DeliveryService);
    deliveryHistoryService = TestBed.inject(DeliveryHistoryService);

    component.origin = 'A1';
    component.pickup = 'B2';
    component.destination = 'C3';
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the fastest path and update fastestPath and totalTime', () => {
    component.timeData = {
      A1: { A2: 1, B1: 1 },
      B1: { A1: 1, B2: 1, C1: 1 },
      C1: { B1: 1, C2: 1, D1: 1 },
    };

    component.origin = 'A1';
    component.pickup = 'B1';
    component.destination = 'C1';

    component.calculateFastestPath();

    expect(component.fastestPath).toEqual(['A1', 'B1', 'B1', 'C1']);
    expect(component.totalTime).toEqual(2);
  });
});
