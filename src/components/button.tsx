import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const buttonProps = tv({
  base: "rounded-lg px-5 py-2 font-medium flex items-center gap-2",
  variants: {
    variant: {
      primary: "bg-lime-300 text-lime-950 hover:bg-lime-400",
      secondary: "bg-zinc-800 text-zinc-200 hover:bg-zinc-700",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonProps>;

export function Button({ variant, className, ...props }: ButtonProps) {
  return <button className={buttonProps({ variant, className })} {...props} />;
}
