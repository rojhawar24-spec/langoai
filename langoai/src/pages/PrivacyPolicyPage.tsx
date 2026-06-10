import { useNavigate } from "react-router-dom";

export default function PrivacyPolicyPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-800 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-indigo-700 dark:hover:bg-indigo-950/40 dark:hover:text-indigo-300"
        >
          <span aria-hidden="true">←</span>
          Back
        </button>

        <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">
          Privacy Policy
        </h1>

        <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 10, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              1. Introduction
            </h2>
            <p>
              Welcome to <strong>Lango AI</strong>. We are committed to protecting your personal
              information and your right to privacy.
            </p>
            <p className="mt-2">
              By using Lango AI, you agree to the collection and use of information in accordance
              with this policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              2. Information We Collect
            </h2>
            <p className="mb-2">
              <strong>Account:</strong> Email, username, hashed password, account settings, and login data.
            </p>
            <p className="mb-2">
              <strong>Learning Data:</strong> XP, level, streak, selected languages, completed lessons,
              vocabulary, tests, scores, and progress.
            </p>
            <p className="mb-2">
              <strong>Preferences:</strong> Theme, interface language, learning language, and daily goal settings.
            </p>
            <p className="mb-2">
              <strong>AI Chat:</strong> Messages you send to the AI Tutor are processed through the Claude API
              only when AI access is active.
            </p>
            <p>
              <strong>Payments:</strong> When you pay for AI Premium, Ko-fi/PayPal may send payment details
              such as payment status, amount, currency, email, message ID, and expiry date to verify your 30-day access.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              3. How We Store Your Data
            </h2>
            <p className="mb-2">
              Lango AI may store learning and account data in your browser localStorage and may store payment
              verification data on our server/database so AI Premium can unlock automatically.
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Local app data may be stored in your browser.</li>
              <li>Payment verification data may be stored securely on the server.</li>
              <li>You can delete your account data via Settings where available.</li>
              <li>Server requests should use HTTPS/TLS encryption in transit.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              4. How We Use Your Information
            </h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>Manage your account and login.</li>
              <li>Personalise lessons, progress, language, and learning experience.</li>
              <li>Calculate XP, levels, streaks, achievements, and daily goals.</li>
              <li>Provide AI tutoring through Claude API when AI access is active.</li>
              <li>Verify €4 payments and unlock AI Premium for 30 days.</li>
              <li>Show ads to free users where applicable.</li>
              <li>Improve platform reliability and security.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              5. Data Sharing
            </h2>
            <p className="mb-2">
              We do <strong>not</strong> sell your personal data. Limited sharing may happen with:
            </p>
            <ul className="ml-5 list-disc space-y-1">
              <li>
                <strong>Anthropic/Claude API:</strong> AI chat messages are sent to Claude to generate AI Tutor responses.
              </li>
              <li>
                <strong>Ko-fi/PayPal:</strong> Payment data is processed by Ko-fi and/or PayPal to verify AI Premium access.
              </li>
              <li>
                <strong>Service providers:</strong> Hosting, database, or technical tools needed to run the website.
              </li>
              <li>
                <strong>Legal:</strong> If required by law or to protect the service from abuse.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              6. Cookies and Storage
            </h2>
            <p>
              We use browser storage, including localStorage, for login, preferences, language choice,
              progress, and AI access status. Payment providers may use their own cookies or storage when
              you visit their payment pages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              7. Your Rights
            </h2>
            <p className="mb-2">Depending on your location, you may have rights to:</p>
            <ul className="ml-5 list-disc space-y-1">
              <li>Access your data.</li>
              <li>Correct your data.</li>
              <li>Delete your account or local data.</li>
              <li>Ask questions about payment or AI data.</li>
              <li>Contact us at privacy@langoai.com.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              8. Children
            </h2>
            <p>
              Lango AI is not intended for children under 13. If you believe a child has provided personal
              information, contact us so we can review and delete it where appropriate.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              9. Changes
            </h2>
            <p>
              We may update this Privacy Policy. Updates will be posted on this page. Continued use of
              Lango AI after updates means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              10. Contact
            </h2>
            <p>privacy@langoai.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}