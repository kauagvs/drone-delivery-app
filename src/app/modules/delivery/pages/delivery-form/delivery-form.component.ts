import { Component, OnInit } from '@angular/core';
import { ITimeData, Trip } from 'src/app/core/interfaces/delivery.interface';
import { DeliveryService } from 'src/app/core/services/delivery/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  public destination = '';
  public fastestPath: string[] = [];
  public history: Trip[] = [];
  public origin = '';
  public pickup = '';
  public timeData: ITimeData = {};
  public totalTime = 0;

  constructor(private deliveryService: DeliveryService) {}

  ngOnInit(): void {
    this._getTimeData();
  }

  public calculateFastestPath() {
    if (!this.timeData || !this.origin || !this.pickup || !this.destination) {
      return;
    }

    const visited = new Set<string>();
    const queue = [{ path: [this.origin], time: 0 }];

    let fastestTime = Infinity;
    let fastestPath: string[] = [];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current) {
        const { path, time } = current;

        if (path[path.length - 1] === this.destination) {
          if (time < fastestTime) {
            fastestTime = time;
            fastestPath = path;
          }
        }

        visited.add(path[path.length - 1]);

        for (const neighbor in this.timeData[path[path.length - 1]]) {
          if (!visited.has(neighbor)) {
            const neighborTime = this.timeData[path[path.length - 1]][neighbor];
            queue.push({
              path: [...path, neighbor],
              time: time + neighborTime,
            });
          }
        }
      }
    }

    this.fastestPath = fastestPath;
    this.totalTime = fastestTime;

    this._addToHistory(
      this.origin,
      this.pickup,
      this.destination,
      this.totalTime
    );
  }

  private _addToHistory(
    origin: string,
    pickup: string,
    destination: string,
    totalTime: number
  ) {
    const trip: Trip = { origin, pickup, destination, totalTime };
    this.history.unshift(trip);
    if (this.history.length > 10) {
      this.history.pop();
    }
  }

  private _getTimeData(): void {
    this.deliveryService.getTimeData().subscribe(data => {
      this.timeData = data;
    });
  }
}
