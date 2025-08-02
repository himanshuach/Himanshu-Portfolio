import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { BackgroundGradientAnimation } from "@/components/ui/background-gradient-animation";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="relative min-h-screen pb-20 pt-36">
      {/* Background Gradient Animation - Full Background */}
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(0, 0, 0)"
        gradientBackgroundEnd="rgb(0, 0, 0)"
        firstColor="147, 51, 234"
        secondColor="236, 72, 153"
        thirdColor="147, 51, 234"
        fourthColor="236, 72, 153"
        fifthColor="147, 51, 234"
        pointerColor="147, 51, 234"
        size="80%"
        blendingValue="hard-light"
        interactive={true}
        containerClassName="absolute inset-0"
      />

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 lg:px-8">
        <div className="flex w-full max-w-7xl items-center justify-between gap-8">
          {/* Left Content */}
          <div className="flex-1 max-w-xl lg:max-w-2xl">
            {/* Tagline */}
            <div className="mb-8 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
              <span className="mr-2">⚡</span>
              Fullstack Developer Portfolio
            </div>

            {/* Main Headline */}
            <h1 className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
              Providing the{" "}best
              project experience.
            </h1>

            {/* Description */}
            <p className="mb-10 text-lg text-gray-300 md:text-xl">
              I'm a Full Stack Software Engineer with experience in Website, Mobile, and Software development. Check out my projects and skills.
            </p>

            {/* Call to Action */}
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Link href={links.github} target="_blank">
                <MagicButton
                  title="Learn more"
                  icon={<FaLocationArrow />}
                  position="right"
                  asChild={true}
                />
              </Link>
            </div>
          </div>

          {/* Right Side - Technology Icons */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="relative w-80 h-80">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/30 to-transparent rounded-3xl border border-gray-800/50 backdrop-blur-md">
                <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:40px_40px] rounded-3xl"></div>
              </div>

              {/* Technology Icons Grid */}
              <div className="absolute inset-0 p-8 grid grid-cols-3 gap-6">
                {/* Row 1 */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/re.svg" alt="React" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/ts.svg" alt="TypeScript" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/re.svg" alt="React" className="w-8 h-8" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/host.svg" alt="Node.js" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/c.svg" alt="MongoDB" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/next.svg" alt="Next.js" className="w-8 h-8" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/git.svg" alt="Git" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/tail.svg" alt="Tailwind CSS" className="w-8 h-8" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110">
                    <img src="/fm.svg" alt="Flutter" className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
