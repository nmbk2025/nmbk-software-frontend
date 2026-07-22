import SectionTitle from "./SectionTitle";

const values = [
  [
    "💡",
    "Innovative thinking",
    "Modern software solutions created around real business challenges.",
  ],
  [
    "🔒",
    "Secure development",
    "Reliable systems designed with data protection and stability in mind.",
  ],
  [
    "📈",
    "Built for growth",
    "Scalable applications that evolve as your organisation grows.",
  ],
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 px-5 py-24"
    >
      <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div>
          <SectionTitle
            center={false}
            eyebrow="About NMBK"
            title="Technology solutions created for real business needs."
            description="NMBK helps startups and organisations transform ideas into reliable digital products."
          />

          <div className="mt-8 space-y-4">
            {[
              "Custom websites and software applications",
              "AI automation and intelligent assistants",
              "Frontend, backend and database development",
              "Cloud deployment and technical support",
            ].map((item) => (
              <div key={item} className="flex gap-3 text-slate-700">
                <span className="mt-1 shrink-0 font-bold text-cyan-600">
                  ✓
                </span>

                <span className="leading-7">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
          {values.map(([icon, title, text]) => (
            <div
              key={title}
              className="rounded-3xl border border-blue-100 bg-white/90 p-6 shadow-lg backdrop-blur"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 text-xl shadow-md">
                  {icon}
                </span>

                <div>
                  <h3 className="text-xl font-black text-slate-950">
                    {title}
                  </h3>

                  <p className="mt-2 leading-7 text-slate-600">
                    {text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}