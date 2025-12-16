import type { CallDurationData, SentimentData } from "@/types/Analytics";

export const defaultCallDurationData: CallDurationData[] = [
  { day: "Mon", duration: 4.2 },
  { day: "Tue", duration: 5.8 },
  { day: "Wed", duration: 3.9 },
  { day: "Thu", duration: 6.5 },
  { day: "Fri", duration: 4.8 },
  { day: "Sat", duration: 2.3 },
  { day: "Sun", duration: 3.1 },
];

export const sentimentData: SentimentData[] = [
  { name: "Customer Frustration", value: 35, color: "hsl(var(--chart-5))" },
  { name: "Call Drop", value: 25, color: "hsl(var(--destructive))" },
  { name: "Language Barrier", value: 22, color: "hsl(var(--chart-3))" },
  { name: "Agent Silence", value: 18, color: "hsl(var(--chart-4))" },
];
