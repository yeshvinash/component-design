import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { DatePicker } from "./DatePicker";

const meta: Meta<typeof DatePicker> = {
  title: "Components/DatePicker",
  component: DatePicker,
  tags: ["autodocs"],
  args: {
    disabled: false,
    readOnly: false,
    showTime: false,
    formatFullTime: false,
    placeholder: "Select a date",
    isClear: true,
  },
};

export default meta;
type Story = StoryObj<typeof DatePicker>;

// ---------- Stories ----------

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(undefined);
    return (
      <DatePicker {...args} value={value ?? new Date()} onChange={setValue} />
    );
  },
};

export const WithTime: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={setValue}
        showTime
        placeholder="Pick a date and time"
      />
    );
  },
};

export const WithFullTime: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={setValue}
        showTime
        formatFullTime
        placeholder="Pick a full datetime"
      />
    );
  },
};

export const Disabled: Story = {
  render: (args) => {
    const [value] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={() => {}}
        disabled
      />
    );
  },
};

export const ReadOnly: Story = {
  render: (args) => {
    const [value] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={() => {}}
        readOnly
      />
    );
  },
};

export const WithMinAndMax: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(undefined);
    const minDate = new Date();
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 10);

    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={setValue}
        disabledMinDate={minDate}
        disabledMaxDate={maxDate}
        placeholder="Select within 10 days"
      />
    );
  },
};

export const WithClearButton: Story = {
  render: (args) => {
    const [value, setValue] = useState<Date | undefined>(new Date());
    return (
      <DatePicker
        {...args}
        value={value ?? new Date()}
        onChange={setValue}
        isClear
        onClear={() => setValue(undefined)}
      />
    );
  },
};
