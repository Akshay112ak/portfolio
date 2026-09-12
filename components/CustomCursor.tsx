"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const DOT_SIZE = 6;
const RING_SIZE = 32;

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    dot.style.display = "block";
    ring.style.display = "block";

    const setDotX = gsap.quickTo(dot, "x", { duration: 0.1, ease: "power3" });
    const setDotY = gsap.quickTo(dot, "y", { duration: 0.1, ease: "power3" });
    const setRingX = gsap.quickTo(ring, "x", {
      duration: 0.35,
      ease: "power3",
    });
    const setRingY = gsap.quickTo(ring, "y", {
      duration: 0.35,
      ease: "power3",
    });

    const handleMove = (e: MouseEvent) => {
      setDotX(e.clientX - DOT_SIZE / 2);
      setDotY(e.clientY - DOT_SIZE / 2);
      setRingX(e.clientX - RING_SIZE / 2);
      setRingY(e.clientY - RING_SIZE / 2);
    };

    const handleOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest(
        "a, button, input, textarea, [data-cursor-hover]"
      );
      gsap.to(ring, {
        scale: target ? 1.8 : 1,
        opacity: target ? 0.5 : 1,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const handleDown = () =>
      gsap.to(dot, { scale: 0.6, duration: 0.2, ease: "power3.out" });
    const handleUp = () =>
      gsap.to(dot, { scale: 1, duration: 0.2, ease: "power3.out" });

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseover", handleOver);
    window.addEventListener("mousedown", handleDown);
    window.addEventListener("mouseup", handleUp);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseover", handleOver);
      window.removeEventListener("mousedown", handleDown);
      window.removeEventListener("mouseup", handleUp);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-8 w-8 rounded-full border border-accent will-change-transform"
      />
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden h-1.5 w-1.5 rounded-full bg-accent will-change-transform"
      />
    </>
  );
}
