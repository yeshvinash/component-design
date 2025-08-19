import type { Meta, StoryFn } from "@storybook/react-vite";
import Skeleton from "./Skeleton";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    className: { control: "text" },
  },
} as Meta;

const Template: StoryFn<{ className?: string }> = (args) => (
  <Skeleton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  className: "w-32 h-10",
};
