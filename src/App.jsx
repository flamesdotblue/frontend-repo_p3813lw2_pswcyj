import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";

function Divider() {
  return <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />;
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <Hero />
      <Divider />
      <Features />
      <Divider />
      <CallToAction />
      <footer className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
            <p>© {new Date().getFullYear()} Quiz Mantra. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-indigo-600">Privacy</a>
              <a href="#" className="hover:text-indigo-600">Terms</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
