"use client";

import * as React from "react";

import * as TogglePrimitive from "@radix-ui/react-toggle";
import { type VariantProps } from "class-variance-authority";

import { cn } from "../../lib/utils";
import { toggleVariants } from "./toggleVariants";

interface ToggleProps
  extends React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
    VariantProps<typeof toggleVariants> {
  // 508 compliance props only
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  "aria-pressed"?: boolean;
}

const Toggle = React.forwardRef<
  React.ElementRef<typeof TogglePrimitive.Root>,
  ToggleProps
>(
  (
    {
      className,
      variant,
      size,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      "aria-pressed": ariaPressed,
      ...props
    },
    ref
  ) => (
    <TogglePrimitive.Root
      ref={ref}
      className={cn(toggleVariants({ variant, size, className }))}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      aria-pressed={ariaPressed}
      {...props}
    />
  )
);

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle };
