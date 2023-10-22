import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DeliveryFormComponent } from './delivery-form.component';
import { DeliveryHistoryService } from '@core/services/delivery-history/delivery-history.service';

describe('DeliveryFormComponent', () => {
  let component: DeliveryFormComponent;
  let fixture: ComponentFixture<DeliveryFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryFormComponent],
      imports: [HttpClientTestingModule],
      providers: [DeliveryHistoryService],
    });

    fixture = TestBed.createComponent(DeliveryFormComponent);
    component = fixture.componentInstance;

    component.origin = 'A1';
    component.pickup = 'B2';
    component.destination = 'C3';
    component.timeData = {
      A1: { B2: 10, C3: 20 },
      B2: { A1: 10, C3: 5 },
      C3: { A1: 20, B2: 5 },
    };
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate the fastest path and update fastestPath and totalTime', () => {
    component.calculateFastestPath();

    expect(component.fastestPath).toEqual(['A1', 'B2', 'C3']);
    expect(component.totalTime).toEqual(15);
  });
});
