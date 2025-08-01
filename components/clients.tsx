import Image from "next/image";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { clients } from "@/data";

export const Clients = () => {
  return (
    <section id="clients" className="py-20">
      <h1 className="heading">
        Companies I&apos;ve <span className="text-purple">worked with</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="flex flex-wrap items-center justify-center gap-4 max-lg:mt-10 md:gap-16">
          {clients.map(({ id, img, name, nameImg }) => (
            <div key={id} className="flex max-w-32 gap-2 md:max-w-60">
              <Image
                height={29}
                width={43}
                src={img}
                alt={`${name}&apos;s logo`}
                className="w-5 md:w-10"
              />

              <Image
                height={28}
                width={131}
                src={nameImg}
                alt={name}
                className="w-20 md:w-24"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
