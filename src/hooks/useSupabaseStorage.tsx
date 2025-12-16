import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import type { UserData, CallDurationData } from "@/types/Analytics";
import { toast } from "sonner";

export function useSupabaseStorage() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(false);

  // Load data from local storage initially as a fallback or cache
  useEffect(() => {
    const stored = localStorage.getItem("voice_analytics_user_data");
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const saveUserData = async (email: string, callDurationData: CallDurationData[]) => {
    setLoading(true);
    try {
      // Try to save to Supabase first
      const { error } = await supabase
        .from('user_analytics')
        .upsert({ 
          email, 
          call_duration_data: callDurationData,
          updated_at: new Date().toISOString()
        }, { onConflict: 'email' });
        
      if (error) {
        // If Supabase fails, fall back to local storage
        console.warn("Supabase save failed, using local storage:", error.message);
        toast.warning("Cloud save failed, data saved locally instead");
      }

      const data: UserData = {
        email,
        callDurationData,
        savedAt: new Date().toISOString(),
      };
      
      // Always save to local storage as backup/cache
      localStorage.setItem("voice_analytics_user_data", JSON.stringify(data));
      setUserData(data);
      
      return { success: true };
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error("Failed to save data to cloud");
      return { success: false, error };
    } finally {
      setLoading(false);
    }
  };

  const getUserByEmail = async (email: string): Promise<UserData | null> => {
    setLoading(true);
    try {
      // Try to fetch from Supabase first
      const { data, error } = await supabase
        .from('user_analytics')
        .select('*')
        .eq('email', email)
        .single();
        
      if (error && error.code !== 'PGRST116') {
        console.warn("Supabase fetch failed:", error.message);
        // Fall back to local storage if Supabase fails
      } else if (data) {
        return {
          email: data.email,
          callDurationData: data.call_duration_data,
          savedAt: data.updated_at
        };
      }

      // Check local storage as fallback
      const stored = localStorage.getItem("voice_analytics_user_data");
      if (stored) {
        const localData = JSON.parse(stored) as UserData;
        if (localData.email === email) {
          return localData;
        }
      }
      
      return null;
    } catch (error) {
      console.error("Error fetching data:", error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { userData, saveUserData, getUserByEmail, loading };
}
