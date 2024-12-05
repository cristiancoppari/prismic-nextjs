import { Content } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { PrismicNextImage } from "@prismicio/next";
import { cn } from "@/app/utils/lib";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="lg">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => <p className="max-w-md font-body text-lg font-normal text-slate-600">{children}</p>,
};

/**
 * Props for `TextWithImage`.
 */
export type TextWithImageProps = SliceComponentProps<Content.TextWithImageSlice>;

/**
 * Component for "TextWithImage" Slices.
 */
const TextWithImage = ({ slice }: TextWithImageProps): JSX.Element => {
  return (
    <Bounded as="section" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <div className="grid place-items-center gap-8 md:grid-cols-2">
        <PrismicNextImage
          field={slice.primary.image}
          className={cn("rounded-lg", slice.variation === "imageRight" && "md:order-2")}
          alt={""}
        />

        <div className="grid gap-4">
          <PrismicRichText field={slice.primary.title} components={components} />
          <PrismicRichText field={slice.primary.body} components={components} />
        </div>
      </div>
    </Bounded>
  );
};

export default TextWithImage;
