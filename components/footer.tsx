import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialLinks } from "@/data";

export const Footer = () => {
  return (
    <footer id="contact" className="mb-[100px] w-full pb-10 md:mb-auto">
      <div className="absolute -bottom-72 left-0 min-h-96 w-full">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full opacity-50"
          width={1100}
          height={825}
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Let&apos;s Build Something Amazing Together</span>
        </h1>

        <p className="my-5 text-center text-white-200 md:mt-10">
          Ready to turn your ideas into digital reality? Let&apos;s connect and create something extraordinary.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <Link
            href={`mailto:${links.ownerEmail}`}
            target="_blank"
            rel="noreferrer noopener"
            className="md:mt-10"
          >
            <MagicButton
              title="Get In Touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
          <Link
            href={`tel:${links.phone}`}
            target="_blank"
            rel="noreferrer noopener"
            className="md:mt-10"
          >
            <MagicButton
              title="Call Me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>

      <div className="relative z-[999] mt-16 flex flex-col items-center justify-between md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-sm font-light md:text-base md:font-normal">
            Copyright &copy; {new Date().getFullYear()} {links.ownerName} |{" "}
            <Link href={links.sourceCode} className="underline">
              Source Code
            </Link>
          </p>
          <p className="mt-2 text-xs text-white-200">
            {links.ownerEmail} | {links.phone}
          </p>
        </div>

        <div className="flex items-center gap-6 md:gap-3">
          {socialLinks.map((profile) => (
            <Link
              key={profile.name}
              href={profile.link}
              target="_blank"
              rel="noreferrer noopener"
              className="saturate-180 flex size-10 items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 backdrop-blur-lg backdrop-filter"
              title={profile.name}
            >
              <Image
                src={profile.icon}
                alt={`profile-${profile.name}`}
                width={20}
                height={20}
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
