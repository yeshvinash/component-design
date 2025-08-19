import * as React from "react";

import { cva } from "class-variance-authority";
import { X } from "lucide-react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "../../lib/utils";

import { Button } from "../Button";

const DrawerContext = React.createContext<{
  direction?: "right" | "top" | "bottom" | "left";
}>({
  direction: "right",
});

const Drawer = ({
  shouldScaleBackground = true,
  direction = "right",
  dismissible = true,
  ...props
}: React.ComponentProps<typeof DrawerPrimitive.Root> & {
  direction?: "right" | "top" | "bottom" | "left";
}) => (
  <DrawerContext.Provider value={{ direction }}>
    <DrawerPrimitive.Root
      shouldScaleBackground={shouldScaleBackground}
      direction={direction}
      dismissible={dismissible}
      {...props}
    />
  </DrawerContext.Provider>
);
Drawer.displayName = "Drawer";

const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/40", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

const drawerContentVariants = cva(
  "fixed z-50 flex h-auto flex-col border border-gray-300 bg-white",
  {
    variants: {
      direction: {
        right: "ml-24 right-0 inset-y-0",
        top: "mb-24 top-0 rounded-b-[10px] inset-x-0",
        bottom: "mt-24 rounded-t-[10px] bottom-0 inset-x-0",
        left: "mr-24 left-0 rounded-r-[10px] inset-y-0",
      },
    },
    defaultVariants: {
      direction: "right",
    },
  }
);

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { direction } = React.useContext(DrawerContext);

  // Generate direction-specific ARIA label if not provided
  const getDirectionAriaLabel = (dir: string) => {
    const labels = {
      right: "Side panel opened from right",
      left: "Side panel opened from left",
      top: "Panel opened from top",
      bottom: "Panel opened from bottom",
    };
    return labels[dir as keyof typeof labels] || "Panel opened";
  };

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn(
          drawerContentVariants({ direction, className }),
          "fixed right-0 top-0 z-[60] flex h-auto w-auto flex-col"
        )}
        aria-label={
          props["aria-label"] || getDirectionAriaLabel(direction || "right")
        }
        role={props.role || "dialog"}
        {...props}
      >
        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)}
    {...props}
  />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn("mt-auto flex flex-col gap-2 p-4", className)}
    {...props}
  />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title> & {
    onClose?: () => void;
    closeAriaLabel?: string;
    showCloseButton?: boolean;
  }
>(
  (
    {
      className,
      children,
      onClose,
      closeAriaLabel = "Close drawer",
      showCloseButton = false,
      ...props
    },
    ref
  ) => (
    <div
      className={cn(
        "flex items-center justify-between",
        showCloseButton && "pr-2"
      )}
    >
      <DrawerPrimitive.Title
        ref={ref}
        className={cn(
          "text-lg font-semibold leading-none tracking-tight",
          className
        )}
        {...props}
      >
        {children}
      </DrawerPrimitive.Title>
      {showCloseButton && (
        <DrawerPrimitive.Close asChild>
          <Button
            variant="outline"
            size="sm"
            className="h-8 w-8 p-0"
            aria-label={closeAriaLabel}
            {...(onClose && { onClick: onClose })}
          >
            <X size={16} aria-hidden="true" />
            <span className="sr-only">{closeAriaLabel}</span>
          </Button>
        </DrawerPrimitive.Close>
      )}
    </div>
  )
);
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
};
