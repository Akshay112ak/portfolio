"use client";

import { education, certifications } from "@/lib/data";
import { SectionHeading } from "./About";
import { useReveal } from "@/lib/useReveal";

export default function Education() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="education"
      ref={ref}
      className={`max-w-2xl py-16 md:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading index="03" title="Education & Certifications" />

      <ul className="space-y-6">
        {education.map((e) => (
          <li key={e.degree}>
            <h3 className="font-semibold text-lightest-slate">{e.degree}</h3>
            <p className="text-sm text-slate mt-1">
              {e.school}
              <span className="font-mono"> - {e.range}</span>
            </p>
          </li>
        ))}
      </ul>

      <ul className="mt-8 space-y-3">
        {certifications.map((c) => (
          <li key={c} className="flex gap-3 leading-relaxed text-sm">
            <span className="text-accent shrink-0">▹</span>
            <span>{c}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
