/**
 * @deprecated LEGACY — archived during Figma redesign (Aug 2026)
 * See `_legacy/README.md`. Not imported by the new build.
 */

import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { gridItems } from "@/data";

export const Grid = () => {
  return (
    <section id="about" className="relative z-20 bg-black-100 py-20">
      <BentoGrid>
        {gridItems.map((gridItem) => (
          <BentoGridItem key={gridItem.id} {...gridItem} />
        ))}
      </BentoGrid>
    </section>
  );
};
