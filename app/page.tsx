import { AmbientBackground } from "@/components/portfolio/ambient-background";
import { Contact } from "@/components/portfolio/contact";
import { Education } from "@/components/portfolio/education";
import { Experience } from "@/components/portfolio/experience";
import { Footer } from "@/components/portfolio/footer";
import { Hero } from "@/components/portfolio/hero";
import { Navbar } from "@/components/portfolio/navbar";
import { Projects } from "@/components/portfolio/projects";
import { TechStack } from "@/components/portfolio/tech-stack";

const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-portfolio-bg text-portfolio-text">
      <AmbientBackground />
      <Navbar />

      <main className="relative mx-auto max-w-[1200px] px-10">
        <Hero />
        <Projects />
        <Experience />
        <TechStack />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
