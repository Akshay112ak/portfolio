import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Spotlight from "@/components/Spotlight";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import CustomCursor from "@/components/CustomCursor";
import ServiceWorkerRegister from "@/components/ServiceWorkerRegister";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Akshay S — Software Engineer",
  description:
    "Software Engineer specializing in Next.js, React, and Vue frontend architecture — scalable UI, performance optimization, and secure authentication pipelines.",
  openGraph: {
    title: "Akshay S — Software Engineer",
    description:
      "Software Engineer specializing in Next.js, React, and Vue frontend architecture.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-navy text-slate antialiased overflow-x-hidden selection:bg-accent selection:text-navy">
        <GoogleAnalytics />
        <ServiceWorkerRegister />
        <CustomCursor />
        <Spotlight />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
