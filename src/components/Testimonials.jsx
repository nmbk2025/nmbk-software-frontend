import { Sparkles, Users, Heart } from "lucide-react";
import SectionTitle from "./SectionTitle";

const highlights = [
  {
    icon: Sparkles,
    title: "Creative solutions",
    description:
      "We combine technology and creativity to build clear, useful and engaging digital experiences.",
  },
  {
    icon: Users,
    title: "People first",
    description:
      "We focus on understanding real needs and creating solutions that are practical and easy to use.",
  },
  {
    icon: Heart,
    title: "Meaningful work",
    description:
      "We bring technology, creativity and people together to create work with purpose.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gradient-to-br from-blue-100 via-cyan-50 to-indigo-100 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          eyebrow="Our approach"
          title="Built around clarity, creativity and purpose."
          description="We create digital solutions with a focus on people, technology and meaningful results."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {highlights.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="rounded-[2rem] bg-white p-7 shadow-xl"
            >
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-blue-100 text-blue-700">
                <Icon size={28} />
              </div>

              <h3 className="mt-6 text-2xl font-black text-slate-950">
                {title}
              </h3>

              <p className="mt-4 text-base leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}