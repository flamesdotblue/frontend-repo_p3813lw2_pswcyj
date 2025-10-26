import { BookOpen, FileUp, BarChart3, CalendarDays, Megaphone, Users, MessageSquare, Trophy } from "lucide-react";

const features = [
  { icon: FileUp, title: "PDF → AI Questions", desc: "Upload PDFs and instantly generate high-quality questions." },
  { icon: BookOpen, title: "Quiz Builder", desc: "Create MCQ and short answer questions with rich editing." },
  { icon: BarChart3, title: "Performance Analytics", desc: "Identify strengths and weak areas with smart insights." },
  { icon: CalendarDays, title: "Smart Scheduling", desc: "Plan quizzes, deadlines, and results in one calendar." },
  { icon: Megaphone, title: "Announcements", desc: "Keep everyone updated with alerts and news." },
  { icon: Users, title: "Role-based Dashboards", desc: "Student, Teacher, and Admin views tailored to needs." },
  { icon: MessageSquare, title: "Hints & Feedback", desc: "Two-way messaging for quick support and guidance." },
  { icon: Trophy, title: "Competitions", desc: "Create challenges and leaderboards to motivate." },
];

export default function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Everything you need to run quizzes</h2>
          <p className="mt-3 text-slate-600">Designed for streamlined teaching and focused learning.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="h-full rounded-2xl bg-gradient-to-b from-slate-50 to-white ring-1 ring-slate-200 p-5 hover:shadow-md transition">
              <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900">{title}</h3>
              <p className="mt-1 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
