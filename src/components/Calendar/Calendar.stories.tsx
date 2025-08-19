// Calendar.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Calendar } from "./Calendar";
import { type DateRange } from "react-day-picker";

const meta: Meta<typeof Calendar> = {
  title: "Components/Calendar",
  component: Calendar,
  tags: ["autodocs"],
  args: {
    mode: "single",
    showOutsideDays: true,
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

/**
 * Basic wrapper to manage `selected` state for Storybook stories
 */
const StatefulCalendar = (props: any) => {
  const [selected, setSelected] = useState<
    Date | Date[] | DateRange | undefined
  >();
  return (
    <div className="p-4 bg-gray-50">
      <Calendar {...props} selected={selected} onSelect={setSelected} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <StatefulCalendar {...args} />,
};

export const WithTime: Story = {
  render: (args) => <StatefulCalendar {...args} />,
  args: {
    showTime: true,
  },
};

export const RangeMode: Story = {
  render: (args) => <StatefulCalendar {...args} />,
  args: {
    mode: "range",
  },
};

export const WithDisabledDates: Story = {
  render: (args) => <StatefulCalendar {...args} />,
  args: {
    disabledMinDate: new Date(2025, 0, 10), // disable before Jan 10 2025
    disabledMaxDate: new Date(2025, 0, 20), // disable after Jan 20 2025
  },
};

export const FullTime24Hour: Story = {
  render: (args) => <StatefulCalendar {...args} />,
  args: {
    showTime: true,
    formatFullTime: true,
  },
};
