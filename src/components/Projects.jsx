import { ExternalLink, Brain, ShieldCheck, MapPinned } from "lucide-react";
import SectionTitle from "./SectionTitle";

const projects = [
  {
    icon: Brain,
    title: "FluentAI",
    category: "Speech Therapy",
    description:
      "An AI-powered speech therapy platform designed to support patients and therapists with digital therapy tools and progress tracking.",
    url: "https://speechtherapy.nmbk.in",
    gradient: "from-indigo-600 via-violet-600 to-fuchsia-500",
  },
  {
    icon: ShieldCheck,
    title: "AidAssist",
    category: "AI & Accessibility",
    description:
      "An AI-powered assistant designed to provide helpful guidance and support for hearing aid users.",
    url: "https://aidassist-11.onrender.com",
    gradient: "from-cyan-500 via-blue-500 to-indigo-600",
  },
  {
    icon: MapPinned,
    title: "Travel Buddy",
    category: "Travel Platform",
    description:
      "A travel-focused platform designed to help users connect, explore and plan better travel experiences.",
    url: "https://travel-buddy-5-u3in.onrender.com",
    gradient: "from-rose-500 via-orange-500 to-amber-400",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our projects"
          title="Solutions we've built."
          description="Explore some of the digital solutions developed by NMBK."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map(
            ({ icon: Icon, title, category, description, url, gradient }) => (
              <article
                key={title}
                className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-br ${gradient} p-8 text-white shadow-xl`}
              >
                <div className="absolute inset-0 grid-pattern opacity-20" />

                <div className="relative flex min-h-[360px] flex-col">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/20">
                    <Icon size={27} />
                  </span>

                  <div className="mt-auto">
                    <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/70">
                      {category}
                    </p>

                    <h3 className="mt-2 text-3xl font-black">{title}</h3>

                    <p className="mt-4 leading-7 text-white/85">
                      {description}
                    </p>

                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-900 transition hover:bg-white/90"
                    >
                      Visit project
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}