import { cn } from "@/app/utils/lib";

export function Bounded({
  as: Comp = "section",
  children,
  className,
  ...rest
}: {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Comp className={cn("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)} {...rest}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </Comp>
  );
}
