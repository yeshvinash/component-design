import { cva } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 cursor-pointer focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        gray: "text-gray-500 bg-gray-50 border border-gray-300",
        primary: "text-primary-500 bg-primary-50 border border-primary-500",
        error: "text-error-700 bg-error-50 border border-error-700",
        warning: "text-warning-500 bg-warning-50 border border-warning-500",
        success: "text-success-500 bg-success-50 border border-success-500",
        info: "text-info-500 bg-info-50 border border-info-500",
        outline:
          "min-h-[22px] bg-transparent py-[3px] px-1 gap-1 text-gray-800 text-xs font-semibold bg-transparent rounded-full",
        numbergray:
          "border-gray-300 rounded-full min-h-[22px] max-h-[22px] bg-gray-200 text-xs font-semibold text-gray-500 py-[3px] px-1.5 leading-[12px]",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);
