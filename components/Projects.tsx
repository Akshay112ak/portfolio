"use client";

import { projects } from "@/lib/data";
import { SectionHeading } from "./About";
import { FolderIcon, ExternalLinkIcon } from "./icons";
import { useReveal } from "@/lib/useReveal";

const delays = ["", "delay-100", "delay-200", "delay-300"];

function ProjectCard({
  project,
  delayClass,
}: {
  project: (typeof projects)[number];
  delayClass: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`group rounded-md bg-navy-light p-6 border border-transparent hover:border-accent/40 hover:-translate-y-2 hover:shadow-xl hover:shadow-black/30 transition-all duration-500 ${delayClass} ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="flex items-center justify-between text-accent">
        <FolderIcon className="w-8 h-8" />
      </div>
      <h3 className="mt-4 font-semibold text-lightest-slate group-hover:text-accent transition-colors">
        {project.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed">{project.copy}</p>
      <p className="mt-4 font-mono text-xs text-slate">
        {project.tech.join("  ·  ")}
      </p>

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-4 pt-4 border-t border-lightest-navy/60">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1.5 text-xs font-mono text-slate hover:text-accent transition-colors"
            >
              {link.label}
              <ExternalLinkIcon className="w-3 h-3" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="max-w-2xl py-16 md:py-24">
      <SectionHeading index="04" title="Things I've Built" />

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} delayClass={delays[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}
