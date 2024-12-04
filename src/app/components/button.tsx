import { PrismicNextLink, type PrismicNextLinkProps } from "@prismicio/next";

import { cn } from "@/app/utils/lib";

export function Button({ className, ...rest }: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={cn(
        "duration-400 block w-fit rounded-full bg-cyan-700 px-8 py-3 font-display text-base font-bold tracking-wider text-white transition-colors ease-in-out hover:bg-cyan-800",
        className,
      )}
      {...rest}
    />
  );
}
