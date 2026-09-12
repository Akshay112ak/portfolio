"use client";

import { profile, socials } from "@/lib/data";
import { SectionHeading } from "./About";
import MagneticButton from "./MagneticButton";
import { socialIcons } from "./icons";
import { useReveal } from "@/lib/useReveal";

export default function Contact() {
  const { ref, visible } = useReveal<HTMLElement>();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get("full-name") as string) || "";
    const email = (data.get("email") as string) || "";
    const purpose = (data.get("purpose") as string) || "";

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `${purpose}\n\n— ${name} (${email})`
    );

    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`max-w-xl py-16 md:py-32 text-center sm:text-left transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading index="05" title="Get In Touch" />
      <p className="leading-relaxed">
        I'm currently open to new opportunities and interesting frontend
        problems. Whether you have a question or just want to say hi, my
        inbox is open — I'll get back to you.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 space-y-5 text-left max-w-md mx-auto sm:mx-0"
      >
        <div>
          <label
            htmlFor="full-name"
            className="block font-mono text-xs uppercase tracking-widest text-slate mb-2"
          >
            Full Name
          </label>
          <input
            id="full-name"
            name="full-name"
            type="text"
            required
            placeholder="John Smith"
            className="w-full bg-navy border border-lightest-navy rounded px-4 py-3 text-sm text-lightest-slate placeholder:text-slate/50 outline-none focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block font-mono text-xs uppercase tracking-widest text-slate mb-2"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="me@example.com"
            className="w-full bg-navy border border-lightest-navy rounded px-4 py-3 text-sm text-lightest-slate placeholder:text-slate/50 outline-none focus:border-accent transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="purpose"
            className="block font-mono text-xs uppercase tracking-widest text-slate mb-2"
          >
            Purpose
          </label>
          <input
            id="purpose"
            name="purpose"
            type="text"
            placeholder="Let's work together"
            className="w-full bg-navy border border-lightest-navy rounded px-4 py-3 text-sm text-lightest-slate placeholder:text-slate/50 outline-none focus:border-accent transition-colors"
          />
        </div>

        <MagneticButton className="border border-accent text-accent rounded font-mono text-sm px-7 py-3 hover:bg-accent/10 transition-colors">
          Submit
        </MagneticButton>
      </form>

      <div className="flex justify-center sm:justify-start gap-5 mt-16 lg:hidden">
        {socials.map((s) => {
          const Icon = socialIcons[s.icon];
          return (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={s.label}
              className="text-slate hover:text-accent hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          );
        })}
      </div>

      <footer className="mt-20 font-mono text-xs text-slate/60">
        Built with Next.js &amp; Tailwind CSS
      </footer>
    </section>
  );
}
