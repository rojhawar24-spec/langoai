import { useState, useCallback } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import DashboardPage from "@/pages/DashboardPage";

import ProfilePage from "@/pages/ProfilePage";
import SettingsPage from "@/pages/SettingsPage";
import PremiumPage from "@/pages/PremiumPage";
import GrammarPage from "@/pages/GrammarPage";
import VocabularyPage from "@/pages/VocabularyPage";
import TestPage from "@/pages/TestPage";
import MistakesPage from "@/pages/MistakesPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsPage from "@/pages/TermsPage";
import WordOfTheDayPage from "@/pages/WordOfTheDayPage";
import ArenaPage from "@/pages/ArenaPage";

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

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <I18nProvider>
            <ScrollToTop />
            <Routes>
              <Route path="/login" element={<><LoginPage /><Footer minimal /></>} />
              <Route path="/register" element={<><RegisterPage /><Footer minimal /></>} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/dashboard" element={<ProtectedRoute><AuthenticatedLayout><DashboardPage /></AuthenticatedLayout></ProtectedRoute>} />

              <Route path="/grammar" element={<ProtectedRoute><AuthenticatedLayout><GrammarPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/vocabulary" element={<ProtectedRoute><AuthenticatedLayout><VocabularyPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/tests" element={<ProtectedRoute><AuthenticatedLayout><TestPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><AuthenticatedLayout><ProfilePage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/settings" element={<ProtectedRoute><AuthenticatedLayout><SettingsPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/premium" element={<ProtectedRoute><AuthenticatedLayout><PremiumPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/mistakes" element={<ProtectedRoute><AuthenticatedLayout><MistakesPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/wotd" element={<ProtectedRoute><AuthenticatedLayout><WordOfTheDayPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/arena" element={<ProtectedRoute><AuthenticatedLayout><ArenaPage /></AuthenticatedLayout></ProtectedRoute>} />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </I18nProvider>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}
