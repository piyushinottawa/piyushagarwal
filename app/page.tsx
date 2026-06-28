import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-blue-400 font-semibold uppercase tracking-wide mb-4">
              Certification Training
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Advance Your Career Through Certification Training
            </h1>

            <p className="text-xl text-slate-300 leading-relaxed mb-6">
              Practical certification training for professionals preparing for
              CISSP, CISM, PMP, cybersecurity leadership, risk management, project and program management,
              and long term career growth .
            </p>

            <p className="text-lg text-slate-400 mb-8">
              Led by Piyush Agarwal with over 25 years
              of public and private sector experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/training"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold text-center transition"
              >
                View Training Programs
              </a>

              <a
                href="mailto:info@ottawait.net"
                className="border border-blue-500 text-blue-400 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold text-center transition"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="text-center bg-slate-900 border border-slate-800 rounded-2xl p-8">
              <Image
                src="/images/piyush.png"
                alt="Piyush Agarwal"
                width={260}
                height={260}
                className="rounded-full mx-auto border-4 border-blue-500 shadow-2xl"
                priority
              />

              <h2 className="text-3xl font-bold mt-6">
                Piyush Agarwal
              </h2>

              <p className="text-blue-400 mt-2">
                MBA | CISSP | CISM | PMP | ITIL | SAFe
              </p>

              <p className="text-slate-400 mt-4">
                Helping professionals prepare for certifications and advance
                their careers through practical mentoring and training.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}