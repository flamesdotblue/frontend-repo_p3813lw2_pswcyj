import { Sparkles, ShieldCheck, Clock, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-700 text-xs font-medium">
              <Sparkles size={16} />
              AI-powered Quiz Management
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl font-bold tracking-tight text-slate-900">
              Learn smarter with Quiz Mantra
            </h1>
            <p className="mt-4 text-slate-600 text-lg leading-relaxed">
              Create, assign, and evaluate quizzes with intelligent insights. Generate questions from PDFs, get instant AI feedback, and visualize performance trends.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href="#login"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
              >
                Get started with Google
                <ArrowRight size={18} />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
              >
                Explore features
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-indigo-600" size={18} /> Secure
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-indigo-600" size={18} /> Real-time
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="text-indigo-600" size={18} /> AI-first
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl bg-white ring-1 ring-slate-200 p-6 shadow-sm">
              <div className="h-full w-full rounded-xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-sky-500/10 grid place-items-center">
                <div className="text-center">
                  <div className="text-7xl">🧠</div>
                  <p className="mt-3 text-slate-700 font-medium">AI creates and evaluates your quizzes</p>
                  <p className="text-slate-500 text-sm">Upload a PDF → Auto-generate questions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
