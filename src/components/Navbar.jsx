import { Menu, User, LogIn } from "lucide-react";
import { useState } from "react";

function NavLink({ href, children }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
    >
      {children}
    </a>
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-indigo-600 grid place-items-center text-white font-bold">QM</div>
            <span className="text-lg sm:text-xl font-semibold text-slate-800">Quiz Mantra</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#dashboards">Dashboards</NavLink>
            <NavLink href="#reports">Reports</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <button className="inline-flex items-center gap-2 px-3 py-2 rounded-lg text-slate-700 hover:bg-slate-100 transition">
              <User size={18} />
              <span>Profile</span>
            </button>
            <a
              href="#login"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition shadow-sm"
            >
              <LogIn size={18} />
              <span>Login</span>
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg hover:bg-slate-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle Menu"
          >
            <Menu />
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-3 pt-2">
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#dashboards">Dashboards</NavLink>
              <NavLink href="#reports">Reports</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <a
                href="#login"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                <LogIn size={18} />
                <span>Login</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
