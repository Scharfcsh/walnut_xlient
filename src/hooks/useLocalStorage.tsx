import { useState, useEffect } from "react";
import type { UserData, CallDurationData } from "@/types/Analytics";

const STORAGE_KEY = "voice_analytics_user_data";

export function useLocalStorage() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setUserData(JSON.parse(stored));
    }
  }, []);

  const saveUserData = (email: string, callDurationData: CallDurationData[]) => {
    const data: UserData = {
      email,
      callDurationData,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    setUserData(data);
  };

  const getUserByEmail = (email: string): UserData | null => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const data = JSON.parse(stored) as UserData;
      if (data.email === email) {
        return data;
      }
    }
    return null;
  };

  return { userData, saveUserData, getUserByEmail };
}
