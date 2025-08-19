import { useState } from "react";

export const useButtonGroup = (
  defaultSelected: number | undefined,
  forSelect: boolean,
  disabled: boolean,
  onSelect?: (selected: string) => void,
  buttonOptions?: string[]
) => {
  const [selected, setSelected] = useState<number | null>(
    defaultSelected || null
  );

  const handleSelect = (index: number) => {
    if (forSelect && !disabled) {
      setSelected(index);
      onSelect && onSelect(buttonOptions ? buttonOptions[index] : "");
    }
  };
  return {
    selected,
    setSelected,
    handleSelect,
  };
};
