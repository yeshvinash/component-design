import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "./Popover";
import { Button } from "../Button";

const meta: Meta<typeof PopoverContent> = {
  title: "Components/Popover",
  component: PopoverContent,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    align: {
      control: "select",
      options: ["start", "center", "end"],
    },
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
    },
    sideOffset: {
      control: "number",
    },
    role: {
      control: "select",
      options: ["dialog", "menu", "tooltip"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof PopoverContent>;

export const Default: Story = {
  render: (args) => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="primary">Open Popover</Button>
      </PopoverTrigger>
      <PopoverContent {...args}>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-700">
            This is the popover content. You can put any elements here.
          </p>
          <PopoverClose asChild>
            <Button variant="outline" size="sm">
              Close
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  ),
  args: {
    align: "center",
    side: "top",
    sideOffset: 4,
    role: "dialog",
    "aria-label": "Example popover",
  },
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-wrap gap-6">
      {(["top", "right", "bottom", "left"] as const).map((side) => (
        <Popover key={side}>
          <PopoverTrigger asChild>
            <Button variant="outline">{side}</Button>
          </PopoverTrigger>
          <PopoverContent side={side} aria-label={`Popover on ${side}`}>
            Content on {side}
          </PopoverContent>
        </Popover>
      ))}
    </div>
  ),
};

export const WithCustomContainer: Story = {
  render: () => {
    const containerRef = React.useRef<HTMLDivElement>(null);

    return (
      <div ref={containerRef} className="p-8 border border-dashed">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="primary">Open Inside Container</Button>
          </PopoverTrigger>
          <PopoverContent container={containerRef.current}>
            This popover is rendered inside a custom container.
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
