import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";

import { CommandIcon, HourglassIcon, CalendarDaysIcon, ChartBarIncreasingIcon } from "lucide-react";

const icons = {
  bargraph: <ChartBarIncreasingIcon className="h-12 w-12 text-cyan-700" />,
  clover: <CommandIcon className="h-12 w-12 text-cyan-700" />,
  hourglass: <HourglassIcon className="h-12 w-12 text-cyan-700" />,
  calendar: <CalendarDaysIcon className="h-12 w-12 text-cyan-700" />,
};

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-12 text-center">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="sm" className="mb-4 text-center font-medium sm:text-left">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="text-balance text-center font-body text-base font-medium text-slate-600 sm:text-left">{children}</p>
  ),
};

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features = ({ slice }: FeaturesProps): JSX.Element => {
  return (
    <Bounded as="section" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} components={components} />

      <ul className="grid grid-cols-1 place-items-center gap-x-8 gap-y-4 sm:grid-cols-4 sm:place-items-start">
        {slice.primary.block.map((item, i) => (
          <li key={i} className="grid max-w-xs place-items-center sm:place-items-start">
            <div className="mb-4">{item.icon && icons[item.icon]}</div>
            <PrismicRichText field={item.heading} components={components} />
            <PrismicRichText field={item.description} components={components} />
          </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default Features;
