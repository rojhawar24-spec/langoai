export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">Privacy Policy</h1>
      <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">1. Introduction</h2>
          <p>Welcome to <strong>Lango AI</strong> ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.</p>
          <p className="mt-2">By using Lango AI, you agree to the collection and use of information in accordance with this policy.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">2. Information We Collect</h2>
          <p className="mb-2"><strong>Account:</strong> Email, username, hashed password. Never plain text.</p>
          <p className="mb-2"><strong>Learning Data:</strong> XP, level, streak, languages, completed lessons, vocabulary, test scores.</p>
          <p className="mb-2"><strong>Preferences:</strong> Theme (light/dark), interface language — stored locally.</p>
          <p><strong>AI Chat:</strong> Messages processed via Claude API. Only when you unlock AI access.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">3. How We Store Your Data</h2>
          <p className="mb-2">Lango AI stores all user data in your browser's <strong>localStorage</strong>.</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Data stays on your device — no external servers.</li>
            <li>Delete anytime via Settings → Account.</li>
            <li>Future server version: TLS encryption in transit and at rest.</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">4. How We Use Your Information</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>Manage your account.</li>
            <li>Personalise learning (lessons, progress).</li>
            <li>Calculate XP, levels, streaks, achievements.</li>
            <li>AI tutoring (Claude API).</li>
            <li>Ads (free users only).</li>
            <li>Platform improvements.</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">5. Data Sharing</h2>
          <p className="mb-2">We do <strong>not</strong> sell your data. Limited sharing:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li><strong>Claude API:</strong> Chat messages sent to Anthropic per their privacy policy.</li>
            <li><strong>Legal:</strong> If required by law.</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">6. Cookies & Storage</h2>
          <p>We use localStorage for auth, preferences, and progress. No third-party tracking.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">7. Your Rights</h2>
          <p className="mb-2">You can:</p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Access, correct, or delete your data</li>
            <li>Delete account in Settings → Account</li>
            <li>Contact: privacy@langoai.com</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">8. Children</h2>
          <p>Lango AI is not for children under 13.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">9. Changes</h2>
          <p>Updates posted here. Continued use = acceptance.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">10. Contact</h2>
          <p>privacy@langoai.com</p>
        </section>
      </div>
    </div>
    </div>
  );
}
