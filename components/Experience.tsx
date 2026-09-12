"use client";

import { experience, profile } from "@/lib/data";
import { SectionHeading } from "./About";
import { ExternalLinkIcon } from "./icons";
import { useReveal } from "@/lib/useReveal";

const delays = ["", "delay-150", "delay-300"];

function ExperienceCard({
  job,
  delayClass,
}: {
  job: (typeof experience)[number];
  delayClass: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`rounded-lg bg-navy-light/60 border border-lightest-navy/40 p-6 md:p-8 grid sm:grid-cols-[130px_1fr] gap-3 sm:gap-8 transition-all duration-500 ${delayClass} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <p className="font-mono text-xs text-slate uppercase tracking-wide">
        {job.range}
      </p>
      <div>
        <h3 className="font-semibold text-lightest-slate">
          {job.title}{" "}
          <span className="text-accent">
            ·{" "}
            {job.companyHref ? (
              <a
                href={job.companyHref}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex items-center gap-1 hover:underline"
              >
                {job.company}
                <ExternalLinkIcon className="w-3.5 h-3.5" />
              </a>
            ) : (
              job.company
            )}
          </span>
        </h3>
        <ul className="mt-4 space-y-3">
          {job.bullets.map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed text-sm">
              <span className="text-accent shrink-0">▹</span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2 mt-5 font-mono text-xs text-slate">
          {job.tech.map((t) => (
            <span key={t} className="px-2.5 py-1 rounded-full bg-navy">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="max-w-2xl py-16 md:py-24">
      <div className="flex items-center justify-between gap-4 flex-wrap">
        <SectionHeading index="02" title="Where I've Worked" />
        <a
          href={profile.resumeHref}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center gap-1.5 font-mono text-sm text-lightest-slate hover:text-accent transition-colors mb-8"
        >
          View Full Résumé
          <ExternalLinkIcon className="w-3.5 h-3.5" />
        </a>
      </div>

      <div className="space-y-6">
        {experience.map((job, i) => (
          <ExperienceCard
            key={job.company}
            job={job}
            delayClass={delays[i] ?? ""}
          />
        ))}
      </div>
    </section>
  );
}
