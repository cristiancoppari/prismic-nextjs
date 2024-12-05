import { Content, isFilled } from "@prismicio/client";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { Bounded } from "@/app/components/bounded";
import { Heading } from "@/app/components/heading";
import { PrismicNextImage } from "@prismicio/next";
import { createClient } from "@/prismicio";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <Heading as="h2" size="md" className="mb-9 text-center font-semibold">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <p className="mb-8 font-body text-xl font-normal text-slate-600 sm:text-left md:text-2xl">{children}</p>
  ),
};

/**
 * Props for `Testimonial`.
 */
export type TestimonialProps = SliceComponentProps<Content.TestimonialSlice>;

/**
 * Component for "Testimonial" Slices.
 */
const Testimonial = async ({ slice }: TestimonialProps): Promise<JSX.Element> => {
  const client = createClient();

  const testimonials = await Promise.all(
    slice.primary.container.map(async (item) => {
      if (isFilled.contentRelationship(item.testimonial) && item.testimonial.uid) {
        return await client.getByUID("testimonial", item.testimonial.uid);
      }
    }),
  );

  return (
    <Bounded as="section" data-slice-type={slice.slice_type} data-slice-variation={slice.variation}>
      <PrismicRichText field={slice.primary.heading} components={components} />

      <ul className="mt-12 grid grid-cols-1 place-items-center gap-x-8 gap-y-4 sm:place-items-start lg:grid-cols-3">
        {testimonials.map((testimonial, i) => (
          <li key={i} className="grid content-between rounded-lg border bg-white px-8 py-10 md:px-14 md:py-16">
            <PrismicRichText field={testimonial?.data.quote} components={components} />

            <div>
              <PrismicNextImage
                width={64}
                height={64}
                field={testimonial?.data.image}
                className="rounded-full"
                imgixParams={{ ar: "1:1", fit: "crop" }}
                alt=""
              />

              <div>
                <p>{testimonial?.data.name}</p>
                <p>{testimonial?.data.job_title}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Bounded>
  );
};

export default Testimonial;
