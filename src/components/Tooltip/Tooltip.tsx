import * as React from "react";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";

import { cn } from "../../lib/utils";

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

interface TooltipTriggerProps
  extends React.ComponentProps<typeof TooltipPrimitive.Trigger> {
  // 508 compliance props only
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
}

function TooltipTrigger({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  id,
  ...props
}: TooltipTriggerProps) {
  return (
    <TooltipPrimitive.Trigger
      data-state="instant-open"
      data-slot="tooltip-trigger"
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      {...props}
    />
  );
}

interface TooltipContentProps
  extends React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content> {
  tooltipClassName?: string;
  // 508 compliance props only
  "aria-label"?: string;
  "aria-labelledby"?: string;
  id?: string;
  role?: string;
}

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  TooltipContentProps
>(
  (
    {
      className,
      tooltipClassName,
      sideOffset = 4,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      id,
      role,
      ...props
    },
    ref
  ) => (
    <TooltipPrimitive.Portal>
      <TooltipPrimitive.Content
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "z-50 origin-[--radix-tooltip-content-transform-origin] overflow-hidden rounded-md bg-gray-800 px-3 py-2 text-xs font-light leading-normal text-white animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        id={id}
        role={role}
        {...props}
      >
        {props.children}
        <TooltipArrow
          className={cn("fill-gray-800", tooltipClassName)}
          aria-hidden="true"
        />
      </TooltipPrimitive.Content>
    </TooltipPrimitive.Portal>
  )
);
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
