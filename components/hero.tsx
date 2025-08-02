import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
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

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center bg-black-100 bg-grid-white/[0.02] bg-cover bg-center bg-no-repeat">
        <div className="flex w-full max-w-[89rem] flex-col items-center justify-center px-4 lg:px-0">
          {/* 3D Cube Section */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden lg:block">
            <div className="relative w-64 h-64">
              {/* 3D Cube */}
              <div className="absolute inset-0 transform rotate-45">
                <div className="w-full h-full border-2 border-blue-400/30 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                  {/* Cube Content */}
                  <div className="absolute inset-2 flex items-center justify-center">
                    <div className="text-4xl font-bold text-blue-400">JS</div>
                  </div>
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-green-400/30 rounded-full"></div>
                  <div className="absolute bottom-4 right-4 w-6 h-6 bg-purple-400/30 rounded-full"></div>
                  <div className="absolute top-1/2 left-2 w-4 h-4 bg-blue-400/30 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="mb-6 text-6xl font-bold leading-tight text-white md:text-7xl lg:text-8xl">
              <span className="text-blue-400">Hi, I&apos;m </span>
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
                {links.ownerName}!
              </span>
            </h1>

            <h2 className="mb-6 text-2xl font-semibold text-gray-300 md:text-3xl">
              A Full Stack Developer
            </h2>

            <p className="mb-8 text-lg text-gray-400 md:text-xl max-w-2xl mx-auto">
            Passionate about building scalable, responsive, and user-friendly web applications.
            </p>

            <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row">
              <Link href={links.github} target="_blank">
                <MagicButton
                  title="View My Work"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </Link>
            </div>
          </div>

          {/* Bottom Line */}
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gray-400"></div>
              <span className="text-sm text-gray-400 uppercase tracking-wider">
                Full-Stack Web Developer Portfolio
              </span>
              <div className="w-16 h-px bg-gray-400"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
