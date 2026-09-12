"use client";

import { useEffect, useState } from "react";
import { profile, navLinks, socials } from "@/lib/data";
import { socialIcons } from "./icons";

export default function Sidebar() {
  const [active, setActive] = useState(navLinks[0].href);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((el): el is Element => !!el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="lg:fixed lg:top-0 lg:left-0 lg:h-svh lg:w-[38%] xl:w-[35%] px-6 md:px-10 lg:px-20 py-10 lg:py-24">
      <h1 className="font-sans text-3xl md:text-4xl font-bold text-white">
        {profile.name}
      </h1>
      <h2 className="mt-2 text-lg md:text-xl text-lightest-slate font-medium">
        {profile.role}
      </h2>
      <p className="mt-4 max-w-xs text-slate leading-relaxed">
        {profile.tagline} Based in {profile.location}.
      </p>

      <nav className="hidden lg:block mt-16">
        <ul className="space-y-4">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a href={link.href} className="group flex items-center gap-4">
                  <span
                    className={`h-px transition-all duration-300 ${
                      isActive
                        ? "w-16 bg-white"
                        : "w-8 bg-slate group-hover:w-16 group-hover:bg-lightest-slate"
                    }`}
                  />
                  <span
                    className={`font-mono text-xs uppercase tracking-widest transition-colors duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate group-hover:text-lightest-slate"
                    }`}
                  >
                    {link.label}
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="flex items-center gap-6 mt-16">
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
    </aside>
  );
}
