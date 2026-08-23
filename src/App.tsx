import { useState, useCallback, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { AuthProvider } from "@/contexts/AuthContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { AccessibilityProvider } from "@/contexts/AccessibilityContext";
import { I18nProvider } from "@/i18n/I18nContext";
import ScrollToTop from "@/components/ScrollToTop";
import ErrorBoundary from "@/components/ErrorBoundary";
import { PageSkeleton, DashboardSkeleton } from "@/components/Skeleton";
import ProtectedRoute from "@/components/ProtectedRoute";
import PremiumRoute from "@/components/PremiumRoute";
import TopBar from "@/components/TopBar";
import BottomNav from "@/components/BottomNav";
import Footer from "@/components/Footer";
import FloatingChatButton from "@/components/FloatingChatButton";
import AIChat from "@/components/AIChat";
import CookieBanner from "@/components/CookieBanner";
import SplashScreen from "@/components/SplashScreen";
import OfflineBanner from "@/components/OfflineBanner";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import LoginPage from "@/pages/LoginPage";
import RegisterPage from "@/pages/RegisterPage";

// Preload dashboard immediately
const preloadDashboard = () => import("@/pages/DashboardPage");
preloadDashboard();

// Lazy imports
const DashboardPage     = lazy(() => import("@/pages/DashboardPage"));
const ProfilePage       = lazy(() => import("@/pages/ProfilePage"));
const SettingsPage      = lazy(() => import("@/pages/SettingsPage"));
const PremiumPage       = lazy(() => import("@/pages/PremiumPage"));
const GrammarPage       = lazy(() => import("@/pages/GrammarPage"));
const VocabularyPage    = lazy(() => import("@/pages/VocabularyPage"));
const TestPage          = lazy(() => import("@/pages/TestPage"));
const MistakesPage      = lazy(() => import("@/pages/MistakesPage"));
const PrivacyPolicyPage = lazy(() => import("@/pages/PrivacyPolicyPage"));
const TermsPage         = lazy(() => import("@/pages/TermsPage"));
const SecurityCenterPage = lazy(() => import("@/pages/SecurityCenterPage"));
const FaqPage            = lazy(() => import("@/pages/FaqPage"));
const PricingPage        = lazy(() => import("@/pages/PricingPage"));
const WhyLangoAiPage     = lazy(() => import("@/pages/WhyLangoAiPage"));
const ContactPage        = lazy(() => import("@/pages/ContactPage"));
const OnboardingPage     = lazy(() => import("@/pages/OnboardingPage"));
const WordOfTheDayPage  = lazy(() => import("@/pages/WordOfTheDayPage"));
const ArenaPage         = lazy(() => import("@/pages/ArenaPage"));
const ResetPasswordPage = lazy(() => import("@/pages/ResetPasswordPage"));

// ── AuthenticatedLayout ──────────────────────────────────────────────────────
function AuthenticatedLayout({ children }: { children: React.ReactNode }) {
  const [chatOpen, setChatOpen] = useState(false);
  const openChat  = useCallback(() => setChatOpen(true),  []);
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

// ── LazyPage ─────────────────────────────────────────────────────────────────
// ✅ Elke route krijgt zijn eigen ErrorBoundary: als één pagina crasht,
// blijft de rest van de app (navigatie, andere routes) gewoon werken.
const LazyPage = ({ children, dashboard }: { children: React.ReactNode; dashboard?: boolean }) => (
  <ErrorBoundary scope="route">
    <Suspense fallback={dashboard ? <DashboardSkeleton /> : <PageSkeleton />}>
      {children}
    </Suspense>
  </ErrorBoundary>
);

// ── ProtectedRouteWrapper ────────────────────────────────────────────────────
const ProtectedRouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <ProtectedRoute>{children}</ProtectedRoute>
);

const PremiumRouteWrapper = ({ children }: { children: React.ReactNode }) => (
  <PremiumRoute>{children}</PremiumRoute>
);

// ── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  // ✅ splashDone in App — toont 1 keer bij opstarten, niet bij elke navigatie
  const [splashDone, setSplashDone] = useState(false);

  return (
    <BrowserRouter>
      {/* ✅ SplashScreen — 1 keer bij opstarten */}
      {!splashDone && <SplashScreen onDone={() => setSplashDone(true)} />}

      <AuthProvider>
        <ThemeProvider>
          <AccessibilityProvider>
            <I18nProvider>
              <ScrollToTop />
              <SpeedInsights />
            <OfflineBanner />
            <CookieBanner />
            <ScrollToTopButton />
            <Routes>
              {/* Public routes */}
              <Route path="/login"          element={<ErrorBoundary scope="login"><LoginPage /><Footer minimal /></ErrorBoundary>} />
              <Route path="/register"       element={<ErrorBoundary scope="register"><RegisterPage /><Footer minimal /></ErrorBoundary>} />
              <Route path="/reset-password" element={<LazyPage><ResetPasswordPage /></LazyPage>} />
              <Route path="/privacy"        element={<LazyPage><AuthenticatedLayout><PrivacyPolicyPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/terms"          element={<LazyPage><AuthenticatedLayout><TermsPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/security"       element={<LazyPage><AuthenticatedLayout><SecurityCenterPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/faq"            element={<LazyPage><AuthenticatedLayout><FaqPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/pricing"        element={<LazyPage><AuthenticatedLayout><PricingPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/why"            element={<LazyPage><AuthenticatedLayout><WhyLangoAiPage /></AuthenticatedLayout></LazyPage>} />
              <Route path="/contact"        element={<LazyPage><AuthenticatedLayout><ContactPage /></AuthenticatedLayout></LazyPage>} />

              {/* Protected routes */}
              <Route path="/dashboard"  element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage dashboard><AuthenticatedLayout><DashboardPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/onboarding" element={<ProtectedRouteWrapper><LazyPage><OnboardingPage /></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/grammar"    element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><GrammarPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/vocabulary" element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><VocabularyPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/tests"      element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><TestPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/profile"    element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><ProfilePage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/settings"   element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><SettingsPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/premium"    element={<ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><PremiumPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper>} />
              <Route path="/mistakes"   element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><MistakesPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/wotd"       element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><WordOfTheDayPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />
              <Route path="/arena"      element={<PremiumRouteWrapper><ProtectedRouteWrapper><LazyPage><AuthenticatedLayout><ArenaPage /></AuthenticatedLayout></LazyPage></ProtectedRouteWrapper></PremiumRouteWrapper>} />

              {/* Fallback */}
              <Route path="/"  element={<Navigate to="/dashboard" replace />} />
              <Route path="*"  element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </I18nProvider>
          </AccessibilityProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
