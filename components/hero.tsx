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
          <p className="mb-4 max-w-2xl text-center text-base !leading-relaxed text-body-color md:text-lg lg:text-base">
            Welcome to my portfolio! I&apos;m a passionate Full Stack Developer
          </p>
          <h1 className="mb-8 text-center text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              {links.ownerName}
            </span>
          </h1>

          <TextGenerateEffect
            words="Full Stack Developer skilled in ReactJS, Node.js, and UI/UX design. Passionate about building scalable, responsive, and user-friendly web applications."
            className="mb-8 text-center text-base !leading-relaxed text-body-color md:text-lg lg:text-base"
          />

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <Link href={links.github} target="_blank">
              <MagicButton
                title="View My Work"
                icon={<FaLocationArrow />}
                position="right"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
