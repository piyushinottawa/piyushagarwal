export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Training & Mentoring
          </h1>

          <p className="text-slate-300 text-lg">
            Executive training, certification preparation, and mentoring
            services delivered by Piyush Agarwal.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Cybersecurity Certifications
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• CISSP Exam Preparation</li>
              <li>• CISM Exam Preparation</li>
              <li>• PMP Exam Preparation</li>
              <li>• Security Leadership Coaching</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Leadership & Governance
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Risk Management</li>
              <li>• Governance & Compliance</li>
              <li>• Executive Leadership Mentoring</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Project & Program Management
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• PMP Coaching</li>
              <li>• Agile & Waterfall Delivery</li>
              <li>• PMO Governance</li>
            </ul>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Career Coaching
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Resume Review</li>
              <li>• Interview Preparation</li>
              <li>• Career Mentoring</li>
            </ul>
          </div>

        </div>

        <div className="mt-12 bg-slate-900 border border-slate-800 rounded-xl p-10 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Book Training Session
          </h2>

          <p className="text-slate-300 mb-6">
            Professional certification training and coaching services.
          </p>

          <a
            href="mailto:info@ottawait.net"
            className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold transition"
          >
            Book Training
          </a>

          <div className="mt-8">
            <p className="text-slate-400 mb-3">
              Secure online payment via Stripe
            </p>

            <a
              href="https://buy.stripe.com/dRm9AT4rO9Kd3nKgqobfO00"
              target="_blank"
              className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Pay SA Tuition Fees
            </a>
          </div>
        </div>

      </div>
    </main>
  );
}