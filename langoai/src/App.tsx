import { useState, useCallback, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { I18nProvider } from "@/i18n/I18nContext";
import ScrollToTop from "@/components/ScrollToTop";
import ProtectedRoute from "@/components/ProtectedRoute";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import AIChat from "@/components/AIChat";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

// Preload critical pages immediately
const preloadDashboard = () => import("@/pages/DashboardPage");
preloadDashboard();

// Eager imports for auth pages (always needed)
// Lazy imports for feature pages (loaded on demand)
const DashboardPage = lazy(() => import("@/pages/DashboardPage"));
const ProfilePage = lazy(() => import("@/pages/ProfilePage"));
const SettingsPage = lazy(() => import("@/pages/SettingsPage"));
const PremiumPage = lazy(() => import("@/pages/PremiumPage"));
const GrammarPage = lazy(() => import("@/pages/GrammarPage"));
const VocabularyPage = lazy(() => import("@/pages/VocabularyPage"));
const TestPage = lazy(() => import("@/pages/TestPage"));
const MistakesPage = lazy(() => import("@/pages/MistakesPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage = lazy(() => import("@/pages/TermsPage"));
const WordOfTheDayPage = lazy(() => import("@/pages/WordOfTheDayPage"));
const ArenaPage = lazy(() => import("@/pages/ArenaPage"));

function LoadingSpinner() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white dark:bg-slate-900">
      <div className="h-10 w-10 animate-spin rounded-full border-3 border-solid border-indigo-600 border-r-transparent"></div>
    </div>
  );
}

function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat = useCallback(() => setChatOpen(true), []);
  const closeChat = useCallback(() => setChatOpen(false), []);

  return (
    <div className="flex min-h-screen flex-col">
      <TopBar />
      <main className="flex-1 pb-24 lg:pb-8">{children}</main>
      <div className="hidden lg:block"><Footer /></div>
      <BottomNav onOpenChat={openChat} />
      <FloatingChatButton onClick={openChat} />
      <AIChat open={chatOpen} onClose={closeChat} />
    </div>
  );
}

// Component to wrap lazy pages with Suspense - keeps ProtectedRoute outside for better UX
const LazyPage = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<LoadingSpinner />}>{children}</Suspense>
);

// Pre-wrapped protected routes for cleaner JSX
const ProtectedRouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <I18nProvider>
      <ScrollToTop />
      <SpeedInsights />
      <Routes>
              <Route path="/login" element={<><LoginPage /><Footer minimal /></>} />
              <Route path="/register" element={<><RegisterPage /><Footer minimal /></>} />
              <Route path="/privacy" element={<LazyPage><PrivacyPolicyPage /></LazyPage>} />
              <Route path="/terms" element={<LazyPage><TermsPage /></LazyPage>} />
              <Route path="/dashboard" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><DashboardPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/grammar" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><GrammarPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/vocabulary" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><VocabularyPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/tests" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><TestPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/profile" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><ProfilePage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/settings" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><SettingsPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/premium" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><PremiumPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/mistakes" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><MistakesPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/wotd" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><WordOfTheDayPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/arena" element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><ArenaPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </I18nProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
