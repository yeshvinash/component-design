import * as React from "react";

import * as SelectPrimitive from "@radix-ui/react-select";
import { ChevronDown, ChevronUp, X as CloseIcon } from "lucide-react";

import { cn } from "../../lib/utils";

import { Button } from "../Button";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  onClear?: () => void;
  hasValue?: boolean;
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  clearAriaLabel?: string;
}

interface SelectContentProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> {
  container?: HTMLElement | null;
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
}

interface SelectLabelProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label> {
  // 508 compliance props
  "aria-label"?: string;
  id?: string;
}

interface SelectItemProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
}

interface SelectScrollButtonProps
  extends React.ComponentPropsWithoutRef<
    typeof SelectPrimitive.ScrollUpButton
  > {
  // 508 compliance props
  "aria-label"?: string;
  id?: string;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(
  (
    {
      className,
      children,
      hasValue,
      onClear,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      clearAriaLabel = "Clear selection",
      ...props
    },
    ref
  ) => (
    <div className="relative">
      <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
          "ring-offset-background focus:ring-ring flex h-8 w-full items-center justify-between whitespace-nowrap rounded-md border border-gray-200 bg-white px-2.5 text-sm font-normal text-gray-800 focus:outline-none focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50 data-[placeholder]:font-normal data-[placeholder]:text-gray-400 [&>span]:line-clamp-1 [&>span]:leading-normal",
          className
        )}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        {...props}
      >
        {children}
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="h-4 w-4 stroke-gray-500" aria-hidden="true" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      {hasValue && (
        <Button
          variant="link"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClear?.();
          }}
          className="absolute right-8 top-1/2 -translate-y-1/2 !px-0 text-gray-800 hover:text-gray-800"
          aria-label={clearAriaLabel}
          type="button"
          tabIndex={0}
        >
          <CloseIcon className="h-4 w-4" aria-hidden="true" />
        </Button>
      )}
    </div>
  )
);
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  SelectScrollButtonProps
>(({ className, "aria-label": ariaLabel = "Scroll up", id, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn(
      "flex cursor-default items-center justify-center bg-white py-1",
      className
    )}
    aria-label={ariaLabel}
    id={id}
    {...props}
  >
    <ChevronUp className="h-4 w-4" aria-hidden="true" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  SelectScrollButtonProps
>(
  (
    { className, "aria-label": ariaLabel = "Scroll down", id, ...props },
    ref
  ) => (
    <SelectPrimitive.ScrollDownButton
      ref={ref}
      className={cn(
        "flex cursor-default items-center justify-center bg-white py-1",
        className
      )}
      aria-label={ariaLabel}
      id={id}
      {...props}
    >
      <ChevronDown className="h-4 w-4" aria-hidden="true" />
    </SelectPrimitive.ScrollDownButton>
  )
);
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  SelectContentProps
>(
  (
    {
      className,
      children,
      position = "popper",
      "aria-label": ariaLabel = "Select options",
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      role = "listbox",
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Portal container={props.container}>
      <SelectPrimitive.Content
        ref={ref}
        className={cn(
          "relative z-[100] max-h-96 min-w-[8rem] overflow-hidden rounded-md border border-gray-300 shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
        id={id}
        role={role}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "flex flex-col gap-0.5 bg-white p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
);
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  SelectLabelProps
>(({ className, "aria-label": ariaLabel, id, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn("px-2 py-1.5 text-sm font-semibold text-gray-500", className)}
    aria-label={ariaLabel}
    id={id}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(
  (
    {
      className,
      children,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-describedby": ariaDescribedBy,
      id,
      ...props
    },
    ref
  ) => (
    <SelectPrimitive.Item
      ref={ref}
      className={cn(
        "relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm text-gray-800 outline-none hover:bg-gray-200 data-[disabled]:pointer-events-none data-[state=checked]:bg-primary-100 data-[state=checked]:text-gray-800 data-[disabled]:opacity-50",
        className
      )}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
);
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn("bg-muted -mx-1 my-1 h-px", className)}
    role="separator"
    aria-hidden="true"
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
