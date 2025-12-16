export interface CallDurationData {
  day: string;
  duration: number;
}

export interface SentimentData {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number; // Allow additional properties for Recharts compatibility
}

export interface UserData {
  email: string;
  callDurationData: CallDurationData[];
  savedAt: string;
}
