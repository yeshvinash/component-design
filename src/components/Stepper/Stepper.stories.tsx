// src/components/Stepper/Stepper.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stepper from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["horizontal", "vertical"],
    },
    currentStep: {
      control: { type: "number" },
    },
    onStepClick: { action: "stepClicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Stepper>;

const sampleSteps = [
  {
    title: "Step One",
    description: "This is the first step",
    status: { type: "success", msg: "Completed", title: "Step done" },
  },
  {
    title: "Step Two",
    description: "Second step in the process",
    status: { type: "active", msg: "In progress", title: "Ongoing" },
  },
  {
    title: "Step Three",
    description: "Almost there",
    status: { type: "warning", msg: "Check details", title: "Warning" },
  },
  {
    title: "Step Four",
    description: "Final step",
    status: { type: "", msg: "", title: "" },
  },
];

export const Horizontal: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 1,
    variant: "horizontal",
  },
};

export const Vertical: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 2,
    variant: "vertical",
  },
};

export const ClickableSteps: Story = {
  args: {
    steps: sampleSteps,
    currentStep: 0,
    variant: "horizontal",
    onStepClick: (index) => {
      console.log(`Step ${index + 1} clicked`);
    },
  },
};
