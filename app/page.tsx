export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Piyush Agarwal
        </h1>

        <p className="text-2xl text-blue-400 mb-6">
          Executive Technology & Cybersecurity Leader
        </p>

        <p className="text-lg text-slate-300 mb-4">
          MBA | CISSP | CISM | PMP | ITIL | SAFe
        </p>

        <p className="text-xl text-slate-400 leading-relaxed">
          Over 25 years of experience across public and private sectors,
          with more than 10 years in executive and senior leadership roles
          driving cybersecurity, risk management, governance, and enterprise
          technology transformation.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:info@ottawait.net"
            className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Contact Me
          </a>

          <a
            href="/training"
            className="border border-blue-600 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition"
          >
            Training
          </a>
        </div>
      </div>
    </main>
  );
}