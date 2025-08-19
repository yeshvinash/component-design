import * as React from "react";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle } from "lucide-react";

import { cn } from "../../lib/utils";

interface RadioGroupProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
}

interface RadioGroupItemProps
  extends React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
}

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  RadioGroupProps
>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role = "radiogroup",
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupPrimitive.Root
        className={cn("grid gap-2", className)}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        role={role}
        {...props}
        ref={ref}
      />
    );
  }
);
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  RadioGroupItemProps
>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      ...props
    },
    ref
  ) => {
    return (
      <RadioGroupPrimitive.Item
        ref={ref}
        className={cn(
          "ring-offset-background focus-visible:ring-ring border-gray-530 aspect-square h-4 w-4 rounded-full border bg-white text-primary-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          "data-[state=checked]:bg-primary-500",
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        {...props}
      >
        <RadioGroupPrimitive.Indicator className="flex items-center justify-center mx-auto size-2.5 shrink-0">
          <Circle className="h-2 w-2 fill-white" aria-hidden="true" />
        </RadioGroupPrimitive.Indicator>
      </RadioGroupPrimitive.Item>
    );
  }
);
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
