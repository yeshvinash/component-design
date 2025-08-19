import { cn } from "../../lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps } from "class-variance-authority";
import * as React from "react";
import { buttonVariants } from "./buttonVariants";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  loading?: boolean;
  buttonChildWrapperClasses?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoadingButton?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      startIcon,
      endIcon,
      size,
      disabled = false,
      loading = false,
      asChild = false,
      type = "button",
      children,
      buttonChildWrapperClasses = "",
      isLoadingButton = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    const renderLoader = () => <span className="spinner-border"></span>;

    return (
      <Comp
        className={cn(
          buttonVariants({ variant: variant, size, className }),
          "relative"
        )}
        type={type}
        disabled={disabled || loading}
        ref={ref}
        {...props}
      >
        {loading
          ? startIcon
            ? // If startIcon exists, replace it with the loader
              renderLoader()
            : // If startIcon is absent, show loader before the text
              !endIcon && <>{renderLoader()}</>
          : startIcon && <>{startIcon}</>}

        {isLoadingButton ? (
          renderLoader()
        ) : (
          <div
            className={cn("flex items-center gap-1", buttonChildWrapperClasses)}
          >
            {children}
          </div>
        )}

        {loading && endIcon ? renderLoader() : endIcon && <>{endIcon}</>}
      </Comp>
    );
  }
);

Button.displayName = "Button";

export default Button;
export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
