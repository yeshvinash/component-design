import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "./Select";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  tags: ["autodocs"],
  component: Select,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
];

export const Default: Story = {
  render: () => {
    const [selected, setSelected] = useState(selectOptions[0].value);

    return (
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger className="w-56">
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent className="w-56">
          {selectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    );
  },
};

export const WithPreselectedValue: Story = {
  render: () => (
    <Select defaultValue={selectOptions[1].value}>
      <SelectTrigger className="w-56">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-56">
        {selectOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Select defaultValue={selectOptions[0].value} disabled>
      <SelectTrigger className="w-56 opacity-50 cursor-not-allowed">
        <SelectValue />
      </SelectTrigger>
      <SelectContent className="w-56">
        {selectOptions.map((option) => (
          <SelectItem key={option.value} value={option.value}>
            {option.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  ),
};
