import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "./Tooltip";
import { Button } from "../Button";

const meta: Meta<typeof TooltipContent> = {
  title: "Components/Tooltip",
  component: TooltipContent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      control: { type: "number" },
    },
    role: {
      control: "select",
      options: ["tooltip", "dialog", "alert"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="primary">Hover Me</Button>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          sideOffset={4}
          role="tooltip"
          aria-label="Example tooltip"
        >
          This is a tooltip
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};

export const Positions: Story = {
  render: () => (
    <TooltipProvider>
      <div className="flex gap-6">
        {(["top", "right", "bottom", "left"] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger asChild>
              <Button variant="outline">{side}</Button>
            </TooltipTrigger>
            <TooltipContent side={side}>Tooltip on {side}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  ),
};

export const WithCustomStyling: Story = {
  render: () => (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Custom Tooltip</Button>
        </TooltipTrigger>
        <TooltipContent
          className="bg-red-600 text-white"
          tooltipClassName="fill-red-600"
        >
          This tooltip has custom colors
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  ),
};
