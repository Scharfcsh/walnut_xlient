import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Clock } from "lucide-react";
import type { CallDurationData } from "@/types/Analytics";

interface CallDurationChartProps {
  data: CallDurationData[];
}

export function CallDurationChart({ data }: CallDurationChartProps) {
  return (
    <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 rounded-2xl border-border/50 bg-[#13131a6e]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl" style={{ backgroundColor: "color-mix(in oklab, var(--primary) 15%, transparent)" }}>
            <Clock className="w-5 h-5" style={{ color: "var(--primary)" }} />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Call Duration Analysis</CardTitle>
            <CardDescription>Average call duration by day</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[280px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <defs>
                <linearGradient id="colorDuration" x1="0" y1="0" x2="0" y2="1">
                  {/* Use CSS var directly (hex) instead of hsl(var(--primary)) */}
                  <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.35} />
                  <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" vertical={false} />
              <XAxis
                dataKey="day"
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
              />
              <YAxis
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value}m`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgb(0 0 0 / 0.25)",
                }}
                labelStyle={{ color: "hsl(var(--foreground))", fontWeight: 600 }}
                formatter={(value?: number) => [`${value ?? 0} min`, "Duration"]}
                labelFormatter={(label) => `Day: ${label}`}
              />
              <Area
                type="monotone"
                dataKey="duration"
                stroke="var(--primary)"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorDuration)"
                activeDot={{ r: 4, stroke: "var(--primary)", strokeWidth: 1 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
