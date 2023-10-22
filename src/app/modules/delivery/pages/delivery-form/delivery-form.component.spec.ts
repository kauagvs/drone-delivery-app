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
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
