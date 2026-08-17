import { AmbientBackground } from "@/components/portfolio/ambient-background";
import { Contact } from "@/components/portfolio/contact";
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
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;

/*
 * ---------------------------------------------------------------------------
 * LEGACY PAGE (pre-Figma redesign) — preserved for reference, not rendered
 * ---------------------------------------------------------------------------
 *
 * import { Approach } from "@/components/approach";
 * import { Experience } from "@/components/experience";
 * import { Footer } from "@/components/footer";
 * import { Grid } from "@/components/grid";
 * import { Hero } from "@/components/hero";
 * import { FloatingNav } from "@/components/ui/floating-nav";
 * import { RecentProjects } from "@/components/recent-projects";
 * import { navItems } from "@/data";
 *
 * const MainPage = () => {
 *   return (
 *     <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-black-100 px-5 sm:px-10">
 *       <FloatingNav navItems={navItems} />
 *       <div className="w-full max-w-7xl">
 *         <Hero />
 *         <Grid />
 *         <RecentProjects />
 *         <Experience />
 *         <Approach />
 *         <Footer />
 *       </div>
 *     </main>
 *   );
 * };
 */
