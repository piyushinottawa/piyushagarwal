export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-slate-900 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <a href="/" className="text-blue-400 hover:text-blue-300">
          ← Back Home
        </a>

        <h1 className="text-5xl font-bold mt-8 mb-6">
          Training & Mentoring
        </h1>

        <p className="text-xl text-slate-300 mb-12">
          Executive training, certification preparation, and mentoring services
          delivered by Piyush Agarwal.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Cybersecurity Certifications
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>• CISSP Exam Preparation</li>
              <li>• CISM Exam Preparation</li>
              <li>• PMP Exam Preparation</li>
              <li>• Security Leadership Coaching</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Leadership & Governance
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Risk Management</li>
              <li>• Governance & Compliance</li>
              <li>• Executive Leadership Mentoring</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Project & Program Management
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>• PMP Coaching</li>
              <li>• Agile & Waterfall Delivery</li>
              <li>• PMO Governance</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">
              Career Coaching
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li>• Resume Review</li>
              <li>• Interview Preparation</li>
              <li>• Career Mentoring</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 bg-slate-800 p-8 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-4">
            Book Training Session
          </h2>

          <p className="text-slate-300 mb-6">
            Secure your training or mentoring session using Stripe payment.
          </p>

          <a
            href="https://buy.stripe.com/test_abc123xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-lg text-lg font-semibold transition"
          >
            Book Training / Pay Now
          </a>

          <p className="text-sm text-slate-400 mt-4">
            Replace this with your real Stripe Payment Link before going live.
          </p>
        </div>
      </div>
    </main>
  );
}