import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";

export const Hero = () => {
  return (
    <div className="relative min-h-screen pb-20 pt-36">
      <div>
        <Spotlight
          className="-left-10 -top-40 h-screen md:-left-32 md:-top-20"
          fill="white"
        />
        <Spotlight
          className="left-full top-10 h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Glowing Purple Ring Effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-[800px] h-[800px]">
          {/* Outer Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>
          {/* Middle Ring */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-r from-purple-400/30 to-pink-400/30 blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          {/* Inner Ring */}
          <div className="absolute inset-16 rounded-full bg-gradient-to-r from-purple-300/40 to-pink-300/40 blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          {/* Core Glow */}
          <div className="absolute inset-24 rounded-full bg-gradient-to-r from-purple-200/50 to-pink-200/50 blur-lg animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center bg-black-100 bg-grid-white/[0.02] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full max-w-[89rem] items-center justify-between px-4 lg:px-0">
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            {/* Tagline */}
            <div className="mb-6 inline-flex items-center rounded-full border border-purple-500/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
              <span className="mr-2">⚡</span>
              Fullstack Developer Portfolio
            </div>

            {/* Main Headline */}
            <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
              Providing the{" "}
                best
              project experience.
            </h1>

            {/* Description */}
            <p className="mb-8 text-base text-gray-300 md:text-lg">
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
          <div className="hidden lg:flex flex-1 justify-end">
            <div className="relative w-96 h-96">
              {/* Grid Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 to-transparent rounded-2xl border border-gray-800/50 backdrop-blur-sm">
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]"></div>
              </div>

              {/* Technology Icons Grid */}
              <div className="absolute inset-0 p-6 grid grid-cols-3 gap-4">
                {/* Row 1 */}
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/js.svg" alt="JavaScript" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/ts.svg" alt="TypeScript" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/react.svg" alt="React" className="w-7 h-7" />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/node.svg" alt="Node.js" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/mongo.svg" alt="MongoDB" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/next.svg" alt="Next.js" className="w-7 h-7" />
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/git.svg" alt="Git" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/tailwind.svg" alt="Tailwind CSS" className="w-7 h-7" />
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center border border-white/20 hover:bg-white/20 transition-all duration-300">
                    <img src="/flutter.svg" alt="Flutter" className="w-7 h-7" />
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
