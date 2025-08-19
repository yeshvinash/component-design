import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { cn } from "../../lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-300", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
> & {
  iconPosition?: "start" | "end";
  hideArrowIcon?: boolean;
};

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(
  (
    {
      className,
      children,
      iconPosition = "end",
      hideArrowIcon = false,
      ...props
    },
    ref
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between bg-white px-4 py-4 text-left text-base font-semibold text-gray-800 transition-all [&[data-state=open]>svg]:rotate-180",
          iconPosition === "start" &&
            "[&[data-state=closed]>svg]:-rotate-90 [&[data-state=open]>svg]:rotate-0",
          // iconPosition === 'end' && '[&[data-state=closed]>svg]:rotate-90 [&[data-state=open]>svg]:-rotate-0',
          className
        )}
        {...props}
      >
        {iconPosition === "start" && !hideArrowIcon && (
          <ChevronDown
            className={cn(
              "mr-2 h-5 w-5 shrink-0 text-primary-500 transition-transform duration-200"
            )}
          />
        )}
        <span className="flex-1 text-left">{children}</span>
        {iconPosition === "end" && !hideArrowIcon && (
          <ChevronDown className="ml-2 h-5 w-5 shrink-0 text-primary-500 transition-transform duration-200" />
        )}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div
      className={cn(
        "px-4 pb-4 pt-0 text-base font-normal text-gray-500",
        className
      )}
    >
      {children}
    </div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger };
