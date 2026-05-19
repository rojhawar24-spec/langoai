import { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { getVocabularyWords, LANGUAGE_FLAGS } from "@/content/index";
import type { VocabWord } from "@/content/types";
import { useTranslate } from "@/i18n/I18nContext";
import { XP_REWARDS, createXPAwarder } from "@/utils/xp";
import { savePosition, getSavedPosition } from "@/utils/savePosition";
import Celebration from "@/components/Celebration";
const LEARNED_KEY = "langlearn_learned_words";

function getLearnedWords(): Set<string> {
  try { return new Set(JSON.parse(localStorage.getItem(LEARNED_KEY) ?? "[]")); } catch { return new Set(); }
}
function markWordLearned(id: string): Set<string> {
  const s = getLearnedWords();
  s.add(id);
  localStorage.setItem(LEARNED_KEY, JSON.stringify([...s]));
  return s;
}

export default function VocabularyPage() {
  const { user, updateProfile } = useAuth();
  const { t } = useTranslate();
  const navigate = useNavigate();
  const languageCode = user?.currentLanguage ?? "en";
  const words = getVocabularyWords(languageCode);
  const awardXP = createXPAwarder(updateProfile);
  const awardRef = useRef(awardXP);
  awardRef.current = awardXP;

  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [selectedWord, setSelectedWord] = useState<VocabWord | null>(null);
  const [learned, setLearned] = useState<Set<string>>(getLearnedWords);
  const [showCelebration, setShowCelebration] = useState(false);
  const [newLevel, setNewLevel] = useState(0);
  const [restored, setRestored] = useState(false);

  useEffect(() => {
    if (restored) return;
    const pos = getSavedPosition();
    if (pos && pos.page === "vocabulary") {
      if (pos.vocabularyTopic) setSelectedTopic(pos.vocabularyTopic);
      if (pos.vocabularyWordId) {
        const word = words.find((w) => w.id === pos.vocabularyWordId);
        if (word) setSelectedWord(word);
      }
    }
    setRestored(true);
  }, [words, restored]);

  useEffect(() => {
    if (!restored) return;
    if (selectedWord) {
      savePosition({ page: "vocabulary", timestamp: Date.now(), vocabularyWordId: selectedWord.id, vocabularyTopic: selectedTopic ?? undefined });
    } else if (selectedTopic) {
      savePosition({ page: "vocabulary", timestamp: Date.now(), vocabularyTopic: selectedTopic });
    }
  }, [selectedWord, selectedTopic, restored]);

  const searchText = (selectedTopic ?? "").toLowerCase();
  const filtered = searchText
    ? words.filter((w) =>
        w.word.toLowerCase().includes(searchText) ||
        w.translation.toLowerCase().includes(searchText) ||
        w.topic.toLowerCase().includes(searchText)
      )
    : words;
  const learnedCount = words.filter((w) => learned.has(w.id)).length;

  const handleLearn = useCallback((word: VocabWord) => {
    if (learned.has(word.id)) return;
    const updated = markWordLearned(word.id);
    setLearned(new Set(updated));
    const result = awardRef.current(XP_REWARDS.VOCABULARY_WORD_LEARNED);
    if (result.leveledUp) {
      setNewLevel(result.newLevel);
      setShowCelebration(true);
    }
  }, [learned]);

  // ---- Word detail ----
  if (selectedWord) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        {showCelebration && <Celebration newLevel={newLevel} onDone={() => setShowCelebration(false)} />}
        <button onClick={() => setSelectedWord(null)} className="mb-6 flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
          {t("vocab.back")}
        </button>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-700 dark:bg-slate-800">
          <div className="mb-4 inline-flex items-center gap-1 rounded-full bg-purple-100 px-3 py-1 text-xs font-medium text-purple-700 dark:bg-purple-900/40 dark:text-purple-300">
            {selectedWord.partOfSpeech} · {selectedWord.topic}
          </div>
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white">{selectedWord.word}</h1>
          <p className="mt-2 text-xl text-indigo-600 dark:text-indigo-400">→ {selectedWord.translation}</p>

          <div className="mt-6 rounded-xl bg-slate-50 p-5 dark:bg-slate-800/50">
            <p className="text-xs font-medium uppercase tracking-wide text-slate-400">Example</p>
            <p className="mt-1 text-lg italic text-slate-700 dark:text-slate-300">"{selectedWord.example}"</p>
          </div>

          <div className="mt-6 flex items-center justify-between">
            {learned.has(selectedWord.id) ? (
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-4 py-1.5 text-sm font-semibold text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300">✅ Learned · +{XP_REWARDS.VOCABULARY_WORD_LEARNED} XP</span>
            ) : (
              <button onClick={() => handleLearn(selectedWord)} className="rounded-xl bg-purple-600 px-6 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-purple-700">
                Mark as Learned · +{XP_REWARDS.VOCABULARY_WORD_LEARNED} XP
              </button>
            )}
          </div>
        </div>
      </div>
      </div>
    );
  }

  // ---- Word list ----
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
      <button onClick={() => navigate("/dashboard")} className="mb-6 flex items-center gap-1 text-sm text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-400">
        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg>
        {t("generic.back_dashboard")}
      </button>

      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">📦 {t("vocab.title")}</h1>
        <p className="mt-1 text-slate-500 dark:text-slate-400">
          {LANGUAGE_FLAGS[languageCode]} Build your word bank · {learnedCount}/{words.length} learned
        </p>
      </div>

      {/* Search bar */}
      <div className="mb-6">
        <div className="relative">
          <svg className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          <input
            type="text"
            value={selectedTopic ?? ""}
            onChange={(e) => setSelectedTopic(e.target.value || null)}
            placeholder={t("vocab.search")}
            className="w-full rounded-xl border border-slate-300 py-2.5 pl-10 pr-4 text-sm outline-none transition focus:border-purple-400 focus:ring-2 focus:ring-purple-200 dark:border-slate-600 dark:bg-slate-800 dark:text-white dark:focus:border-purple-500"
          />
        </div>
      </div>

      {/* Progress bar */}
      <div className="mb-6">
        <div className="mb-1 flex justify-between text-xs text-slate-500">{learnedCount} / {words.length} learned</div>
        <div className="h-2 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-700">
          <div className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all" style={{ width: `${words.length ? (learnedCount/words.length)*100 : 0}%` }} />
        </div>
      </div>

      {/* Word cards */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((word) => (
          <button key={word.id} onClick={() => setSelectedWord(word)}
            className={`rounded-xl border-2 p-4 text-left transition hover:shadow-md ${
              learned.has(word.id)
                ? "border-emerald-200 bg-emerald-50/50 dark:border-emerald-800 dark:bg-emerald-900/10"
                : "border-slate-200 bg-white hover:border-purple-300 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-purple-500"
            }`}>
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-400">{word.partOfSpeech}</span>
              {learned.has(word.id) && <span className="text-xs text-emerald-500">✅</span>}
            </div>
            <p className="mt-1 text-lg font-bold text-slate-800 dark:text-slate-200">{word.word}</p>
            <p className="text-sm text-indigo-600 dark:text-indigo-400">{word.translation}</p>
          </button>
        ))}
      </div>


    </div>
    </div>
  );
}
