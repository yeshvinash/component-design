import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonGroup } from "./ButtonGroup";
import { Star, Heart } from "lucide-react";

const meta: Meta<typeof ButtonGroup> = {
  title: "Components/ButtonGroup",
  component: ButtonGroup,
  tags: ["autodocs"],
  argTypes: {
    onSelect: { action: "selected" },
    icon: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ButtonGroup>;

export const Default: Story = {
  args: {
    buttonOptions: ["Option 1", "Option 2", "Option 3"],
    forSelect: true,
    defaultSelected: 0,
  },
};

export const WithStatus: Story = {
  args: {
    buttonOptions: ["Active", "Inactive"],
    status: true,
    forSelect: true,
    defaultSelected: 0,
  },
};

export const WithIcon: Story = {
  args: {
    buttonOptions: ["Star", "Heart"],
    icon: <Star size={14} />,
    forSelect: true,
    defaultSelected: 0,
  },
};

export const DifferentIcons: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ButtonGroup
        buttonOptions={["Star", "Heart"]}
        icon={<Star size={14} />}
        forSelect
        defaultSelected={0}
        onSelect={(val) => console.log("Selected:", val)}
      />
      <ButtonGroup
        buttonOptions={["Star", "Heart"]}
        icon={<Heart size={14} />}
        forSelect
        defaultSelected={1}
        onSelect={(val) => console.log("Selected:", val)}
      />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    buttonOptions: ["Option A", "Option B", "Option C"],
    disabled: true,
    forSelect: true,
    defaultSelected: 1,
  },
};
