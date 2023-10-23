import { Component, OnInit } from '@angular/core';
import { ITimeData, ITrip } from '@core/interfaces/delivery.interface';
import { DeliveryHistoryService } from '@core/services/delivery-history/delivery-history.service';
import { DeliveryService } from '@core/services/delivery/delivery.service';

@Component({
  selector: 'app-delivery-form',
  templateUrl: './delivery-form.component.html',
  styleUrls: ['./delivery-form.component.scss'],
})
export class DeliveryFormComponent implements OnInit {
  public destination = '';
  public fastestPath: string[] = [];
  public history: ITrip[] = [];
  public origin = '';
  public pickup = '';
  public timeData: ITimeData = {};
  public totalTime = 0;

  constructor(
    private deliveryService: DeliveryService,
    private deliveryHistoryService: DeliveryHistoryService
  ) {}

  ngOnInit(): void {
    this._getTimeData();
  }

  public calculateFastestPath() {
    this.destination = this.destination.toUpperCase();
    this.origin = this.origin.toUpperCase();
    this.pickup = this.pickup.toUpperCase();

    if (!this.timeData || !this.origin || !this.pickup || !this.destination) {
      return;
    }

    const fastestPathToPickup = this._findFastestPath(this.origin, this.pickup);
    const fastestPathToDestination = this._findFastestPath(
      this.pickup,
      this.destination
    );

    if (fastestPathToPickup && fastestPathToDestination) {
      this.fastestPath = [...fastestPathToPickup, ...fastestPathToDestination];
      this.totalTime = this._calculateTotalTime(this.fastestPath);
    }

    this._addToHistory(
      this.origin,
      this.pickup,
      this.destination,
      this.totalTime
    );
    this._resetForm();
  }

  private _findFastestPath(start: string, end: string): string[] | null {
    const visited = new Set<string>();
    const queue = [{ path: [start], time: 0 }];

    let fastestTime = Infinity;
    let fastestPath: string[] = [];

    while (queue.length > 0) {
      const current = queue.shift();

      if (current) {
        const { path, time } = current;

        if (path[path.length - 1] === end) {
          if (time < fastestTime) {
            fastestTime = time;
            fastestPath = path;
          }
        }

        visited.add(path[path.length - 1]);

        for (const neighbor in this.timeData[path[path.length - 1]]) {
          if (
            !visited.has(neighbor) &&
            this._isValidMove(path[path.length - 1], neighbor)
          ) {
            const neighborTime = this.timeData[path[path.length - 1]][neighbor];
            queue.push({
              path: [...path, neighbor],
              time: time + neighborTime,
            });
          }
        }
      }
    }

    return fastestPath.length > 0 ? fastestPath : null;
  }

  private _calculateTotalTime(path: string[]): number {
    let totalTime = 0;
    for (let i = 1; i < path.length; i++) {
      const coordA = path[i - 1];
      const coordB = path[i];
      if (
        this.timeData[coordA] &&
        this.timeData[coordA][coordB] !== undefined
      ) {
        totalTime += this.timeData[coordA][coordB];
      }
    }
    return totalTime;
  }

  private _isValidMove(coordA: string, coordB: string): boolean {
    const [letterA, numberA] = [coordA[0], parseInt(coordA.slice(1))];
    const [letterB, numberB] = [coordB[0], parseInt(coordB.slice(1))];

    const isVerticalMove =
      letterA === letterB && Math.abs(numberA - numberB) === 1;
    const isHorizontalMove =
      numberA === numberB &&
      Math.abs(letterA.charCodeAt(0) - letterB.charCodeAt(0)) === 1;

    return isVerticalMove || isHorizontalMove;
  }

  private _addToHistory(
    origin: string,
    pickup: string,
    destination: string,
    totalTime: number
  ) {
    const trip: ITrip = { origin, pickup, destination, totalTime };

    this.deliveryHistoryService.addToHistory(trip);
    this.history = this.deliveryHistoryService.getHistory().slice(-10);
  }

  private _getTimeData(): void {
    this.deliveryService.getTimeData().subscribe(data => {
      this.timeData = data;
    });
  }

  private _resetForm() {
    this.destination = '';
    this.origin = '';
    this.pickup = '';
  }
}
