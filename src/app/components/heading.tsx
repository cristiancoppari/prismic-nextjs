import { cn } from "@/app/utils/lib";

type HeadingTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingSize = "xl" | "lg" | "md" | "sm" | "xs";

export function Heading({
  as: Comp = "h2",
  size = "lg",
  children,
  className,
  ...rest
}: {
  as?: HeadingTags;
  size?: HeadingSize;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Comp
      className={cn(
        "font-display font-bold leading-tight tracking-tight text-slate-700",
        size === "xl" && "text-5xl md:text-7xl",
        size === "lg" && "text-4xl md:text-5xl",
        size === "md" && "text-3xl md:text-4xl",
        size === "sm" && "text-2xl md:text-3xl",
        size === "xs" && "text-lg md:text-xl",
        className,
      )}
      {...rest}
    >
      {children}
    </Comp>
  );
}
