export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white py-16 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-6xl font-bold mb-4">
            Training & Mentoring
          </h1>

          <p className="text-xl text-slate-300">
            Executive training, certification preparation, and mentoring
            services delivered by Piyush Agarwal.
          </p>
        </div>

        {/* Training Areas */}
        <div className="grid md:grid-cols-2 gap-6">

          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              Cybersecurity Certifications
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• CISSP Exam Preparation</li>
              <li>• CISM Exam Preparation</li>
              <li>• PMP Exam Preparation</li>
              <li>• Security Leadership Coaching</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              Leadership & Governance
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Risk Management</li>
              <li>• Governance & Compliance</li>
              <li>• Executive Leadership Mentoring</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              Project & Program Management
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• PMP Coaching</li>
              <li>• Agile & Waterfall Delivery</li>
              <li>• PMO Governance</li>
            </ul>
          </div>

          <div className="bg-slate-800 p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-6">
              Career Coaching
            </h2>

            <ul className="space-y-3 text-slate-300">
              <li>• Resume Review</li>
              <li>• Interview Preparation</li>
              <li>• Career Mentoring</li>
            </ul>
          </div>

        </div>

        {/* Booking Section */}
        <div className="mt-16 bg-slate-800 rounded-xl p-8 text-center">

          <h2 className="text-4xl font-bold mb-4">
            Book Training Session
          </h2>

          <h3 className="text-2xl font-semibold mb-2">
            SA Training Program
          </h3>

          <p className="text-slate-300 mb-6">
            Professional training and coaching services.
          </p>

          <a
            href="/contact"
            className="inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-lg text-lg font-semibold transition"
          >
            Book Training
          </a>

          <p className="text-sm text-slate-400 mt-6">
            Secure online payment via Stripe
          </p>

          <div className="mt-4">
            <a
              href="https://buy.stripe.com/dRm9AT4rO9Kd3nKgqobfO00"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
            >
              Pay SA Tuition Fee (CA$25)
            </a>
          </div>

        </div>

      </div>
    </main>
  );
}
