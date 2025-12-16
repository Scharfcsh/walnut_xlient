import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AlertCircle, Clock } from "lucide-react";
import type { CallDurationData } from "@/types/Analytics";

interface OverwriteConfirmModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  previousData: CallDurationData[];
  savedAt: string;
}

export function OverwriteConfirmModal({ 
  open, 
  onClose, 
  onConfirm, 
  previousData, 
  savedAt 
}: OverwriteConfirmModalProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl border-border/50">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <AlertCircle className="w-6 h-6 text-accent" />
          </div>
          <DialogTitle className="text-xl font-semibold">Existing Data Found</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            You have previously saved values. Do you want to overwrite them?
          </DialogDescription>
        </DialogHeader>
        
        <div className="mt-4 p-4 bg-muted/50 rounded-xl space-y-3">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>Saved on {formatDate(savedAt)}</span>
          </div>
          
          <div className="grid grid-cols-7 gap-1">
            {previousData.map((item) => (
              <div key={item.day} className="text-center">
                <div className="text-xs text-muted-foreground">{item.day}</div>
                <div className="text-sm font-medium text-foreground">{item.duration}m</div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-3 pt-4">
          <Button variant="outline" onClick={onClose} className="flex-1 rounded-xl">
            Keep Previous
          </Button>
          <Button onClick={onConfirm} className="flex-1 rounded-xl">
            Overwrite
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
