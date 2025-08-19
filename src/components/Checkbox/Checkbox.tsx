import * as React from "react";

import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { Check, Minus } from "lucide-react";

import { cn } from "../../lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root> & {
    disabled?: boolean;
    variant?: "default" | "outline" | "filled" | "purple";
  }
>(({ className, disabled, variant = "default", ...props }, ref) => (
  <CheckboxPrimitive.Root
    ref={ref}
    disabled={disabled}
    className={cn(
      "focus-visible:ring-ring relative h-4 w-4 shrink-0 rounded ring-gray-300 transition focus-visible:outline-none focus-visible:ring-2",
      "border border-gray-400 bg-white dark:bg-gray-800",
      "data-[state=checked]:border-primary-500 data-[state=checked]:bg-primary-500 data-[state=checked]:text-white",
      "data-[state=indeterminate]:border-primary-500 data-[state=indeterminate]:bg-primary-500 data-[state=indeterminate]:text-white",
      disabled &&
        "cursor-not-allowed border-gray-300 bg-gray-200 opacity-50 data-[state=checked]:border-gray-300 data-[state=checked]:bg-gray-200",
      variant === "outline" && "border-2 border-gray-500",
      variant === "filled" && "bg-gray-200 data-[state=checked]:bg-primary-600",
      // Purple variant styling
      variant === "purple" && [
        "border-gray-300 bg-white",
        "hover:border-purple-400 hover:bg-white",
        "focus:border-purple-400 focus:bg-white",
        "active:border-purple-500 active:bg-white active:ring-2 active:ring-purple-200",
        "data-[state=checked]:border-purple-500 data-[state=checked]:bg-purple-500 data-[state=checked]:text-white",
        "data-[state=checked]:hover:border-purple-600 data-[state=checked]:hover:bg-purple-600",
        "data-[state=checked]:focus:border-purple-600 data-[state=checked]:focus:bg-purple-600",
        "data-[state=checked]:active:border-purple-700 data-[state=checked]:active:bg-purple-700 data-[state=checked]:active:ring-2 data-[state=checked]:active:ring-purple-200",
        "data-[state=indeterminate]:border-purple-500 data-[state=indeterminate]:bg-purple-500 data-[state=indeterminate]:text-white",
        "data-[state=indeterminate]:hover:border-purple-600 data-[state=indeterminate]:hover:bg-purple-600",
        "data-[state=indeterminate]:focus:border-purple-600 data-[state=indeterminate]:focus:bg-purple-600",
        "data-[state=indeterminate]:active:border-purple-700 data-[state=indeterminate]:active:bg-purple-700 data-[state=indeterminate]:active:ring-2 data-[state=indeterminate]:active:ring-purple-200",
        disabled &&
          "cursor-not-allowed border-gray-200 bg-gray-100 opacity-50 data-[state=checked]:border-gray-200 data-[state=checked]:bg-gray-200 data-[state=indeterminate]:border-gray-200 data-[state=indeterminate]:bg-gray-200",
      ],
      className
    )}
    onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter") {
        event.currentTarget.click();
      }
    }}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "absolute inset-0 flex items-center justify-center text-current",
        disabled && "text-gray-400",
        variant === "purple" && disabled && "text-gray-300"
      )}
    >
      {props.checked === "indeterminate" ? (
        <Minus className="h-3.5 w-3.5" />
      ) : (
        <Check className="h-3.5 w-3.5" />
      )}
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = "Checkbox";

export { Checkbox };
