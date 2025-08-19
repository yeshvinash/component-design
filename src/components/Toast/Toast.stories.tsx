import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import Toast from "./Toast";
import { Star } from "lucide-react";

const meta: Meta<typeof Toast> = {
  title: "Components/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A toast notification component with different variants for displaying various types of messages to users.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
      description: "The visual variant of the toast",
    },
    title: {
      control: { type: "text" },
      description: "The main title text of the toast",
    },
    description: {
      control: { type: "text" },
      description: "Optional description text below the title",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
    onClose: {
      action: "closed",
      description: "Callback function when the toast is closed",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic stories for each variant
export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    description: "This is an informational message for the user.",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    description: "Operation completed successfully!",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    description: "Please review your input before proceeding.",
  },
};

export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    description: "Something went wrong. Please try again.",
  },
};

// Story without description
export const TitleOnly: Story = {
  args: {
    variant: "info",
    title: "Simple notification",
  },
};

// Story without close button
export const NoCloseButton: Story = {
  args: {
    variant: "success",
    title: "Auto-dismiss",
    description: "This toast will not show a close button.",
    showCloseButton: false,
  },
};

// Story with custom icon
export const CustomIcon: Story = {
  args: {
    variant: "info",
    title: "Custom Icon",
    description: "This toast uses a custom star icon instead of the default.",
    icon: <Star className="w-5 h-5" />,
  },
};

// Interactive story with state management
const InteractiveToast = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [variant, setVariant] = useState<
    "info" | "success" | "warning" | "error"
  >("info");

  const showToast = (newVariant: typeof variant) => {
    setVariant(newVariant);
    setIsVisible(true);
  };

  const hideToast = () => {
    setIsVisible(false);
  };

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <button
          onClick={() => showToast("info")}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Show Info
        </button>
        <button
          onClick={() => showToast("success")}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Show Success
        </button>
        <button
          onClick={() => showToast("warning")}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
        >
          Show Warning
        </button>
        <button
          onClick={() => showToast("error")}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Show Error
        </button>
      </div>

      {isVisible && (
        <Toast
          variant={variant}
          title={`${variant.charAt(0).toUpperCase() + variant.slice(1)} Toast`}
          description={`This is a ${variant} toast notification. Click the close button to dismiss it.`}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveToast />,
  parameters: {
    docs: {
      description: {
        story:
          "Interactive example showing how to control toast visibility and variants programmatically.",
      },
    },
  },
};

// Multiple toasts story
const MultipleToastsExample = () => {
  const [toasts, setToasts] = useState([
    {
      id: 1,
      variant: "info" as const,
      title: "System Update",
      description: "New features are available.",
    },
    {
      id: 2,
      variant: "success" as const,
      title: "Profile Saved",
      description: "Your changes have been saved successfully.",
    },
    {
      id: 3,
      variant: "warning" as const,
      title: "Storage Warning",
      description: "You're running low on storage space.",
    },
    {
      id: 4,
      variant: "error" as const,
      title: "Connection Failed",
      description: "Unable to connect to the server.",
    },
  ]);

  const removeToast = (id: number) => {
    setToasts(toasts.filter((toast) => toast.id !== id));
  };

  return (
    <div className="space-y-3">
      {toasts.map((toast) => (
        <Toast
          key={toast.id}
          variant={toast.variant}
          title={toast.title}
          description={toast.description}
          onClose={() => removeToast(toast.id)}
        />
      ))}
    </div>
  );
};

export const MultipleToasts: Story = {
  render: () => <MultipleToastsExample />,
  parameters: {
    docs: {
      description: {
        story:
          "Example showing multiple toasts displayed together, each with different variants and content.",
      },
    },
  },
};

// Playground story for testing all props
export const Playground: Story = {
  args: {
    variant: "info",
    title: "Toast Title",
    description:
      "This is a customizable toast description. You can modify all the props using the controls panel.",
    showCloseButton: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with different prop combinations and see how the toast changes in real-time.",
      },
    },
  },
};
