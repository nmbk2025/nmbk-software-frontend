import { useState } from "react";

const links = [
  ["Services", "#services"],
  ["About", "#about"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="glass soft-shadow mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-5 py-3">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3">
          <img
            src="/Logo5.jpeg"
            alt="NMBK Logo"
            className="h-11 w-11 rounded-2xl object-contain"
          />

          <span>
            <span className="block text-xl font-black tracking-[0.18em] text-slate-950">
              NMBK
            </span>

            <span className="block text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
              Software • AI • Digital Solutions
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm font-bold text-slate-600 transition hover:text-blue-700"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="rounded-full bg-blue-700 px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-800"
          >
            Start a project
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="rounded-xl p-2 text-2xl text-blue-800 lg:hidden"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav className="glass soft-shadow mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl p-4 lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 font-bold text-slate-700 hover:bg-blue-50"
            >
              {label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}