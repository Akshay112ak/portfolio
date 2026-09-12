import Sidebar from "@/components/Sidebar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="relative z-10 lg:flex">
      <Sidebar />
      <main className="lg:ml-[38%] xl:ml-[35%] px-6 md:px-10 lg:px-20 lg:max-w-3xl">
        <About />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
