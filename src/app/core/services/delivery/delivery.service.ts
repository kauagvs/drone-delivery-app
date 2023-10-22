import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITimeData } from '../../interfaces/delivery.interface';

@Injectable({
  providedIn: 'root',
})
export class DeliveryService {
  private _apiUrl = 'https://mocki.io/v1/10404696-fd43-4481-a7ed-f9369073252f';

  constructor(private http: HttpClient) {}

  getTimeData(): Observable<ITimeData> {
    return this.http.get<ITimeData>(this._apiUrl);
  }
}
