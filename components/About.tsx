"use client";

import { profile, skills } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

export default function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="about"
      ref={ref}
      className={`max-w-2xl py-16 md:py-24 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <SectionHeading index="01" title="About Me" />
      <p className="leading-relaxed">{profile.summary}</p>

      <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center gap-2 text-slate">
            <span className="text-accent">▹</span>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <h2 className="flex items-center gap-3 text-xl md:text-2xl font-bold text-lightest-slate mb-8">
      <span className="font-mono text-accent text-base md:text-lg">
        {index}.
      </span>
      {title}
      <span className="hidden md:block flex-1 h-px bg-lightest-navy ml-4" />
    </h2>
  );
}
