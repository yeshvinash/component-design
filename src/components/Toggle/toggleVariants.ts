import { cva } from "class-variance-authority";

export const toggleVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 [&_svg]:text-gray-500",
  {
    variants: {
      variant: {
        default:
          "border border-gray-300 hover:bg-gray-800 hover:border-gray-800 hover:text-white  data-[state=on]:bg-gray-800 data-[state=on]:text-white data-[state=on]:border-gray-800",
        outline:
          "border border-input shadow-sm hover:bg-gray-800 hover:text-white hover:border-gray-800 data-[state=on]:bg-gray-800 data-[state=on]:text-white data-[state=on]:border-gray-800",
      },
      size: {
        default: "h-9 p-2 min-w-9",
        sm: "h-8 p-1.5 min-w-8",
        lg: "h-10 p-2.5 min-w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
