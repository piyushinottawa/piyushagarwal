export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 text-white flex items-center justify-center px-6">
      <div className="max-w-3xl text-center">

        <h1 className="text-5xl font-bold mb-6">
          SA Training Program
        </h1>

        <p className="text-xl text-slate-300 mb-8">
          Professional training and coaching services.
        </p>

        {/* Book Training Button */}
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 px-10 py-4 rounded-lg text-lg font-semibold transition"
        >
          Book Training
        </a>

        {/* Stripe Payment Section */}
        <div className="mt-8">
          <p className="text-sm text-slate-400 mb-4">
            Secure online payment via Stripe
          </p>

          <a
            href="https://buy.stripe.com/drm9AT4rO9Kd3nKgqobf000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition"
          >
            Pay SA Tuition Fee (CA$25)
          </a>
        </div>

      </div>
    </main>
  );
}