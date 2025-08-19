import * as React from "react";

import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "../../lib/utils";

const Tabs = TabsPrimitive.Root;

interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.List> {
  variant?: "default" | "underline" | "contained";
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
}

interface TabsTriggerProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> {
  variant?: "default" | "underline" | "contained";
  badgeCount?: number;
  withMenu?: boolean;
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  "aria-current"?: "page" | "step" | "location" | "date" | "time" | boolean;
  badgeAriaLabel?: string;
}

interface TabsContentProps
  extends React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
}

const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  TabsListProps
>(
  (
    {
      className,
      variant = "default",
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default: "bg-gray-100 rounded-lg p-1 border border-gray-300",
      underline: "border-b border-gray-300",
      contained: "w-full flex overflow-hidden",
    };

    return (
      <TabsPrimitive.List
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center",
          variantStyles[variant],
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        role={role}
        {...props}
      />
    );
  }
);
TabsList.displayName = TabsPrimitive.List.displayName;

const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(
  (
    {
      className,
      variant = "default",
      badgeCount,
      withMenu,
      children,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      "aria-current": ariaCurrent,
      badgeAriaLabel,
      ...props
    },
    ref
  ) => {
    const variantStyles = {
      default:
        "rounded-sm data-[state=active]:bg-white data-[state=active]:shadow-sm text-sm data-[state=active]:font-semibold data-[state=active]:text-gray-800 text-gray-500 font-normal",
      underline:
        "px-4 pb-3 pt-0 border-b-2 border-transparent rounded-none data-[state=active]:border-gray-800 text-gray-500 data-[state=active]:font-semibold font-normal data-[state=active]:bg-transparent data-[state=active]:text-gray-800 data-[state=active]:shadow-none",
      contained:
        "py-2.5 px-3 data-[state=active]:bg-primary-100 data-[state=active]:shadow-sm rounded-sm text-gray-500 data-[state=active]:font-semibold data-[state=active]:text-gray-800 font-normal",
    };

    return (
      <TabsPrimitive.Trigger
        ref={ref}
        className={cn(
          "ring-offset-background focus-visible:ring-ring inline-flex items-center justify-center whitespace-nowrap px-3 py-1.5 text-sm !font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 data-[state=active]:font-medium",
          variantStyles[variant],
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        aria-current={ariaCurrent}
        // tabIndex={0}
        onKeyDown={(event: React.KeyboardEvent<HTMLButtonElement>) => {
          if (event.key === "Enter") {
            event.currentTarget.click();
          }
        }}
        {...props}
      >
        {children}
        {badgeCount !== undefined && (
          <span
            className="ml-2 flex h-[22px] w-[22px] items-center justify-center rounded-full bg-gray-200 text-xs text-gray-500"
            aria-label={badgeAriaLabel || `${badgeCount} items`}
            role="status"
          >
            {badgeCount}
          </span>
        )}
        {withMenu && (
          <span className="ml-2" aria-hidden="true" role="presentation">
            •••
          </span>
        )}
      </TabsPrimitive.Trigger>
    );
  }
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  TabsContentProps
>(
  (
    {
      className,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role,
      ...props
    },
    ref
  ) => (
    <TabsPrimitive.Content
      ref={ref}
      className={cn("ring-offset-background", className)}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      role={role}
      {...props}
    />
  )
);
TabsContent.displayName = TabsPrimitive.Content.displayName;

export { Tabs, TabsContent, TabsList, TabsTrigger };
