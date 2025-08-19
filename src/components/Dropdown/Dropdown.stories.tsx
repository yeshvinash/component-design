import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  DropdownMenuGroup,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "./Dropdown";
import { Button } from "../Button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    const [checkbox1, setCheckbox1] = React.useState(true);
    const [checkbox2, setCheckbox2] = React.useState(false);
    const [radioValue, setRadioValue] = React.useState("option1");

    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">Open Menu</Button>
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuLabel>Menu Label</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem onClick={() => alert("Clicked Item 1")}>
              Item 1
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => alert("Clicked Item 2")}>
              Item 2
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator />

          <DropdownMenuCheckboxItem
            checked={checkbox1}
            onCheckedChange={setCheckbox1}
          >
            Checkbox 1
          </DropdownMenuCheckboxItem>
          <DropdownMenuCheckboxItem
            checked={checkbox2}
            onCheckedChange={setCheckbox2}
          >
            Checkbox 2
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator />

          <DropdownMenuRadioGroup
            value={radioValue}
            onValueChange={setRadioValue}
          >
            <DropdownMenuRadioItem value="option1">
              Option 1
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="option2">
              Option 2
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator />

          <DropdownMenuSub>
            <DropdownMenuSubTrigger>More Options</DropdownMenuSubTrigger>
            <DropdownMenuSubContent>
              <DropdownMenuItem>Sub Option 1</DropdownMenuItem>
              <DropdownMenuItem>Sub Option 2</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
};
