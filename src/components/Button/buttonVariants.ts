import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "gap-1.5 text-sm font-semibold transition-all duration-300 rounded-sm inline-flex items-center justify-center relative focus-visible:outline-none focus-visible:ring-gray-300 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:text-gray-400 disabled:bg-gray-200 disabled:border disabled:border-gray-200",
  {
    variants: {
      variant: {
        primary:
          "bg-primary-500 text-white hover:text-primaryDark hover:bg-primary-600",
        outline:
          "border border-gray-300 hover:border-transparent text-gray-500 hover:bg-primary-200",
        ghost: "hover:bg-gray-200 hover:text-gray-600 text-gray-500",
        linkText:
          "text-primary-500 hover:text-primary-600 underline-offset-4 hover:underline decoration-primary-600 !p-0 !h-auto",
        time: "bg-primary-500 hover:bg-gray-100 !text-white hover:!text-gray-800",
        link: "",
        secondary: "border-transparent text-primary-500 bg-primary-100",
      },
      size: {
        default: "h-8 px-3 py-1.5",
        sm: "h-8 px-3 py-1.5",
        md: "h-9 px-4 py-1.5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
    },
  }
);
