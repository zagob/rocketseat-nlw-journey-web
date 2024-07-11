import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonProps = tv({
  base: "rounded-lg px-5 font-medium flex items-center justify-center gap-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    },
    size: {
      default: "py-2",
      full: "w-full h-11",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "default",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonProps>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={buttonProps({ variant, className })} {...props} />;
}
