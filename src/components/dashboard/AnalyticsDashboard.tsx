import { useState } from "react";
import { CallDurationChart } from "./CallDurationChart";
import { SentimentChart } from "./SentimentChart";
import { EditableChartForm } from "./EditableChartForm";
import { EmailModal } from "./EmailModal";
import { defaultCallDurationData, sentimentData } from "@/data/defaoutData";
import type { CallDurationData } from "@/types/Analytics";
import { toast } from "sonner";
import { supabase } from "@/lib/supabase";

export function AnalyticsDashboard() {
  const [callDurationData, setCallDurationData] = useState(defaultCallDurationData);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  // Confirmation bar state
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingSave, setPendingSave] = useState<CallDurationData[] | null>(null);

  const submitLabel = userEmail ? "Save to Database" : "Link Email & Save";

  // Helper: Fetch user analytics from Supabase
  const fetchUserAnalytics = async (email: string) => {
    const { data, error } = await supabase
      .from("user_analytics")
      .select("weekly_call_duration")
      .eq("email", email)
      .single();

    if (error) {
      // PGRST116 = no rows found (NOT an error for us)
      if (error.code !== "PGRST116") {
        console.error("Supabase fetch error:", error);
        toast.error("Failed to fetch previous data");
      }
      return null;
    }

    return data.weekly_call_duration as CallDurationData[];
  };

  // Load existing data for a user
  const handleLoadData = async (email?: string) => {
    const emailToUse = email || userEmail;
    if (!emailToUse) {
      setShowEmailModal(true);
      return;
    }

    setIsLoading(true);
    try {
      const existingData = await fetchUserAnalytics(emailToUse);
      if (existingData) {
        setCallDurationData(existingData);
        if (!userEmail) setUserEmail(emailToUse);
        toast.success("Data loaded successfully");
      } else {
        toast.info("No saved data found for this email");
        if (!userEmail) setUserEmail(emailToUse);
      }
    } finally {
      setIsLoading(false);
    }
  };

  // When user clicks save, ensure we have an email; if email exists, show top popup confirmation
  const handleSaveAttempt = async (newData: CallDurationData[]) => {
    if (!userEmail) {
      setShowEmailModal(true);
      return;
    }

    // Allow saving current data even without changes
    setPendingSave(newData);
    setConfirmOpen(true);
  };

  const confirmSave = async () => {
    if (!userEmail || !pendingSave) return;
    setConfirmOpen(false);
    await upsertUserAnalytics(userEmail, pendingSave);
    setCallDurationData(pendingSave);
    setPendingSave(null);
    toast.success("Saved to Supabase");
  };

  const cancelSave = () => {
    setConfirmOpen(false);
    setPendingSave(null);
  };

  // Collect email first time, check for existing data, then save if needed
  const handleEmailSubmit = async (email: string) => {
    setUserEmail(email);
    setShowEmailModal(false);
    setIsLoading(true);

    try {
      // First check if user has existing data
      const existingData = await fetchUserAnalytics(email);
      if (existingData) {
        setCallDurationData(existingData);
        toast.success("Existing data loaded for " + email);
      } else {
        // No existing data, save current chart data
        await upsertUserAnalytics(email, callDurationData);
        toast.success("Email linked and data saved");
      }
    } finally {
      setIsLoading(false);
    }
  };

  // Helper: Upsert into Supabase
  const upsertUserAnalytics = async (email: string, data: CallDurationData[]) => {
    const { error } = await supabase
      .from("user_analytics")
      .upsert(
        {
          email,
          weekly_call_duration: data,
          updated_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );

    if (error) {
      console.error("Supabase upsert error:", error);
      toast.error("Failed to save to Supabase");
    }
  };

  return (
    <section className="py-16 px-6">
        {confirmOpen && (
          <div className="fixed top-2 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-black/30 border border-white/10 shadow-lg">
          <p className=" text-white/90">Save data to database?</p>
          <div className="flex items-center gap-1.5">
            <button className="btn-primary text-xs px-2 py-1"  onClick={confirmSave}>
              Confirm
            </button>
            <button className="btn-secondary text-xs px-2 py-1" onClick={cancelSave}>
              Cancel
            </button>
          </div>
            </div>
          </div>
        )}

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            {/* <Phone className="w-4 h-4" /> */}
            <span
              className="font-medium uppercase tracking-wider"
              style={{
                fontSize: ".85rem",
                color: "#41E5E4",
                letterSpacing: ".1em",
              }}
            >
              Playground
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">Performance Overview</h2>
          <p className="text-muted-foreground max-w-lg mx-auto">Monitor your voice agent metrics and identify areas for improvement</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div>
            <CallDurationChart data={callDurationData} />
          </div>
          <div>
            <SentimentChart data={sentimentData} />
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <EditableChartForm data={callDurationData} onSave={handleSaveAttempt} submitLabel={submitLabel} />
          
          {/* Load Data Section */}
          <div className="flex justify-center gap-3 mt-6">
            <button
              onClick={() => handleLoadData()}
              disabled={isLoading}
              className="btn-secondary px-4 py-2 disabled:opacity-50"
            >
              {isLoading ? "Loading..." : "Load My Data"}
            </button>
            {userEmail && (
              <button
                onClick={() => handleLoadData(userEmail)}
                disabled={isLoading}
                className="btn-primary px-4 py-2 disabled:opacity-50"
              >
                {isLoading ? "Loading..." : "Refresh Data"}
              </button>
            )}
          </div>

          {userEmail && (
            <p className="text-center text-sm text-muted-foreground mt-4">
              Linked to <span className="font-medium text-foreground">{userEmail}</span>
            </p>
          )}
        </div>
      </div>

      <EmailModal open={showEmailModal} onClose={() => setShowEmailModal(false)} onSubmit={handleEmailSubmit} />
    </section>
  );
}
