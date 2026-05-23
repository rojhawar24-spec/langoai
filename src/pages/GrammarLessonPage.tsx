import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getGrammarLessons } from "@/content/index";
import GrammarLessonDesign from "@/components/GrammarLessonDesign";
import { useState, useMemo } from "react";
import { useTranslate } from "@/i18n/I18nContext";

export default function GrammarLessonPage() {
  const { id } = useParams<{ id: string }>();
  const nav = useNavigate();
  const { user, updateProfile } = useAuth();
  const { t } = useTranslate();

  const lang = user?.interfaceLanguage ?? "nl";
  const allLessons = useMemo(() => getGrammarLessons(lang), [lang]);
  const lesson = useMemo(() => allLessons.find((l) => l.id === id), [allLessons, id]);
  const [completed, setCompleted] = useState(false);

  if (!lesson) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-slate-600 dark:text-slate-400">{t("grammar.no_match") || "Les niet gevonden"}</p>
      </div>
    );
  }

  return (
    <GrammarLessonDesign
      lesson={lesson}
      completed={completed}
      onComplete={() => setCompleted(true)}
      hasTest={false}
      onTest={() => {}}
      onBack={() => nav(-1)}
    />
  );
}
