import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Settings2, Save } from "lucide-react";
import type { CallDurationData } from "@/types/Analytics";

interface EditableChartFormProps {
  data: CallDurationData[];
  onSave: (newData: CallDurationData[]) => void;
  onEditStart?: () => void;
  disabled?: boolean;
  submitLabel?: string;
}

export function EditableChartForm({ data, onSave, onEditStart, disabled, submitLabel = "Save Changes" }: EditableChartFormProps) {
  const [values, setValues] = useState<CallDurationData[]>(data);
  const [hasStartedEditing, setHasStartedEditing] = useState(false);

  const handleChange = (index: number, value: string) => {
    if (!hasStartedEditing && onEditStart) {
      setHasStartedEditing(true);
      onEditStart();
    }
    
    const numValue = parseFloat(value) || 0;
    const newValues = [...values];
    newValues[index] = { ...newValues[index], duration: numValue };
    setValues(newValues);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(values);
  };

  return (
    <Card className="rounded-2xl border-border/50 bg-[#13131a]">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-chart-3/10">
            <Settings2 className="w-5 h-5 text-chart-3" />
          </div>
          <div>
            <CardTitle className="text-lg font-semibold">Edit Metrics</CardTitle>
            <CardDescription>Update weekly call duration values</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {values.map((item, idx) => (
              <div key={item.day} className="space-y-2">
                <Label htmlFor={`day-${idx}`} className="text-xs uppercase tracking-wide text-muted-foreground">
                  {item.day}
                </Label>
                <Input
                  id={`day-${idx}`}
                  type="number"
                  step="0.1"
                  min="0"
                  value={item.duration}
                  onChange={(e) => handleChange(idx, e.target.value)}
                  className="rounded-xl h-10 bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-(--primary)"
                />
              </div>
            ))}
          </div>

          <Button 
            type="submit" 
            className="w-full rounded-xl h-11 gap-2 btn-primary"
            disabled={disabled}
          >
            <Save className="w-4 h-4" />
            {submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
