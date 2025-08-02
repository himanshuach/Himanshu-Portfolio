import Image from "next/image";

import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className="flex-1 border-neutral-200 text-white dark:border-slate-800" 
            duration={Math.floor(Math.random() * 10000 + 10000)}
          >
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                width={95}
                height={87}
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {experience.title}
                </h1>
                <ul className="mt-3 text-start font-semibold text-white-100 space-y-2">
                  {Array.isArray(experience.desc) ? (
                    experience.desc.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-purple-400 mr-2 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))
                  ) : (
                    <li className="flex items-start">
                      <span className="text-purple-400 mr-2 mt-1">•</span>
                      <span>{experience.desc}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
