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
  getCurrentUser,
  setCurrentUser,
  logout as clearSession,
  updateUser,
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

  useEffect(() => {
    const stored = getCurrentUser();
    setUser(stored);
    setIsLoading(false);
  }, []);

  const login = useCallback((userData: UserData) => {
    setCurrentUser(userData);
    setUser(userData);
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setUser(null);
  }, []);

  const refreshUser = useCallback(() => {
    const stored = getCurrentUser();
    setUser(stored);
  }, []);

  const updateProfile = useCallback(
    (updates: Partial<UserData>) => {
      if (!user) return;
      updateUser(user.id, updates);
      const refreshed = getCurrentUser();
      setUser(refreshed);
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
