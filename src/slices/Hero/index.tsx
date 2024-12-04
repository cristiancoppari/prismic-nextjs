import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="grid grid-cols-1 place-items-center text-center">
        <PrismicRichText
          field={slice.primary.heading}
          components={{
            heading1: ({ children }) => (
              <h1 className="font-display text-5xl font-bold leading-tight tracking-tight text-slate-700 md:text-7xl">
                {children}
              </h1>
            ),
          }}
        />
        <PrismicRichText
          field={slice.primary.body}
          components={{
            paragraph: ({ children }) => (
              <p className="mb-4 max-w-md font-body text-2xl font-normal leading-10 text-slate-600 md:mb-8">
                {children}
              </p>
            ),
          }}
        />
        {slice.primary.button.map((item, i) => (
          <PrismicNextLink
            key={i}
            field={item.link}
            className="duration-400 mb-8 block w-fit rounded-full bg-cyan-700 px-8 py-3 font-display text-base font-bold tracking-wider text-white transition-colors ease-in-out hover:bg-cyan-800 md:mb-10"
          >
            {item.label}
          </PrismicNextLink>
        ))}
        <PrismicNextImage field={slice.primary.image} className="w-full max-w-4xl drop-shadow-xl" alt={""} />
      </div>
    </Bounded>
  );
};

export default Hero;
