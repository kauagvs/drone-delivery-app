import { Component, OnInit } from '@angular/core';
import { ITrip } from '@core/interfaces/delivery.interface';
import { DeliveryHistoryService } from '@core/services/delivery-history/delivery-history.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.scss'],
})
export class DeliveryListComponent implements OnInit {
  public history: ITrip[] = [];

  constructor(private deliveryHistoryService: DeliveryHistoryService) {}

  ngOnInit(): void {
    this._getDeliveryHistory();
  }

  private _getDeliveryHistory(): void {
    this.history = this.deliveryHistoryService.getHistory();
  }
}
