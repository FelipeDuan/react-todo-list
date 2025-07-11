import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export const textVariants = cva("font-sans text-gray-400", {
  variants: {
    variant: {
      "body-sm-bold": "text-sm leading-5 font-semibold",
      "body-md": "text-base leading-6 font-normal",
      "body-md-bold": "text-base leading-6 font-semibold",
    },
    muted: {
      true: "!text-gray-300",
    },
  },
  defaultVariants: {
    variant: "body-md",
    muted: false,
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  className?: String;
  children?: React.ReactNode;
}

export function Text({
  as = "span",
  variant,
  muted,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, muted, className }),
      ...props,
    },
    children
  );
}
