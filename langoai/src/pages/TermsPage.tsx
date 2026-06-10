import { useNavigate } from "react-router-dom";

export default function TermsPage() {
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
          Terms of Service
        </h1>

        <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">
          Last updated: June 10, 2026
        </p>

        <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              1. Acceptance
            </h2>
            <p>
              By using <strong>Lango AI</strong>, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              2. Account
            </h2>
            <p className="mb-2">
              Provide accurate info. Keep credentials secure. One account per person.
            </p>
            <p>We may suspend accounts that violate these Terms.</p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              3. Free & AI Premium
            </h2>
            <p className="mb-2">
              <strong>Free:</strong> Core lessons, vocabulary, tests, and exercises. Ads may be included.
            </p>
            <p className="mb-2">
              <strong>AI Premium (€4 for 30 days):</strong> One payment of €4 unlocks the AI Tutor for 30 days only.
            </p>
            <p>
              This is not lifetime access. After 30 days, AI access ends and a new €4 payment is required to unlock another 30 days.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              4. User Conduct
            </h2>
            <ul className="ml-5 list-disc space-y-1">
              <li>No illegal use.</li>
              <li>No unauthorized access.</li>
              <li>No exploits or bots.</li>
              <li>No harmful AI content.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              5. Intellectual Property
            </h2>
            <p>
              Lango AI content, including lessons, tests, text, design, and code, belongs to Lango AI.
              Your learning data remains yours.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              6. AI Disclaimer
            </h2>
            <p>
              The AI tutor is powered by Claude. AI answers may occasionally contain mistakes.
              The AI tutor is a learning support tool only.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              7. Payment and Refunds
            </h2>
            <p>
              AI Premium payments are for 30 days of AI Tutor access. Because access starts after payment,
              payments are non-refundable unless required by law.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              8. Liability
            </h2>
            <p>
              Service is provided "as is." We do not guarantee learning results and are not liable for indirect damages.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              9. Termination
            </h2>
            <p>
              You can delete your account anytime via Settings. Account data may be permanently removed.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">
              10. Contact
            </h2>
            <p>legal@langoai.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}