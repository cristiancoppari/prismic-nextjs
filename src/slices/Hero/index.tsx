import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Button } from "@/app/components/button";
import { Heading } from "@/app/components/heading";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Serialized `Hero` content.
 */
const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0 md:mb-8">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 max-w-md font-body text-2xl font-normal leading-10 text-slate-600 md:mb-8">{children}</p>
  ),
};

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <>
      {slice.variation === "horizontal" && (
        <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2">
            <div className="grid h-fit grid-rows-[1fr,auto,auto]">
              <PrismicRichText field={slice.primary.heading} components={components} />
              <PrismicRichText field={slice.primary.body} components={components} />
              {slice.primary.button.map((item, i) => (
                <Button key={i} field={item.link} className="mb-8 md:mb-10">
                  {item.label}
                </Button>
              ))}
            </div>
            <PrismicNextImage field={slice.primary.image} className="w-full max-w-4xl drop-shadow-xl" alt={""} />
          </div>
        </Bounded>
      )}

      {slice.variation === "default" && (
        <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
          <div className="grid grid-cols-1 place-items-center text-center">
            <PrismicRichText field={slice.primary.heading} components={components} />
            <PrismicRichText field={slice.primary.body} components={components} />
            {slice.primary.button.map((item, i) => (
              <Button key={i} field={item.link} className="mb-8 md:mb-10">
                {item.label}
              </Button>
            ))}
            <PrismicNextImage field={slice.primary.image} className="w-full max-w-4xl drop-shadow-xl" alt={""} />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Hero;
