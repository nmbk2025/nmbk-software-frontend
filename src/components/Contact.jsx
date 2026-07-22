import { useState } from "react";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "Website Development",
    message: "",
  });

  const update = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submit = (event) => {
    event.preventDefault();

    const whatsappMessage = [
      "Hello NMBK Technologies,",
      "",
      `Name: ${form.name}`,
      `Contact: ${form.contact}`,
      `Service: ${form.service}`,
      `Message: ${form.message}`,
    ].join("\n");

    const url = `https://wa.me/918904982950?text=${encodeURIComponent(
      whatsappMessage,
    )}`;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] border border-blue-100 bg-white shadow-2xl lg:grid-cols-[.85fr_1.15fr]">

        {/* LEFT CONTACT PANEL */}

        <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-cyan-50 to-indigo-100 p-8 sm:p-12">
          <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />

          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-cyan-300/30 blur-3xl" />

          <div className="relative">
            <SectionTitle
              center={false}
              eyebrow="Contact"
              title="Let us build your next digital solution."
              description="Tell us what you are planning and we will explore the right software, AI or cloud solution with you."
            />

            <div className="mt-9 space-y-5">
              <a
                href="mailto:servernmbk@gmail.com"
                className="flex items-center gap-4 text-slate-700 transition hover:text-blue-700"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                  ✉
                </span>

                <span className="font-medium">
                  servernmbk@gmail.com
                </span>
              </a>

              <a
                href="tel:+918904982950"
                className="flex items-center gap-4 text-slate-700 transition hover:text-blue-700"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                  ☎
                </span>

                <span className="font-medium">
                  +91 89049 82950
                </span>
              </a>

              <div className="flex items-center gap-4 text-slate-700">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl text-blue-600 shadow-sm">
                  ⌖
                </span>

                <span className="font-medium">
                  Bengaluru, Karnataka, India
                </span>
              </div>

              <a
                href="https://wa.me/918904982950"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-slate-700 transition hover:text-green-700"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-white text-xl text-green-600 shadow-sm">
                  ◉
                </span>

                <span className="font-medium">
                  WhatsApp: +91 89049 82950
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT FORM PANEL */}

        <form onSubmit={submit} className="bg-white p-8 sm:p-12">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-bold text-slate-950">
              Your name

              <input
                name="name"
                value={form.name}
                onChange={update}
                required
                placeholder="Enter your name"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </label>

            <label className="text-sm font-bold text-slate-950">
              Email or phone

              <input
                name="contact"
                value={form.contact}
                onChange={update}
                required
                placeholder="Enter email or phone"
                className="mt-2 w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
              />
            </label>
          </div>

          <label className="mt-5 block text-sm font-bold text-slate-950">
            Service

            <select
              name="service"
              value={form.service}
              onChange={update}
              className="mt-2 w-full rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            >
              <option>Website Development</option>
              <option>Mobile App Development</option>
              <option>AI Solution</option>
              <option>Backend Development</option>
              <option>Cloud Deployment</option>
              <option>Technical Consulting</option>
              <option>Other</option>
            </select>
          </label>

          <label className="mt-5 block text-sm font-bold text-slate-950">
            Tell us about your project

            <textarea
              name="message"
              value={form.message}
              onChange={update}
              rows="5"
              required
              placeholder="Describe your requirement..."
              className="mt-2 w-full resize-none rounded-2xl border border-blue-100 bg-blue-50/50 px-4 py-3 outline-none transition focus:border-blue-400 focus:bg-white"
            />
          </label>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-cyan-500 px-6 py-4 font-black text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
          >
            Send enquiry on WhatsApp
          </button>
        </form>
      </div>
    </section>
  );
}