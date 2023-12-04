import clsx from "clsx";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  ref?: React.Ref<HTMLDivElement>;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ref,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      ref={ref}
      className={clsx("px-4 py-10 md:px-6 md:py-14 lg:py-16", className)}
      {...restProps}
    >
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </Comp>
  );
}
