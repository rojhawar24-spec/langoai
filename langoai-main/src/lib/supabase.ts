// src/lib/supabase.ts
// ──────────────────────────────────────────────
// Supabase client — één instantie voor de hele app
// ──────────────────────────────────────────────
import { createClient } from "@supabase/supabase-js";

// Types voor de database
export interface ProfileRow {
  id: string;
  username: string;
  email: string;
  current_language: string | null;
  total_xp: number;
  level: number;
  streak: number;
  last_activity_date: string | null;
  theme: "light" | "dark";
  interface_language: string;
  premium: boolean;
  premium_expires_at: string | null;
  created_at: string;
  coins: number;
  streak_freezes: number;
}

export type Database = {
  public: {
    Tables: {
      profiles: {
        Row: ProfileRow;
        Insert: Omit<ProfileRow, "created_at">;
        Update: Partial<Omit<ProfileRow, "id" | "created_at">>;
      };
    };
  };
};

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env.local"
  );
}

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    flowType: "implicit",
  },
});
