export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">
            Professional Training & Certification
          </h1>

          <p className="text-slate-300 text-lg">
            Hands-on training in cybersecurity, governance, project management, and enterprise best practices, delivered by an MBA, CISSP, CISM, and PMP-certified consultant with 25+ years of industry experience..
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-4">
      Certification Training
    </h2>

    <ul className="space-y-3 text-slate-300">
      <li>• CISSP Exam Preparation</li>
      <li>• CISM Exam Preparation</li>
      <li>• PMP Exam Preparation</li>
    </ul>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-4">
      Cybersecurity & GRC
    </h2>

    <ul className="space-y-3 text-slate-300">
      <li>• Risk Management</li>
      <li>• Governance & Compliance</li>
      <li>• NIST CSF, RMF & ITSG-33</li>
      <li>• ISO 27001</li>
      <li>• Security Assessments</li>
    </ul>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-4">
      Project & Program Management
    </h2>

    <ul className="space-y-3 text-slate-300">
      <li>• Agile & Waterfall Delivery</li>
      <li>• PMO Governance</li>
      <li>• Portfolio Management</li>
      <li>• Project Delivery Excellence</li>
    </ul>
  </div>

  <div className="bg-slate-900 border border-slate-800 rounded-xl p-8">
    <h2 className="text-2xl font-bold mb-4">
      Corporate Training
    </h2>

    <ul className="space-y-3 text-slate-300">
  <li>• Cybersecurity Workshops</li>
  <li>• Enterprise Risk Management Training</li>
  <li>• Security Awareness Programs</li>
  <li>• Customized Corporate Training</li>
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