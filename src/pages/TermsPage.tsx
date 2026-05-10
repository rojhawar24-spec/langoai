export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900">
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <h1 className="mb-2 text-3xl font-extrabold text-slate-900 dark:text-white">Terms of Service</h1>
      <p className="mb-8 text-sm text-slate-500 dark:text-slate-400">Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</p>
      <div className="space-y-8 text-sm leading-relaxed text-slate-700 dark:text-slate-300">
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">1. Acceptance</h2>
          <p>By using <strong>Lango AI</strong>, you agree to these Terms.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">2. Account</h2>
          <p className="mb-2">Provide accurate info. Keep credentials secure. One account per person.</p>
          <p>We may suspend accounts that violate these Terms.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">3. Free & Premium</h2>
          <p className="mb-2"><strong>Free:</strong> Core lessons, vocabulary, tests, exercises. Ads included.</p>
          <p><strong>Premium (€3 one-time):</strong> Unlimited Claude AI tutor, ad-free, premium badge.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">4. User Conduct</h2>
          <ul className="ml-5 list-disc space-y-1">
            <li>No illegal use.</li>
            <li>No unauthorized access.</li>
            <li>No exploits or bots.</li>
            <li>No harmful AI content.</li>
          </ul>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">5. Intellectual Property</h2>
          <p>Lango AI content (lessons, tests, code) is our IP. Your learning data is yours.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">6. AI Disclaimer</h2>
          <p>AI tutor powered by Claude. May occasionally contain errors. Supplementary tool only.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">7. Liability</h2>
          <p>Service provided "as is." No guaranteed outcomes. Not liable for indirect damages.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">8. Termination</h2>
          <p>Delete account anytime via Settings. Data permanently removed. No refunds on premium.</p>
        </section>
        <section>
          <h2 className="mb-3 text-lg font-bold text-slate-900 dark:text-white">9. Contact</h2>
          <p>legal@langoai.com</p>
        </section>
      </div>
    </div>
    </div>
  );
}
