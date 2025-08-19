import * as React from "react";

import * as SwitchPrimitives from "@radix-ui/react-switch";

import { cn } from "../../lib/utils";

interface SwitchProps
  extends React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  "aria-required"?: boolean;
  "aria-invalid"?: boolean;
  onLabel?: string;
  offLabel?: string;
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  SwitchProps
>(
  (
    {
      className,
      disabled,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role = "switch",
      "aria-required": ariaRequired,
      "aria-invalid": ariaInvalid,
      onLabel = "On",
      offLabel = "Off",
      checked,
      ...props
    },
    ref
  ) => {
    // Generate default aria-label based on state if none provided
    const currentState = checked ? onLabel : offLabel;
    const defaultAriaLabel =
      ariaLabel || `Toggle switch, currently ${currentState}`;

    return (
      <SwitchPrimitives.Root
        className={cn(
          "inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-200 focus-visible:ring-offset-2 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-gray-300 data-[state=checked]:hover:bg-primary-600 data-[state=unchecked]:hover:bg-gray-500 data-[state=checked]:focus-visible:ring-primary-50",
          disabled &&
            "cursor-not-allowed bg-gray-400 data-[state=checked]:bg-gray-400 data-[state=unchecked]:bg-gray-400 data-[state=checked]:hover:bg-gray-400 data-[state=unchecked]:hover:bg-gray-400",
          className
        )}
        disabled={disabled}
        checked={checked}
        aria-label={defaultAriaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        role={role}
        aria-required={ariaRequired}
        aria-invalid={ariaInvalid}
        {...props}
        ref={ref}
      >
        <SwitchPrimitives.Thumb
          className={cn(
            "pointer-events-none block h-4 w-4 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
          )}
          aria-hidden="true"
          role="presentation"
        />

        {/* Screen reader only state text */}
        <span className="sr-only">{checked ? onLabel : offLabel}</span>
      </SwitchPrimitives.Root>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
