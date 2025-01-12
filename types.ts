export interface Player {
  id: string;
  address: string;
}

export interface TimeRange {
  label: string;
  value: "day" | "week" | "month";
}
