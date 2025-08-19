import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { RadioGroup, RadioGroupItem } from "./Radio";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  render: () => {
    const [value, setValue] = React.useState("option1");

    return (
      <div className="flex flex-col gap-4">
        <RadioGroup value={value} onValueChange={setValue}>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option1" id="option1" />
            <label htmlFor="option1" className="cursor-pointer">
              Option 1
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option2" id="option2" />
            <label htmlFor="option2" className="cursor-pointer">
              Option 2
            </label>
          </div>
          <div className="flex items-center gap-2">
            <RadioGroupItem value="option3" id="option3" disabled />
            <label htmlFor="option3" className="cursor-not-allowed opacity-50">
              Option 3 (Disabled)
            </label>
          </div>
        </RadioGroup>

        <p className="text-sm text-gray-600">
          Selected: <strong>{value}</strong>
        </p>
      </div>
    );
  },
};
