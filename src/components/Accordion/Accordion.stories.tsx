import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./Accordion";

const meta: Meta<typeof Accordion> = {
  title: "Components/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  argTypes: {
    iconPosition: {
      control: "select",
      options: ["start", "end"],
    },
    hideArrowIcon: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

// A reusable template for Accordion stories
const Template = (args: {
  iconPosition: "start" | "end";
  hideArrowIcon: boolean;
}) => (
  <Accordion type="single" collapsible className="w-full max-w-md">
    <AccordionItem value="item-1">
      <AccordionTrigger
        iconPosition={args.iconPosition}
        hideArrowIcon={args.hideArrowIcon}
      >
        What is Storybook?
      </AccordionTrigger>
      <AccordionContent>
        Storybook is a frontend workshop for building UI components and pages in
        isolation. It helps you document and test components.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger
        iconPosition={args.iconPosition}
        hideArrowIcon={args.hideArrowIcon}
      >
        What is Radix UI?
      </AccordionTrigger>
      <AccordionContent>
        Radix UI is a library of unstyled, accessible primitives for building
        high-quality design systems and web apps.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger
        iconPosition={args.iconPosition}
        hideArrowIcon={args.hideArrowIcon}
      >
        What is Tailwind CSS?
      </AccordionTrigger>
      <AccordionContent>
        Tailwind CSS is a utility-first CSS framework for creating custom
        designs quickly without leaving your HTML.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export const Default: Story = {
  render: Template,
  args: {
    iconPosition: "end",
    hideArrowIcon: false,
  },
};

export const IconAtStart: Story = {
  render: Template,
  args: {
    iconPosition: "start",
    hideArrowIcon: false,
  },
};

export const WithoutIcon: Story = {
  render: Template,
  args: {
    iconPosition: "end",
    hideArrowIcon: true,
  },
};
