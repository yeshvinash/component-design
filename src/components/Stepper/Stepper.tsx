import React from "react";

import { Check, CircleAlert, TriangleAlert } from "lucide-react";

import { cn } from "../../lib/utils";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../Tooltip";

interface StepperProps {
  steps: {
    title: string;
    description?: string;
    status?: {
      type: "success" | "error" | "warning" | "active" | "";
      msg: string;
      title: string;
    };
    stepClasses?: string;
  }[];
  currentStep: number;
  variant?: "horizontal" | "vertical";
  onStepClick?: (val: number) => void;
  mainClass?: string;

  // 508 compliance props
  "aria-label"?: string;
  "aria-labelledby"?: string;
  "aria-describedby"?: string;
  id?: string;
  role?: string;
  stepAriaLabel?: (stepIndex: number, step: any) => string;
}

const getStepCircleStyle = (
  status: "success" | "error" | "warning" | "active" | ""
) => {
  switch (status) {
    case "success":
      return "border-success-500 bg-success-50";
    case "error":
      return "border-error-500 bg-error-50";
    case "warning":
      return "border-warning-500 bg-warning-50";
    case "active":
      return "border-primary-500 bg-primary-200";
    default:
      return "border-gray-500 bg-gray-200";
  }
};
const getStepIcon = (
  status: "success" | "error" | "warning" | "active" | ""
) => {
  switch (status) {
    case "success":
      return (
        <Check
          className="h-3 w-3 stroke-success-500 transition-all"
          aria-hidden="true"
        />
      );
    case "error":
      return (
        <CircleAlert
          className="h-3 w-3 stroke-error-500 transition-all"
          aria-hidden="true"
        />
      );
    case "warning":
      return (
        <TriangleAlert
          className="h-3 w-3 stroke-warning-500 transition-all"
          aria-hidden="true"
        />
      );
    case "active":
      return (
        <div
          className="h-2 w-2 rounded-full bg-primary-500 transition-all"
          aria-hidden="true"
        />
      );
    default:
      return (
        <div
          className="h-2 w-2 rounded-full bg-gray-500 transition-all"
          aria-hidden="true"
        />
      );
  }
};

const getConnectingLineColor = (
  status: "success" | "error" | "warning" | "active" | ""
) => {
  switch (status) {
    case "success":
      return "border-success-200";
    case "error":
      return "border-error-200";
    case "warning":
      return "border-warning-200";
    default:
      return "border-gray-300";
  }
};
const getTooltipStyle = (
  status: "success" | "error" | "warning" | "active" | ""
) => {
  switch (status) {
    case "success":
      return "bg-success-100 border border-success-500 ";
    case "error":
      return "bg-error-100 border border-error-500 ";
    case "warning":
      return "bg-warning-50 border border-warning-500 [&>svg]:text-red-500 ";
    default:
      return "bg-gray-100 border border-gray-400";
  }
};

const getStepStatusText = (
  index: number,
  currentStep: number,
  status?: {
    type: "success" | "error" | "warning" | "active" | "";
    msg: string;
    title: string;
  }
) => {
  if (status?.type) {
    switch (status.type) {
      case "success":
        return "completed successfully";
      case "error":
        return "has errors";
      case "warning":
        return "has warnings";
      case "active":
        return "in progress";
      default:
        return "pending";
    }
  }

  if (index < currentStep) return "completed";
  if (index === currentStep) return "current step";
  return "upcoming";
};
const getTooltipArrowStyle = (
  status: "success" | "error" | "warning" | "active" | ""
) => {
  switch (status) {
    case "success":
      return "fill-success-500";
    case "error":
      return "fill-error-500";
    case "warning":
      return "fill-warning-500";
    default:
      return "fill-gray-400";
  }
};

const Stepper: React.FC<StepperProps> = ({
  steps,
  mainClass,
  currentStep,
  variant = "horizontal",
  onStepClick,

  // 508 compliance props
  "aria-label": ariaLabel = "Step progress",
  "aria-labelledby": ariaLabelledBy,
  "aria-describedby": ariaDescribedBy,
  id,
  role = "progressbar",
  stepAriaLabel,
}) => {
  const totalSteps = steps.length;
  return (
    <div
      className={cn(
        "flex gap-10",
        variant === "vertical"
          ? "flex-col items-start"
          : "flex-row items-center justify-center",
        mainClass
      )}
      role={role}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      id={id}
      aria-valuemin={0}
      aria-valuemax={totalSteps - 1}
      aria-valuenow={currentStep}
      aria-valuetext={`Step ${currentStep + 1} of ${totalSteps}: ${
        steps[currentStep]?.title
      }`}
    >
      {/* Screen reader status */}
      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Step {currentStep + 1} of {totalSteps}: {steps[currentStep]?.title}
      </div>

      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isSuccess = index < currentStep;
        const isVertical = variant === "vertical";
        const stepStatus = isActive
          ? "active"
          : step?.status?.type
          ? step?.status?.type
          : isSuccess
          ? "success"
          : "";

        const statusText = getStepStatusText(index, currentStep, step.status);
        const defaultStepAriaLabel = stepAriaLabel
          ? stepAriaLabel(index, step)
          : `Step ${index + 1}: ${step.title}, ${statusText}`;

        return (
          <div
            key={index}
            className={cn(
              "relative flex pt-[32px]",
              isVertical ? "flex-row items-start" : "flex-col items-center",
              step.stepClasses
            )}
            onClick={() => onStepClick && onStepClick(index)}
            role="listitem"
            aria-label={defaultStepAriaLabel}
          >
            {/* Step Circle */}
            <div className="relative z-10 flex items-center justify-center">
              <TooltipProvider>
                <Tooltip open={step?.status?.type ? undefined : false}>
                  <TooltipTrigger
                    className={cn(
                      "absolute text-xs font-semibold transition-all",
                      isVertical ? "right-full top-0 me-3.5" : "-top-7"
                    )}
                    onClick={(e) => {
                      e.preventDefault();
                      onStepClick && onStepClick(index);
                    }}
                    tabIndex={onStepClick ? 0 : -1}
                    role={onStepClick ? "button" : "presentation"}
                    aria-label={
                      onStepClick ? `Go to ${defaultStepAriaLabel}` : undefined
                    }
                    onKeyDown={(e) => {
                      if (onStepClick && (e.key === "Enter" || e.key === " ")) {
                        e.preventDefault();
                        onStepClick(index);
                      }
                    }}
                  >
                    <div
                      className={cn(
                        "flex h-6 w-6 items-center justify-center rounded-full border transition-all",
                        getStepCircleStyle(stepStatus)
                      )}
                      role="img"
                      aria-label={`Step ${index + 1} status: ${statusText}`}
                    >
                      {getStepIcon(stepStatus)}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent
                    side={isVertical ? "left" : "top"}
                    className={cn(
                      "group max-w-[320px] space-y-1 rounded-md p-3 shadow-sm",
                      getTooltipStyle(step?.status?.type || "")
                    )}
                    tooltipClassName={getTooltipArrowStyle(
                      step?.status?.type || ""
                    )}
                    role="tooltip"
                  >
                    <p className="text-xs font-semibold text-primary-500">
                      {step?.status?.title}
                    </p>
                    <p className="text-xs font-normal leading-normal text-gray-500">
                      {step?.status?.msg}
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={cn(
                  "absolute transition-all",
                  isVertical
                    ? "-left-[26px] top-2.5 -z-10 h-[90px] w-[2px] border-l-2"
                    : "left-[70px] top-4 w-[230px] max-w-[160px] border",
                  getConnectingLineColor(stepStatus)
                )}
                aria-hidden="true"
                role="presentation"
              ></div>
            )}
            {/* </div> */}

            {/* Step Title & Description */}
            <div
              className={cn(isVertical ? "ml-3.5 text-left" : "text-center")}
              id={`step-${index}-content`}
            >
              <h3
                className={cn(
                  "text-base font-semibold transition-all",
                  isVertical ? "mt-0" : "mt-3",
                  isActive || isSuccess ? "text-gray-800" : "text-gray-500"
                )}
                aria-current={isActive ? "step" : undefined}
              >
                {step.title}
              </h3>
              <p
                className="mt-1 line-clamp-2 w-32 text-xs text-gray-500"
                aria-describedby={`step-${index}-content`}
              >
                {step.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Stepper;
