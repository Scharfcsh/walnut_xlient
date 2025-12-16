import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Shield } from "lucide-react";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (email: string) => void;
  mode?: 'edit' | 'save';
}

export function EmailModal({ open, onClose, onSubmit, mode = 'edit' }: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    
    setError("");
    onSubmit(email);
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md rounded-2xl border-border/50 bg-[#1C1C28]">
        <DialogHeader className="text-center">
          <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
            <Mail className="w-6 h-6 text-primary" />
          </div>
          <DialogTitle className="text-xl font-semibold">
            {mode === 'edit' ? 'Authenticate to Edit Metrics' : 'Save Custom Values'}
          </DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {mode === 'edit' 
              ? 'Enter your email to start editing metrics. We\'ll load any existing custom values you\'ve saved.'
              : 'Your custom chart values will be securely saved to Supabase cloud storage and linked to your email for future access.'
            }
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium">
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl h-11"
            />
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
          
          <div className="flex items-center gap-2 text-xs text-muted-foreground bg-muted/50 p-3 rounded-xl">
            <Shield className="w-4 h-4 shrink-0" />
            <span>Your data is securely stored in Supabase cloud and linked only to your email.</span>
          </div>
          
          <div className="flex gap-3 pt-2">
            <Button type="button" variant="outline" onClick={onClose} className="flex-1 rounded-xl">
              Cancel
            </Button>
            <Button type="submit" className="flex-1 rounded-xl">
              Continue
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
