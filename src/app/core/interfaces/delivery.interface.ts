export interface ITimeData {
  [key: string]: {
    [key: string]: number;
  };
}

export interface Trip {
  origin: string;
  pickup: string;
  destination: string;
  totalTime: number;
}
