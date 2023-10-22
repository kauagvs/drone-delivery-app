import { Injectable } from '@angular/core';
import { ITrip } from 'src/app/core/interfaces/delivery.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryHistoryService {
  private history: ITrip[] = [];

  addToHistory(trip: ITrip): void {
    this.history.unshift(trip);
  }

  getHistory(): ITrip[] {
    return this.history;
  }
}
