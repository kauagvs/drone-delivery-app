export interface ITimeData {
  [key: string]: {
    [key: string]: number;
  };
}

export interface ITrip {
  origin: string;
  pickup: string;
  destination: string;
  totalTime: number;
}
