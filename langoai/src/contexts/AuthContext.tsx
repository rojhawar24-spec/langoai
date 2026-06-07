// src/contexts/AuthContext.tsx
import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import type { UserData } from "@/utils/storage";
import {
  apiGetMe,
  apiLogout,
  apiUpdateUser,
} from "@/utils/storage";

interface AuthContextType {
  user: UserData | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (user: UserData) => void;
  logout: () => void;
  refreshUser: () => void;
  updateProfile: (updates: Partial<UserData>) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On startup: check if there is a valid session token on the server
  useEffect(() => {
    apiGetMe()
      .then((u) => setUser(u))
      .finally(() => setIsLoading(false));
  }, []);

  // Called right after login/register — the user object comes from the server response
  const login = useCallback((userData: UserData) => {
    setUser(userData);
  }, []);

  const logout = useCallback(async () => {
    await apiLogout();
    setUser(null);
  }, []);

  const refreshUser = useCallback(() => {
    apiGetMe().then((u) => setUser(u));
  }, []);

  const updateProfile = useCallback(
    async (updates: Partial<UserData>) => {
      if (!user) return;
      try {
        const updated = await apiUpdateUser(updates);
        setUser(updated);
      } catch (err) {
        console.error("updateProfile failed:", err);
      }
    },
    [user]
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        refreshUser,
        updateProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return ctx;
}