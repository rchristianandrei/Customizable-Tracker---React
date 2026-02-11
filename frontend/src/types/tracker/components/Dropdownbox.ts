import type { BaseComponent } from "./BaseComponent";

export type DropdownboxType = BaseComponent & {
  type: "Dropdown";
  maxCount: number;
  options: DropdownOption[];
};

export type DropdownOption = {
  id: number;
  value: string;
};
