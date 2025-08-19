import * as React from "react";

import * as PopoverPrimitive from "@radix-ui/react-popover";

import { cn } from "../../lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverAnchor = PopoverPrimitive.Anchor;

const PopoverClose = PopoverPrimitive.Close;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content> & {
    container?: HTMLElement | null;
    align?: "start" | "center" | "end";
    side?: "top" | "right" | "bottom" | "left";
    // 508 compliance additions
    "aria-label"?: string;
    "aria-labelledby"?: string;
    "aria-describedby"?: string;
    role?: string;
  }
>(
  (
    {
      className,
      align = "center",
      side = "bottom",
      sideOffset = 4,
      container,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      role = "dialog",
      ...props
    },
    ref
  ) => (
    <PopoverPrimitive.Portal container={container}>
      <PopoverPrimitive.Content
        ref={ref}
        align={align}
        side={side}
        sideOffset={sideOffset}
        className={cn(
          "z-50 w-72 rounded-md border border-gray-300 bg-white p-4 shadow-sm outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        role={role}
        {...props}
      />
    </PopoverPrimitive.Portal>
  )
);
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverAnchor, PopoverClose, PopoverContent, PopoverTrigger };
