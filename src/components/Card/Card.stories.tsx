// Card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>This is the card description.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          facilisi. Donec vehicula, nunc non aliquet lacinia, metus sapien
          posuere neque, a dignissim eros ipsum nec nulla.
        </p>
      </CardContent>
      <CardFooter>
        <button className="px-3 py-1 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600">
          Action
        </button>
      </CardFooter>
    </Card>
  ),
};

export const WithCustomBackground: Story = {
  render: (args) => (
    <Card {...args} className="bg-gray-50">
      <CardHeader>
        <CardTitle>Custom Background</CardTitle>
        <CardDescription>
          This card has a light gray background.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside">
          <li>First point</li>
          <li>Second point</li>
          <li>Third point</li>
        </ul>
      </CardContent>
    </Card>
  ),
};
