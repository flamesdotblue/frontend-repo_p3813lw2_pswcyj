import { Google } from "lucide-react";

export default function CallToAction() {
  return (
    <section id="login" className="py-16 sm:py-24 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold">Sign in and start quizzing</h2>
            <p className="mt-3 text-indigo-100">
              Use Google to quickly sign in. Your role (Student, Teacher, Admin) will personalize the dashboard.
            </p>
          </div>
          <div className="md:justify-self-end">
            <a
              href="#"
              className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-50 shadow-lg"
            >
              <Google size={20} className="text-red-500" />
              Continue with Google
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
