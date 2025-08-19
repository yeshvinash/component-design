// Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "./Input";
import { Search, Mail, Info, CheckCircle } from "lucide-react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "danger", "success"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
  },
};

export const WithIcons: Story = {
  args: {
    label: "Search",
    placeholder: "Search...",
    startIcon: <Search size={16} />,
    endIcon: <Mail size={16} />,
    helperText: "Type something to search",
    helperIcon: <Info size={14} />,
  },
};

export const ErrorState: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    error: true,
    helperText: "Invalid email address",
    helperIcon: <Info size={14} />,
  },
};

export const SuccessState: Story = {
  args: {
    label: "Profile Name",
    placeholder: "Looks good!",
    variant: "success",
    helperText: "Profile name is available",
    helperIcon: <CheckCircle size={14} />,
  },
};

export const WithButton: Story = {
  args: {
    label: "Promo Code",
    placeholder: "Enter code",
    buttonText: "Apply",
    onButtonClick: () => alert("Button clicked!"),
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" placeholder="Small input" label="Small" />
      <Input {...args} size="md" placeholder="Medium input" label="Medium" />
      <Input {...args} size="lg" placeholder="Large input" label="Large" />
    </div>
  ),
};
