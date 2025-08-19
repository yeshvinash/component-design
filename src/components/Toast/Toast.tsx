import * as React from "react";
import { cn } from "../../lib/utils";
import { type VariantProps } from "class-variance-authority";
import { toastVariants } from "./toastVariants";
import { X, Info, CheckCircle, AlertTriangle, AlertCircle } from "lucide-react";

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  title: string;
  description?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
  icon?: React.ReactNode;
}

const Toast = React.forwardRef<HTMLDivElement, ToastProps>(
  (
    {
      className,
      variant = "info",
      title,
      description,
      onClose,
      showCloseButton = true,
      icon,
      ...props
    },
    ref
  ) => {
    const getDefaultIcon = () => {
      switch (variant) {
        case "success":
          return <CheckCircle className="w-5 h-5" />;
        case "warning":
          return <AlertTriangle className="w-5 h-5" />;
        case "error":
          return <AlertCircle className="w-5 h-5" />;
        case "info":
        default:
          return <Info className="w-5 h-5" />;
      }
    };

    const handleClose = () => {
      if (onClose) {
        onClose();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(toastVariants({ variant, className }))}
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0">{icon || getDefaultIcon()}</div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h4 className="text-sm font-semibold text-gray-900 mb-1">
              {title}
            </h4>
            {description && (
              <p className="text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            )}
          </div>

          {/* Close Button */}
          {showCloseButton && (
            <button
              onClick={handleClose}
              className="flex-shrink-0 w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors duration-200 rounded-full hover:bg-gray-100 flex items-center justify-center"
              aria-label="Close toast"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

Toast.displayName = "Toast";

export default Toast;
export type ToastVariant = VariantProps<typeof toastVariants>["variant"];
